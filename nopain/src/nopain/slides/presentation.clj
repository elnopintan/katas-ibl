(ns nopain.slides.presentation
  (:use nopain.handler)
  (:use nopain.slides)
  (:require [nopain.slides.data :as d]
            [nopain.game :as g]
            [nopain.gui :as gui]
            [nopain.slides.par :as p]))

(run-server)

(new-slide d/intro)
(next-slide)

;; Painless concurrency
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

;In the game
(new-slide d/game)
(next-slide)

;Plan B
(comment
(doseq [p (range 0 100)]
(g/register (str "Ladron " p)))

(g/notify "A")
(g/random-steal 5000)
(insert-in-slides [:code "nopain.game/random-steal"])
)

(new-slide d/game-result)
(doseq
  [[player coins] @g/players]
  (insert-in-slides [:i (str player":  "@coins)]))

(dosync (insert-in-slides
          [:i (list [:strong "Total: "]
                 (str (reduce +
                    (map #(deref (second %)) @g/players))))]))

(new-slide d/referencia)
(next-slide)
(new-slide (d/referencia-2))
(next-slide)

(new-slide d/agente)
(next-slide)

(new-slide d/agradecimiento)
(doseq
  [player (keys @g/players)]
  (insert-in-slides [:i (str "Gracias " player)]))

(new-slide d/intro)

;; Painless parallelism

(new-slide p/intro)
(next-slide)

(new-slide p/moore)
(next-slide)

(new-slide p/twocents)
(next-slide)

(new-slide p/streams)
(next-slide)

(new-slide p/galaxy-example)
(next-slide)

(new-slide p/problem-solved)
(next-slide)

(new-slide p/reducers)
(next-slide)

(new-slide p/compared-times)
(next-slide)

(new-slide p/qa-time)
(next-slide)

(comment
  (gui/remote p/slides)
)
