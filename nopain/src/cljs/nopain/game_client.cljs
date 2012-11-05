(ns nopain.game-client
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

(defn register []
  (let [name (.-value (.getElementById js/document "registerinput"))]
    (fm/remote (register name) []
               (em/at js/document ["#register"] (em/substitute name)))))

(em/defaction setup []
  ["#registerbutton"] (em/listen :click register))

(defn start-game [] (setup))

(defn stop-game [] )

(defn paint-game [])
(events/listen timer goog.Timer/TICK paint-game)

(ex/add-f "game" start-game stop-game )
