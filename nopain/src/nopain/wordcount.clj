(ns nopain.wordcount
  (:require [clojure.java.io :as io])
  (:require [clojure.core.reducers :as r])
  (:import [java.util HashMap])
  (:import [java.io File FileInputStream])
  (:use [nopain.measure]))

;; Sample data

(defn resource-lines [filename]
  (with-open [f (-> filename io/resource io/reader)]
    (vec
      (line-seq f))))
(def quijote (resource-lines "quijote.txt"))

(defn ^:static to-lower [^String s] (.toLowerCase s))
(defn ^:static combine-sum
  ([] {})
  ([m1 m2] (merge-with + m1 m2)))
(defn ^:static inc-count [counts word]
  (assoc counts word
         (inc (get counts word 0))))

;; N-grams

(defn n-gram [n lines]
  (let [words         (->> lines
                        (mapcat (partial re-seq #"[a-zA-ZáéíóúÁÉÍÓÚ]+|\."))
                        (map to-lower))
        aligned-words (map #(drop % words) (range n))
        n-grams       (apply map vector aligned-words)]
    (frequencies n-grams)))

(defn r-frequencies
  ([coll] (r-frequencies 8192 coll))
  ([block coll] (r/fold block combine-sum inc-count coll)))

(defn n-gram-r [n lines]
  (let [words         (->> lines
                        (r/mapcat (partial re-seq #"[a-zA-ZáéíóúÁÉÍÓÚ]+|\."))
                        (r/map to-lower)
                        (into []))
        aligned-words (map #(drop % words) (range n))
        n-grams       (apply map vector aligned-words)]
    (r-frequencies n-grams)))

;; Word count example

(defn wordcount [lines]
  (->> lines
    (mapcat (partial re-seq #"\w+"))
    (map to-lower)
    (reduce inc-count {})))

(defn wordcount-pmap [lines]
  (->> lines
    (pmap (partial re-seq #"\w+"))
    (apply concat)
    (pmap to-lower)
    (reduce inc-count {})))

(defn wordcount-buckets [lines]
  (->> lines
    (partition 512)
    (pmap wordcount)
    (reduce combine-sum)))

(defn wordcount-reduce [lines]
  (->> lines
    (r/mapcat (partial re-seq #"\w+"))
    (r/map to-lower)
    (r/fold 8192 combine-sum inc-count)))

(defn wordcount-loop [lines]
  (loop [accum (transient {})
         words  (for [line     lines
                      raw-word (re-seq #"\w+" line)]
                  (to-lower raw-word))]
    (if-let [word (first words)]
      (recur (assoc! accum word
                     (inc (get accum word 0)))
             (next words))
      (persistent! accum))))

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

;; Find image duplicate

(defn image? [^File file]
  (when-let [match (re-matches #".*\.(.*)" (.getName file))]
    (contains? #{"png" "jpeg" "jpg"}
               (to-lower (second match)))))

(defn md5sum
  "Returns the md5 hash of the contents of file (where file is a File,
  a FileDescriptor or a String with the file's path"
  [file]
  (let [input (io/input-stream file)
        digest (java.security.MessageDigest/getInstance "MD5")
        stream (java.security.DigestInputStream. input digest)
        bufsize (* 1024 1024)
        buf (byte-array bufsize)]
    (while (not= -1 (.read stream buf 0 bufsize)))
    (apply str (map (partial format "%02x") (.digest digest)))))

(defn image-duplicates []
  (->> "/Users/sebastian/"
    io/file
    file-seq
    (filter image?)
    (group-by md5sum)
    vals
    (filter #(> (count %) 1))))

;; Misc

(def implementations
  [["Loop"                     wordcount-loop]
   ["Streams"                  wordcount]
   ["Streams plenty of pmap's" wordcount-pmap]
   ["Streams bucketed"         wordcount-buckets]
   ["Reducers"                 wordcount-reduce]])

(defn benchmark [implementations]
  (for [[name f] implementations]
    {:name name
     :time (avg-time (f quijote))}))

(def benchmark-results
  [{:name "Loop", :time 565.7341428571428}
   {:name "Streams", :time 659.1562857142857}
   {:name "Streams plenty of pmap's", :time 3154.3725714285715} 
   {:name "Streams bucketed", :time 333.79171428571436} 
   {:name "Reducers", :time 287.00899999999996}])

(defn percent-of [base value]
  (format "%+5.2f%%" (* (- (/ value base) 1) 100)))

(defn compared-times [results]
  (let [baseline (:time (first results))]
    {:name "Compared times"
     :text [[:title "Compared times"]
            [:page
             [:ul#times
              (for [{:keys [name time]} results]
                [:li (format "%s: %7.0f ms (%s) <br/> %s" 
                             name time (percent-of baseline time)
                             (apply str (repeat (/ time 20)
                                                "<span class=\"bar\"/>")))
                 ])]]]
     }))
