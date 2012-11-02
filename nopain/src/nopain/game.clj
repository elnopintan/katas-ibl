(ns nopain.game)

(def players (atom {}))
(def news (agent []))
(defn new-player[name]
  (swap! players assoc name (ref 100)))

(defn notify [text] (send fn[v]
                          (vector
                           (take 10 (conj v text)))))

(defn steal-coins [victim thief]
  (let [current-players @players]
    (dosync
     (if (> @(current-players victim) 0)
       (do
         (notify (str thief " stealed to " victim))
         (alter victim dec)
         (alter thief inc))
       (do
         (notify (str thief " couldn't steal to " victim))
         @(current-players thief))))))



