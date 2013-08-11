(ns demoasync.main
  (:require [demoasync.server :refer [server]]
            [demoasync.server-channel :refer [server-chan]]
            [cljs.core.async :refer [<! >! chan timeout]])
  (:require-macros
   [cljs.core.async.macros :refer [go]]))

(defn counter []
  (let [c (chan)]
    (go 
     (loop [i 0] (>! c i) 
           (recur (inc i))))
    c))

(defn run-server-channel [port]
  (let [sc (server-chan 8124)
        c (counter)]
    (go (loop []
      (let [[_ rc] (<! sc)]
        (<! (timeout 60000))
        (>! rc (str "Counter" (<! c)))
        (recur))))))

(.log js/console "Running server-channel")
(run-server-channel 8124)
(.log js/console "Running server")
(server 8080)
            
