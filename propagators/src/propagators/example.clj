(ns propagators.example
  (use propagators.prop-api)
  (use propagators.cells)
  )

(def plantas  ["planta1" "planta2" "planta3"])
(println "Creando sensores de temperatura")
(doseq  [s ["s1" "s2" "s3"] p plantas]
  (make-cell "sensor" s p "Oeste 1"))

(println "Creando sensor de puerta")
(make-cell "puerta" "Oeste 1")

(defn destroy-example [] (map #(destroy-cell %) (get-cell ["Oeste 1"])))
(defn avg [& vals] (float (/ (apply + vals) (count vals))))

(defrecord Person [person-name in-out])
(defn get-people  [ people  {:keys [person-name in-out]}] 
	    (let [people (if (= "nothing" people) #{} (set people))]
		 (if (= in-out "IN")
		     (conj people person-name)
		     (disj people person-name))))

(defn create-temp-propagators []
  (doseq [ p plantas]
    (create-propagator [["sensor" p]] (only-input avg) ["temp-planta" p "Oeste 1"]))
  (create-propagator [["temp-planta" "Oeste 1"]] (only-input avg) ["temp-edificio" "Oeste 1"]))

(defn create-people-propagator []
  (create-propagator [["puerta"]] get-people ["people" "Oeste 1"]))

(defn create-building-popagators []
  (create-propagator [["people"]] #(assoc %1 :people (count %2)) ["Oeste 1" "summary"])
  (create-propagator [["temp-edificio"]] #(assoc %1 :temperature %2) ["Oeste 1" "summary"]))

(defn all-temps [n] (map #(new-data % n) (get-cell ["sensor"])))
(defn in-building [p] (new-data (first (get-cell ["puerta"])) (Person. p "IN")))
(defn out-building [p] (new-data (first (get-cell ["puerta"])) (Person. p "OUT")))
