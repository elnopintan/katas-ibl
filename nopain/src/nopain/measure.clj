(ns nopain.measure)

;; Time measuring macros

(defmacro measure-time [expr]
  `(let [start# (System/nanoTime)
         ret#   ~expr]
     (/ (double (- (System/nanoTime) start#)) 1000000.0)))

(defmacro avg-time [expr]
  `(/
     (->> [(measure-time ~expr)
           (measure-time ~expr)
           (measure-time ~expr)
           (measure-time ~expr)
           (measure-time ~expr)
           (measure-time ~expr)
           (measure-time ~expr)
           (measure-time ~expr)
           (measure-time ~expr)
           (measure-time ~expr)
           (measure-time ~expr)]
       sort
       (drop 2)
       (take 7)
       (reduce +))
     7))
