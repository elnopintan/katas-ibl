(ns nopain.sim
  (:require [clojure.core.reducers :as r]))

;; Utils

(defn square [x] (* x x))

(defn dist [[x1 y1] [x2 y2]]
  (Math/sqrt (+ (square (- x1 x2))
                (square (- y1 y2)))))

(defn scale-v [k [x y]]
  [(* k x) (* k y)])

(defn add-v 
  ([] [0 0])
  ([[x1 y1] [x2 y2]]
   [(+ x1 x2) (+ y1 y2)]))

(defn sub-v [[x1 y1] [x2 y2]]
  [(- x1 x2) (- y1 y2)])

(defn unit-v
  "Normalize to the unitary vector"
  [v]
  (if (every? zero? v)
    v
    (let [magnitude (dist [0 0] v)]
      (scale-v (/ 1 magnitude) v))))

(defn dir-between
  "Unitary vector with the direction between two positions"
  [from to]
  (unit-v (sub-v to from)))

;; Random objects

(defn rand-within [lower upper]
  (+ lower
     (rand (- upper lower))))

(def default-star-params
  {:margins    [-100.0 -100.0 100.0 100.0]
   :mass-range [1 1000]
   :vel-range  [0 10]})

(defn rand-star
  ([] (rand-star default-star-params))
  ([{[x1 y1 x2 y2]       :margins
     [min-mass max-mass] :mass-range
     [min-vel max-vel]   :vel-range}]
   (let [theta (rand (* 2 Math/PI))]
     {:mass (rand-within min-mass max-mass)
      :vel  (scale-v (rand-within min-vel max-vel)
                     [(Math/cos theta) (Math/sin theta)])
      :pos  [(rand-within x1 x2)
             (rand-within y1 y2)]})))

(defn rand-galaxy
  ([n] (mapv (fn [_] (rand-star)) (range n)))
  ([n star-params]
   (mapv rand-star (repeat n star-params))))

;; Update functions

(def ^:constant g 0.001)
(defn g-force [{pos1 :pos, m1 :mass}
               {pos2 :pos, m2 :mass}]
  (dir-between pos2 pos1))

(defn update-star [delta galaxy star]
  (let [forces       (map #(scale-v delta (g-force star %))
                          galaxy)
        vel          (reduce add-v (:vel star) forces)
        displacement (scale-v delta vel)]
    (-> star
      (assoc :vel vel)
      (update-in [:pos] #(add-v displacement %)))))

(defn update-galaxy [delta galaxy]
  (vec
    (map
      (partial update-star delta galaxy)
      galaxy)))

(defn update-galaxy-2 [delta galaxy]
  (vec
    (pmap 
      (partial update-star delta galaxy) 
      galaxy)))

(defn update-star-r [delta galaxy star]
  (let [forces       (r/map #(g-force star %) galaxy)
        accel        (r/fold add-v forces)
        vel          (add-v (:vel star)
                            (scale-v delta accel))
        displacement (scale-v delta vel)]
    (-> star
      (assoc :vel vel)
      (update-in [:pos] #(add-v displacement %)))))

(defn update-galaxy-r [delta galaxy]
  (let [updatef (partial update-star-r delta galaxy)]
    (->> galaxy
      (r/map updatef)
      (r/fold (r/monoid concat vector) conj))))

(defn simulate [updatef delta steps galaxy]
  (->> galaxy
    (iterate (partial updatef delta))
    (drop steps)
    first))
