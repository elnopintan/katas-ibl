(ns nopain.slides.presentation
  (:use nopain.handler)
  (:use nopain.slides)
  (:require [nopain.slides.data :as d]))


(run-server)

(new-slide d/intro)
(next-slide)

(new-slide d/counter)

(new-slide d/game)

(new-slide d/resolve-counter)

(new-slide d/identity-value)
(next-slide)

(new-slide d/curso-relampago)
(next-slide)

(new-slide d/curso-relampago-2)
(next-slide)

(new-slide d/atomo)
(next-slide)

(new-slide d/game)
(next-slide)

