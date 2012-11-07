(ns nopain.game
  (:use [noir.fetch.remotes :only [defremote]])
  )

(def players (atom {}))
(def news (agent []))
(defn new-player[name]
  (swap! players 
         #(if (not (% name)) (assoc % name (ref 100)) %)))	



(defn notify [text] (send news (fn[v]
                            (vec
                             (drop (- (count v) 10) (conj v text))))))

(defn steal-coins [victim thief]
  (let [current-players @players]
    (dosync
     (if (> @(current-players victim) 0)
       (do
         (notify (str thief " stealed to " victim))
         (alter (current-players victim) dec)
         (alter (current-players thief) inc))
       (do
         (notify (str thief " couldn't steal to " victim))
         @(current-players thief))))))

(defn coins? [p-name]
	@(@players p-name))

(defremote register [p-name]
  (new-player p-name)
  (coins? p-name))

(defremote get-coins [p-name]
  (coins? p-name))


(defremote get-players []
  (into #{} (keys @players)))

(defremote steal [thief victim]
  (steal-coins victim thief))

(defremote read-news []
   @news)

(apply + (map #(deref (second %)) @players))