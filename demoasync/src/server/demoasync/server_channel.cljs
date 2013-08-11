(ns demoasync.server-channel
 (:require
    [cljs.core.async :as async
     :refer [<! >! chan timeout close!]])
 (:require-macros
  [cljs.core.async.macros :as m :refer [go]]))


(defn server-chan [port]
  (let [c (chan)
        connect (js/require "connect")]
        (-> (js/connect)
            (.use
                (fn [req res]
                  (let [rc (chan)]
                    (go 
                     (>! c [req rc])  
                     (.writeHead res 200 {"Content-Type" "text-plain"})
                     (.end res (<! rc))))))
            (.listen port))
        c))
    

