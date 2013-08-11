(ns demoasync.server
 (:require
    [cljs.core.async :as async
     :refer [<! >! chan timeout close!]])
 (:require-macros
  [cljs.core.async.macros :as m :refer [go]]))


(defn server [port]
  (let [ connect (js/require "connect")]
    (-> (js/connect)
        (.use ((aget connect "static") "public"))
        (.listen port))))
    

