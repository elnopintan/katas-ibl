(ns nopain.counter
  (:require [goog.events :as events]
            [goog.Timer :as timer]
            [enfocus.core :as ef]
            [nopain.execs :as ex]
            )
  (:require-macros [enfocus.macros :as em]))

(def num (atom 1))
(def timer (goog.Timer. 20))

(defn change-count [c]
                     (mod (+ c c) 1000000))

(defn paint [] (em/at js/document ["#counter"]
                      (em/content
                       (str (swap! num change-count)))))

(defn count [] (.start timer)
  (events/listen timer goog.Timer/TICK paint))

(defn stop-count [] (.stop timer))

(ex/add-f "counter" count stop-count )

