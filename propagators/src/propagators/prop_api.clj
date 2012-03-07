(ns propagators.prop-api
  (use propagators.cells)
  (require [clojure.set :as sets] ))

(defonce props (atom {}))

(declare new-data run-propagator)

(defrecord propagator [prop-agent tags-in f cell-out-tags])

(defn create-propagator [tags-in f cell-out]
  (let [new-prop (propagator. (agent nil) tags-in f cell-out)]
    (when (empty? (get-cell cell-out)) (apply make-cell cell-out)) 
    (doseq [tag (apply concat tags-in)]
              (swap! props
                     (fn [props]
                       (assoc props tag (cons new-prop (props tag))))))
    (run-propagator nil new-prop)))

(defn run-propagator [ _ {:keys [tags-in f cell-out-tags]}]
  (let [cells (apply get-cell-values tags-in)
        values (map #(:value %) cells)
        {value-out :value :as cell-out} (first (get-cell cell-out-tags))
        value-out (if (= value-out "nothing") nil value-out)]
    (if (not-any?  #(= "nothing" %) values)
      (let [new-value (apply f value-out values)]   
        (if (not= new-value value-out)
          (new-data cell-out new-value)
          )))))
      

(defn notify-propagators [tags]
  (let [prop-map @props
        current-props (set (filter identity  (mapcat #(prop-map %) tags)))]
    (doseq [ {prop-agent :prop-agent cur-tags :tags-in :as current-prop} current-props :when (every? (set tags) (apply concat cur-tags)) ]
      (send prop-agent run-propagator current-prop))))

(defn new-data [cell value]
  (modify-cell cell value)
  (notify-propagators (:tags cell)))

(defn only-input [f] (fn [ _ & cells] (apply f cells)))

(defn reset-props []
  (reset! props {}))
