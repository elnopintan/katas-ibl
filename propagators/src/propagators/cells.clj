(ns propagators.cells
  "The cells in a propagator network are filled with values.
These cells are connected to propagators, that modify its values.
When a propagatos modifies a cell data, the cell must notify to the other propagators"
  (use somnium.congomongo))

(def conn
  "database connection"
  (make-connection "prop-network"))
(defn make-cell [ & tags]
  "creates a new cell with nothing as data"
  (let [ cell { :tags tags :value :nothing } ]
    (with-mongo conn
      (insert! :cells cell))))

(defn get-cell [ & tags]
  "search for a cell with those tags"
  (let [tag-filters (vec (map (fn [filter]
                           {:tags { :$all
                                   filter}}) tags))]
    (with-mongo conn
      (fetch :cells :where {:$or tag-filters}))))

(defn modify-cell [cell value]
  "modifies a cell and notifies to propagators"
  (do
    (with-mongo conn
      (update! :cells cell (assoc cell :value value)))))

