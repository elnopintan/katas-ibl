(ns mirrors.core
  (import java.lang.Math)
  )


(defn up [[x y]] [x (inc y)])
(defn down [[x y]] [x (dec y)])
(defn left [[x y]] [(inc x) y])
(defn right[[x y]] [(dec x) y])

(defn x-to-y [[bx by] p] (fn [n] [(+ bx n) (+ by (* p n))]))
(defn y-to-x [[bx by] p] (fn [n] [(+ bx (* p n)) (+ by n)]))

(defn boundaries [n fs]
  (map #((first %) n) fs))

(defn reflect [ f [h v] [rx ry] s]
  (fn [[x y]] (f [(mod (+ rx (* h (- x rx))) s) (mod (+ ry (* v (- y ry))) s)])))


(def lab (vec (concat (repeat 2 (vec (repeat 13 :w)))
                 [[:w :w :w :b :w :w :w :w :w :w :w :w :w]]
                 (repeat 2 (vec (repeat 13 :w))))))


  
    

