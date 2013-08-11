(ns demoasync.cljs 
  (:require-macros [dommy.macros :as dm]
                   [cljs.core.async.macros :refer [go]])
  (:require [dommy.utils :as du]
            [dommy.core :as d]
            [goog.events.EventType]
            [goog.events :as events]
            [goog.style :as style]
            [cljs.core.async :refer [>! <! chan put! close!]]))

(d/append! (dm/sel1 :body) [:div#frame [:div#play  [:h2 "Hola dommy"]]])
(d/set-style! (dm/sel1 :#frame) :border "solid" :width "100%" :height "500px")
(d/set-style! (dm/sel1 :#play)  :color "red" :width "500px" :height "200px" :border "solid")

(defn mouse-chan []
  (let [m (chan)]
    (events/listen (dm/sel1 :#frame)
     goog.events.EventType.MOUSEMOVE
     (fn [e] 
       (.preventDefault e)
       (put! m [(.-offsetX e) (.-offsetY e)])))
    m))

(defn offset [el]
  [(style/getPageOffsetLeft el) (style/getPageOffsetTop el)])

(let [c (mouse-chan)]
  (go (loop []
      (let [[x y] (<! c)
            play (dm/sel1 :#play)
            [l t] (offset play)]
        (d/set-px! play :width (- x l) :height (- y t))
        (d/set-html! play (str "l:" l, ",x:" x ",y:" y ",t:" t))) 
      (recur))))



(def counter  
  (let [ c (chan)]
    (go (loop [i 0] (!> c i) (recur (inc i))))
    c))

(defn sieve [prime counter])
