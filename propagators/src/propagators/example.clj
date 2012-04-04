(ns propagators.example
  (use propagators.prop-api)
  (use propagators.cells)
  (use dorothy.core)
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
	    (let [ people (if (= "nothing" people) #{} (set people))]
		 (if (= in-out "IN")
		     (conj people person-name)
		     (disj people person-name))))

(defn all-temps [n] (doseq [c (get-cell ["t-sensor"])] (new-data c n)))
(defn a-temp [s n] (new-data (first (get-cell [(str "s" s)])) n)) 
(defn in-building [p b] (new-data (first (get-cell ["door" b])) (Person. p "IN")))
(defn out-building [p b] (new-data (first (get-cell ["door" b])) (Person. p "OUT")))


(defn create-example [sn pn bn]
  (destroy-all-cells)
  (reset-props)
  (letfn [
          (sensor [s p b] (str "s" s p b))
          (plant [p b] (str "p" p b))
          (building [b] (str "b" b))
          (into-summary [ & summaries]
            { :temperature (apply avg (map #(:temperature % 0) summaries))
              :people (apply + (map #(:people % 0) summaries))})]
    (doseq [s (range sn) p (range pn) b (range bn)]
      (make-cell "t-sensor" (sensor s p b) (plant p b) (building b))) ;sensor cells
    (doseq [p (range pn) b (range bn)]
      (println " creating prop for plant " (plant p b) (building b)) 
            (create-propagator "avg" [["t-sensor" (plant p b) (building b)]] (only-input avg) ["t-plant" (plant p b) (building b)])) ;plant propagators
    (doseq [b (range bn)]
      (println " creating prop for building " (building b))
      (create-propagator "avg" [["t-plant" (building b)]] (only-input avg) ["t-building" (building b)])
      (make-cell "door" (building b))
      (create-propagator "list" [["door"(building b)]] get-people ["people" (building b)])
      (create-propagator "set-tempereture" [["t-building" (building b)]] #(assoc %1 :temperature %2) ["summary" (building b)])
      (create-propagator "set-count" [["people" (building b)]] #(assoc %1 :people (count %2)) ["summary" (building b)]))
    (create-propagator "merge" [["summary"]] (only-input into-summary ) ["city"])))

 (defn show-network []
   (let  [prop-set (set (for [[_ p-l] @props p p-l ] p))
          numbered-props (map #(vector (str "p" %1) %2) (range) prop-set)
          cell-graph (for [[n p] numbered-props
                           prop-cell  (apply get-cell (:tags-in p))]
                       [(str (:tags prop-cell))  n])
          cell-nodes (for [{:keys [tags value]} (get-all-cells)]
                       [(str tags) {:label (str tags "=" value)}])
          prop-nodes (for [[n {:keys [id]}] numbered-props] [n {:label id :shape :diamond, :style :filled }])
          prop-graph (for [[n p] numbered-props]  [n  (str (:cell-out-tags p))])
          graph-data (vec (concat  cell-nodes prop-nodes prop-graph cell-graph))]
   ;graph-data))
    (show! (dot (graph graph-data)))))

    
   
