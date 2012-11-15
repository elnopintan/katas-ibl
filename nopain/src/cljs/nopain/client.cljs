(ns nopain.client 
  (:require [fetch.remotes :as remotes]
            [goog.events :as events]
            [goog.Timer :as timer]
            [enfocus.core :as ef]
            [nopain.execs :as ex]
            [nopain.counter :as c]
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
                   (if-let [f (:run @curr-slide)] (ex/stop f))
                   (reset! curr-slide {:name (:name r) :pos (:pos r) :run (:run r)})
                   (em/at js/document ["#main"] (em/content (:html r)))
                   (if-let [ f (:run r)]
                     (ex/run f))
                   (.highlight js/SyntaxHighlighter))))))


 

(events/listen timer goog.Timer/TICK refreshSlides)

