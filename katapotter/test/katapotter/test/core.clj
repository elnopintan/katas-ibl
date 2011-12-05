(ns katapotter.test.core
  (:use [katapotter.core])
  (:use [clojure.test]))

(deftest testBasics
  (is (= 0 (price [])))
  (is (= 8 (price [1])))
  (is (= 8 (price [2])))
  (is (= 8 (price [2])))
  (is (= 8 (price [3])))
  (is (= 8 (price [4])))
  (is (= (* 8 2) (price [0 0])))
  (is (= (* 8 3) (price [1 1 1]))))

(deftest testSimpleDiscounts
 (is (= (* 8 2 0.95) (price [0 2]))) 
 (is (= (* 8 3 0.9) (price [0 2 4])))
 (is (= (* 8 4 0.8) (price [0 1 2 4])))
 (is (= (* 8 5 0.75) (price [0 1 2 3 4]))))

(deftest testSeveralDiscounts
  (is (= (+ 8 (* 8 2 0.95)) (price [0 0 1])))
  (is (= (* 2 8 2 0.95) (price [0 0 1 1])))
  (is (= (+ (* 8 4 0.8) (* 8 2 0.95)) (price [ 0 0 1 2 2 3])))
  (is (= (+ 8 (* 8 5 0.75) (price [ 0 1 1 2 3 4])))))

(deftest testEdgeCases
  (is (= (* 2 8 4 0.8) (price [ 0 0 1 1 2 2 3 4])))
  (is (= (+ (* 3 8 5 0.75) (* 2 8 4 0.8))
         (price [0 0 0 0 0
                 1 1 1 1 1
                 2 2 2 2
                 3 3 3 3 3  
                 4 4 4 4]))))
  