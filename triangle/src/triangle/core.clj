(ns triangle.core)
;TODO: TEST CODE NOTES
(defn love [v]
  (let [
        r (let [i (count (take-while #(< % (apply max v)) (iterate #(* 2 %) 1)))
                b (fn [n] (vec (take i (map #(bit-and % 1) (iterate #(bit-shift-right % 1) n)))))]
            (vec (map b v)))
        n (count (first r))
        m (count r)
        get-rock (fn [r i j] (-> r (get j) (get i)))
        mineral? (fn [n] (= n 1))
        minerales (fn [r i j n seq [h v]]
                     (let [ mins (take-while mineral? (take n (map #(get-rock r (+ i (* h %)) (+ j (* v %))) seq)))]
                       (if (= (count mins) n) mins [])))
        sim (lazy-cat [0] (interleave (iterate inc 1) (iterate dec -1 )))
        r-seq (iterate inc 0)
        l-seq (iterate dec 0)
        sim-n (fn [n] (+ n (dec n)))
        r-l-n (fn [n] n)
        down [0 1]
        up [0 -1]
        left [-1 0]
        right [1 0]
        h [1 0]
        v [0 1]
        triangles (fn [r i j]
                    (mapcat
                     (fn [[x y] dir] 
                       (map
                        (fn [f seq]
                          (apply concat
                              (take-while not-empty
                                          (map #(minerales r
                                                           (+ i (* x %))
                                                           (+ j (* y %))
                                                           (f (inc %))
                                                           seq
                                                           dir)
                                               (range)))))
                     [sim-n r-l-n r-l-n ] [sim r-seq l-seq])) [up down left right ] [h h v v ]))
        digged (apply max (map count (apply concat (for [ i (range n) j (range m)] (triangles r i j)))))]
    (if (= digged 1) nil digged)))






