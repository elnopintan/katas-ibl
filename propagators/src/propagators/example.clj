(ns propagators.example
  (use propagators.prop-api)
  (use propagators.cells)
  )

(def plantas  ["planta1" "planta2" "planta3"])

(comment (println "Creando sensores de temperatura")
(doseq  [s ["s1" "s2" "s3"] p plantas]
  (make-cell "sensor" s p "Oeste 1"))

(println "Creando sensor de puerta")
(make-cell "puerta" "Oeste 1") )

(defn destroy-example [building] (map #(destroy-cell %) (get-cell [building])))
(defn avg [& vals] (float (/ (apply + vals) (count vals))))

(defrecord Person [person-name in-out])
(defn get-people  [ people  {:keys [person-name in-out]}] 
	    (let [people (if (= "nothing" people) #{} (set people))]
		 (if (= in-out "IN")
		     (conj people person-name)
		     (disj people person-name))))

(defn create-temp-propagators [building]
  (doseq [ p plantas]
    (create-propagator [["sensor" p]] (only-input avg) ["temp-planta" p building]))
  (create-propagator [["temp-planta" building]] (only-input avg) ["temp-edificio" building]))

(defn create-people-propagator [building]
  (create-propagator [["puerta"]] get-people ["people" building]))

(defn create-building-popagators [building]
  (create-propagator [["people"]] #(assoc %1 :people (count %2)) [building "summary"])
  (create-propagator [["temp-edificio"]] #(assoc %1 :temperature %2) [building  "summary"]))

(defn all-temps [n] (doseq [c (get-cell ["sensor"])] (new-data c n)))
(defn in-building [p] (new-data (first (get-cell ["puerta"])) (Person. p "IN")))
(defn out-building [p] (new-data (first (get-cell ["puerta"])) (Person. p "OUT")))

(defn create-example [sn pn bn]
  (destroy-all-cells)
  (reset-props)
  (letfn [
          (sensor [s p b] (str "s" s p b))
          (plant [p] (str "p" p))
          (building [b] (str "b" b))]
    (doseq [s (range sn) p (range pn) b (range bn)]
;      (print "creating cell " (sensor s p b))
      (make-cell "sensor" (sensor s p b) (plant p) (building b)))
    (doseq [p (range pn) b (range bn)]
      (println " creating prop for plant " (plant p) (building b)) 
            (create-propagator [["sensor" (plant p) (building b)]] (only-input +) ["plant" (plant p) (building b)]))
    (doseq [b (range bn)]
      (println " creating prop for building " (building b))
      (create-propagator [["plant" (building b)]] (only-input +) ["building" (building b)]))
;    (println " creating prop for city")
    (create-propagator [["building"]] (only-input +) ["city"])))

 