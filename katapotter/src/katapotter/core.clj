(ns katapotter.core)

(def unit 8)
(def prices
  { 0 0
    1 unit
    2 (* unit 2 0.95)
    3 (* unit 3 0.9)
    4 (* unit 4 0.8)
    5 (* unit 5 0.75)})


(defn bag-price [bags]
  (apply + (map #(prices (count %)) bags)))

(defn on-cheaper-dif-bag [bags book]
  (let [{same-bags true dif-bags false} (group-by #(not (nil? (% book))) bags)
        delta (fn [bag] (+ (bag-price dif-bags) (- (prices (count bag))) (prices (inc (count bag)))))  
        dif-bags (sort-by delta dif-bags)]
    (concat (conj (rest dif-bags) (conj (set (first dif-bags)) book)) same-bags)))





(defn price [books]
  (let [books (sort-by #((frequencies books) %) > books)]
    (bag-price
     (loop [bags [] cur-books books]
           (if (empty? cur-books)
             bags
             (let [[next-book & rest-books] cur-books]
               (recur (on-cheaper-dif-bag bags next-book) rest-books)))))))



