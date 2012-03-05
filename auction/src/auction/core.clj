(ns auction.core
  (use clojure.java.io))

(defrecord Item [price weight])
(defn data-gen [p a b m] (inc (mod (+ (* a p) b) m)))
(def memo-data-gen (memoize data-gen))
(defn item-gen [{:keys [price weight]} a b m c d k]
  (Item. (memo-data-gen price a b m) (memo-data-gen weight c d k)))

(defn gen-item-seq [p0 w0 m k a b c d]
  (iterate #(item-gen % a b m c d k) (Item. p0 w0)))


(defn best? [{pa :price  wa :weight} {pb :price wb :weight}]
  (or (and (< pa pb) (<= wa wb)) (and (< wa wb) (<= pa pb))))

(defn worst? [a b] (best? b a))

(defn into-bag [ f elements an-item]
  (let [still-in (reduce conj [] (filter #(or (f % an-item) (not (f an-item %))) elements))]
    (if (not-any? #(f % an-item) still-in)
      (conj still-in an-item)
      still-in)))
  
(defn into-terrible [terribles an-item]
  (into-bag worst? terribles an-item))
(defn into-bargain [bargains an-item]
  (into-bag best? bargains an-item))

(defn into-both [ [bargains terribles] an-item]
 [(into-terrible terribles an-item) (into-bargain bargains an-item)])


(defn run-line [line-str n]
  (let [ [ t & args] (read-string (str "(" line-str ")"))
         item-seq (take t (apply gen-item-seq args))
         [terr barg] (reduce into-both [[][]] item-seq)
         res-str (str "Case #" n": " (count terr) " " (count barg))
         ]
    (println "ended " res-str)
    (res-str)))
(defn execute []
  (with-open [rdr (reader "auction.txt")]
    (let [ n (read-string (.readLine rdr))
          lines (vec (take n (map #(vector (.readLine rdr) %) (rest (range)))))]
      (pmap #(apply run-line %) lines))))

