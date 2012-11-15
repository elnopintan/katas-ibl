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

(defn fill-coins [n]
  (em/at js/document ["#coins"] (em/content (str n " Coins"))))

(defn steal [event]
  (let [{victim :victim} (em/from (.-parentNode (.-currentTarget event))
                              :victim ["h3"] (em/get-text))]
   (fm/remote (steal @player-name victim) [n]
              (fill-coins n))))

(em/deftemplate t-player "/player" [p-name]
  ["h3"] (em/content p-name)
  ["button"] (em/listen :click steal))

(em/deftemplate t-new "/new" [the-new]
  [".new"] (em/content the-new))

(em/deftemplate t-thief "/thief" [t-name coins]
  [".name"] (em/content t-name)
  ["#coins"] (em/content (str coins " Coins")))

(defn update-players [players]
  (let [curr-players @player-set
        added-players (difference players curr-players)]
    (swap! player-set union players)
    (doseq [player added-players]
      (when (not= player @player-name)
      	(em/at js/document ["#players"] (em/append (t-player player)))))))

(defn get-coins []
  (fm/remote (get-coins @player-name) [coins]
             (fill-coins coins)))


(defn register []
  (let [name (.-value (.getElementById js/document "registerinput"))]
    (fm/remote (register name) [coins]
               (reset! player-name name)
               (.start timer)
               (em/at js/document ["#register"] (em/substitute (t-thief name coins))))))

(em/defaction setup []
  ["#registerbutton"] (em/listen :click register))

(defn update-news [] 
  (fm/remote (read-news) [news]
      (em/at js/document ["#news"] 
             (em/content (map t-new news)))))




(defn start-game [] (setup))

(defn stop-game [] 
  (.stop timer)
  (reset! player-set #{}))

(defn paint-game []
  (fm/remote (get-players) [new-players]
             (update-news)
             (get-coins)
             (update-players new-players)))

(events/listen timer goog.Timer/TICK paint-game)

(ex/add-f "game" start-game stop-game )


