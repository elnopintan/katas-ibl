(ns googlejam.core
  (:require [clojure.java.io :as io]))


(defn next-numbers [numbers digit]
  (if (numbers digit)
    numbers
  	(assoc numbers digit
  		(cond
   			(empty? numbers) 1
     		(= 1 (count numbers)) 0
      	:else (count numbers)))))


(defn extract-numbers [digits]
  (reduce next-numbers {} digits))
       
(defn calc-days [digits ]
  (let [numbers (extract-numbers digits)
        base (count numbers)
        base (if (= base 1) 2 base)
        length (count digits)
        values (map numbers digits)
        coeficients (reverse (reductions * 1 (repeat (dec length) base)))]
    (reduce + 0 (map * values coeficients))))

       
 (defn read-days [in out]
  (with-open 
  [rdr (io/reader in)
   w (io/writer out)]
  	(doseq [[days case] (map (fn [a b] [(calc-days a) (inc b)]) 
           	(rest (line-seq rdr)) (range))]
     (.write w (str "Case #" case ": "  days "\n")))))