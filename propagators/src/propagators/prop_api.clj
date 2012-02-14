(ns propagators.prop-api
  (use propagators.cells))
(def props (atom {}))
(declare new-data)
(defrecord propagator [tags-in f cell-out])
(defn create-propagator [tags-in f cell-out]
  (let [new-prop (propagator. tags-in f cell-out)]
    (doseq [tag (concat tags-in)]
              (swap! props
                     (fn [props]
                       (assoc props tag (cons new-prop (props tag))))))))

(defn run-propagator [ _ {:keys [tags-in f cell-out]}]
  (println "propaging " tags-in)
  (let [cells (get-cell tags-in)
        {value-out :value :as cell-out} (first (get-cell cell-out))]
   
    (if (not-any?  #(= "nothing" (:value %)) cells)
      (let [new-value (apply f cells)]       
        (println "new-value" new-value)
        (if (not= new-value value-out)
          (new-data cell-out new-value)
          )))))
      
  
(defn notify-propagators [tags]
  (doseq [tag tags current-prop (@props tag)]
    (send (agent nil) run-propagator current-prop)))

(defn new-data [cell value]
  (modify-cell cell value)
  (notify-propagators (:tags cell)))

(defn on-values [f] (fn [& cells] (apply f (map #(:value %) cells))))