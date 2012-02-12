(ns propagators.core)

(def nothing 'nothing)
(defn something? [{a :value }] (not= nothing @a))
(defn nothing? [{a :value}] (= nothing @a))
(defrecord cell [value])
(defn make-cell [] (cell. (atom nothing)))
(defn set-value [cell data] (reset! (:value cell) data))


(defn do-sum [{:keys [a b c]} operand value]
  (cond
   (and (= operand :a) (something? b) (nothing? c)) (set-value c (+ value @(:value b))) 
   (and (= operand :b) (something? a) (nothing? c)) (set-value c (+ @(:value a) value))
   (and (= operand :c) (something? b) (nothing? a)) (set-value a (- value @(:value b)))
   (and (= operand :c) (something? a) (nothing? b)) (set-value b (- value @(:value a)))   
   ))

(defn set-cell [prop field cell]
  (add-watch (:value cell) field
             (fn [key ref old new] (send (agent nil) (fn [a] (do-sum prop key new))))))

(defrecord Psum [a b c])
(defn new-p-sum [a b c]
  (let [result (Psum. a b c)]
    (do
      (set-cell result :a a)
      (set-cell result :b b)
      (set-cell result :c c))
  result))