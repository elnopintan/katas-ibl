(ns nopain.slides.par
  (:require [clojure.java.io :as io])
  (:require [clojure.core.reducers :as r])
  (:import [java.util HashMap]))

(defmacro bootstrap []
  `(do
     (use '[nopain.slides :only ~'[next-slide new-slide insert-in-slides]])
     (use '[nopain.handler :as ~'h])
     (h/run-server)
    ))

;; Word count example

(defn resource-lines [filename]
  (with-open [f (-> filename io/resource io/reader)]
    (vec
      (line-seq f))))
(def quijote (resource-lines "quijote.txt"))

(defn to-lower [s]
  (.toLowerCase s))

(def ^:constant combine-sum (partial merge-with +))
(defn inc-count [counts word]
  (assoc counts word
         (inc (get counts word 0))))

(defn wordcount-stream [lines]
  (->> lines
    (mapcat (partial re-seq #"\w+"))
    (map to-lower)
    (reduce inc-count {})))

(defn wordcount-stream-2 [lines]
  (->> lines
    (partition 512)
    (pmap wordcount-stream)
    (reduce combine-sum)))

(defn wordcount-reduce [lines]
  (->> lines
    (r/mapcat (partial re-seq #"\w+"))
    (r/map to-lower)
    (r/fold combine-sum
            (r/monoid inc-count {}))))

(defn wordcount-reduce-2 [lines]
  (->> lines
    (r/mapcat (partial re-seq #"\w+"))
    (r/map to-lower)
    (r/fold 8192 combine-sum
            (r/monoid inc-count {}))))

(defn wordcount-loop [lines]
  (let [accum (HashMap.)]
    (doseq [line     lines
            raw-word (re-seq #"\w+" line)
            :let     [word (to-lower raw-word)]]
        (let [count (.get accum word)]
          (.put accum
                word
                (if count (inc count) 1))))
    accum))

;; Primes example

(defn divides? [divisor num]
  (zero? (rem num divisor)))
(defn prime? [n]
  (not-any?
    #(divides? % n)
    (range 2 n)))

(defn primes-1 [from to]
  (count
    (filter prime? (range from (inc to)))))
(defn primes-2 [from to]
  (r/fold +
          (r/map (fn [_] 1)
                 (r/filter prime? (range from (inc to))))))

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
           (measure-time ~expr)]
       sort
       (drop 1)
       (take 3)
       (reduce +))
     3))

;; Slides

(def moore
  {:name "The Moore's law"
   :text [[:title "The Moore's law"]
          [:image "/moore.png"]
          [:i (str "The number of transistors on a chip doubles "
                   "approximately every two years")]
          [:i "Need more performance? Wait two years."]
          [:i "Not anymore! We don't get faster processors, we get more of them"]
          [:anim "/cell.jpg"]
          [:i "But we have spent decades optimizing for one core (or few)"]
          [:anim "/x86.png"]
          [:i "We need to try different abstractions"]
          ]})

(def streams
  {:name "Streams"
   :text [[:title "Streams"]
          [:i "Streams (or lazy sequences) abstracts from looping"]
          [:image "/lazyseqs.png"]
          [:i "Usual suspects: map, filter, reduce, partition..."]
          [:code "nopain.slides.par/wordcount-stream"]
          [:anim "/stream-of-words.png"]
          [:i "But it is intrinsically sequential. Parallelization?"]
          [:code "nopain.slides.par/wordcount-stream-2"]
          [:ii "Pro: explicit data dependencies"]
          [:ii "Con: parallelization at the finest level doesn't work"]
          ]})

(def reducers
  {:name "Reducers"
   :text [[:title "Reducers"]
          [:i "The reduce-combine model unleashes parallelism"]
          [:image "/reduce-combine.png"]
          [:i "The stream abstraction can be minimally modified to be implemented with this model"]
          [:ii "Before"]
          [:code "nopain.slides.par/wordcount-stream"]
          [:ii "After"]
          [:code "nopain.slides.par/wordcount-reduce"]
          ;[:ii "And after some tuning"]
          ;[:code "nopain.slides.par/wordcount-reduce-2"]
          ]})

(defn compared-times []
  (let [times (for [impl [wordcount-loop
                          wordcount-stream
                          wordcount-stream-2
                          wordcount-reduce]]
                (measure-time (impl quijote)))]
    {:name "Compared times"
     :text [[:title "Compared times "]
            [:page [:div#chart]]
            [:i (str "Looping " (nth times 0))]
            [:i (str "Streams " (nth times 1))]
            [:i (str "Parallelized streams "
                     (nth times 2))]
            [:i (str "Reducers " (nth times 3))]
            ]}))

(def slides [moore streams reducers])
