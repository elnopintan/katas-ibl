(ns nopain.client 
  (:require [fetch.remotes :as remotes]
            [goog.events :as events]
            [goog.Timer :as timer]
            [enfocus.core :as ef]
            )
  (:require-macros [fetch.macros :as fm]
                   [enfocus.macros :as em]
                   ))

(def timer (goog.Timer. 2000))
(.start timer)

(def curr-slide (atom {:name "" :pos -1}))

(defn refreshSlides []
  (let [{:keys [name pos]} @curr-slide]
    (fm/remote (get-slide name pos) [r]
               (if r
                 (do
                   (reset! curr-slide {:name (:name r) :pos (:pos r)})
                   (em/at js/document ["#main"] (em/content (:html r)))
                   (.highlight js/SyntaxHighlighter))))))
    

 

(events/listen timer goog.Timer/TICK refreshSlides)
