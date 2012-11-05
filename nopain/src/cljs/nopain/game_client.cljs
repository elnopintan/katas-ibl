(ns nopain.game-client
  (:require [fetch.remotes :as remotes]
            [goog.events :as events]
            [goog.Timer :as timer]
            [enfocus.core :as ef]
            [nopain.execs :as ex]
            [nopain.counter :as c]
            )
  (:use [clojure.set :only [difference union]])
  (:require-macros [fetch.macros :as fm]
                   [enfocus.macros :as em]
                   ))


(def timer (goog.Timer. 2000))

(def player-name (atom nil))
(def player-set (atom #{}))

(em/deftemplate t-player "/player" [name]
  ["h3"] (em/content name)
  [".coins"] (em/content coins))

(defn update-players [players]
  (let [curr-players @player-set
        added-players (difference players curr-players)]
    (swap! player-set union players)
    (doseq [[player coins] added-players]
      (em/at js/document ["#players"] (em/append (t-player player))))))
  

(defn register []
  (let [name (.-value (.getElementById js/document "registerinput"))]
    (fm/remote (register name) []
               (reset! player-name name)
               (.start timer)
               (em/at js/document ["#register"] (em/substitute name)))))

(em/defaction setup []
  ["#registerbutton"] (em/listen :click register))

(defn start-game [] (setup))

(defn stop-game [] (.stop timer))

(defn paint-game []
  (fm/remote (get-players) [new-players]
             (update-players new-players)))

(events/listen timer goog.Timer/TICK paint-game)

(ex/add-f "game" start-game stop-game )
