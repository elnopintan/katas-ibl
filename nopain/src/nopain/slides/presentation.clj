(ns nopain.slides.presentation
  (:use nopain.handler)
  (:use nopain.slides)
  (:require [nopain.slides.data :as d]
            [nopain.game :as g]))


(run-server)

(new-slide d/intro)
(next-slide)

(new-slide d/anim)
(next-slide)

(new-slide d/counter)

(new-slide d/resolve-counter)

(new-slide d/identity-value)
(next-slide)

(new-slide d/identity-value-2)
(next-slide)

(new-slide d/atomo)
(next-slide)

(new-slide d/atomo-2)
(next-slide)

(new-slide d/game)
(next-slide)

(new-slide d/game-result)
(doseq 
  [[player coins] @g/players]
  (insert-in-slides [:i (str player":  "@coins)]))

(dosync
	(insert-in-slides 
    	[:i (list [:strong "Total: "] 
                 (str (reduce + 
                    (map #(deref (second %)) @g/players))))]))


(new-slide (d/referencia))
(next-slide)

(new-slide d/agente)
(next-slide)

(new-slide d/agradecimiento)
(doseq 
  [player (keys @g/players)]
  (insert-in-slides [:i (str "Gracias " player)]))

(new-slide d/intro)






