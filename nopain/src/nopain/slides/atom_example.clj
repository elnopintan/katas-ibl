(ns nopain.slides.atom-example)

(def num (atom 1))

(defn change-count [c]
  (mod (+ c c) 1000000))

(defn do-count [] 
  (swap! num change-count))

(defn read-count [] @num)

(defn set-count [n] (reset! num n))



