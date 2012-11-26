(ns nopain.game
  (:use [noir.fetch.remotes :only [defremote]])
  )

(def players (atom {}))
(def news (agent [[0 ""]]))

(defn new-player [player-map player]
  (assoc player-map player (ref 100)))

(defn add-player[name]
  (swap! players 
         #(if (not (% name))
            (new-player % name))))


(defn notify [text] 
  (send news 
    (fn [v]
      (let [[n _] (last v)]
        (vec (take-last 10 
               (conj v [(inc n) text])))))))


(defn steal-coins [victim thief]
  (let [current-players @players]
    (dosync
     (if (> @(current-players victim) 0)
       (do
         (notify (str thief 
            " stealed to " victim))
         (alter (current-players victim) dec)
         (alter (current-players thief) inc))
       (do
         (notify (str thief 
            " couldn't steal to " victim))
         @(current-players thief))))))

(defn coins? [p-name]
	@(@players p-name))

(defremote register [p-name]
  (add-player p-name)
  (coins? p-name))

(defremote get-coins [p-name]
  (coins? p-name))


(defremote get-players []
  (into #{} (keys @players)))

(defremote steal [thief victim]
  (steal-coins victim thief))

(defremote read-news []
   (map (fn [[n text]] (str n ":" text)) @news))

(defn random-steal [times]
  (letfn 
    [(do-steal [] 
               (apply steal-coins (take 2 (shuffle (keys @players)))))]
    (dorun (apply pcalls (repeat times do-steal)))))
