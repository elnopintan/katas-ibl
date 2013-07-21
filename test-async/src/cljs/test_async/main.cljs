(ns cljs.test-async.main
 (:require
    [cljs.core.async :as async
     :refer [<! >! chan]])
 (:require-macros
  [cljs.core.async.macros :as m :refer [go]]))

(.log js/console "Hola")

(defn holamundo []
 (.log js/console "Hi"))

(def server-chan (chan))

(defn to-chan [t] 
  (go (>! server-chan t)))

(defn run-server []
   (let [http (js/require "http")]
     (-> (.createServer 
          http 
          (fn [req res]
            (go 
              (let [t (<! server-chan)
                    t2 (<! server-chan)]
                (.writeHead res 200 {"Content-Type" "text-plain"})
                (.end res (str t ":" t2))))))
         (.listen 8124))))
