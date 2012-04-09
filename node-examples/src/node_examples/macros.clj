(ns node-examples.macros)

(defn gen-route [[path bindings body]]
  `(.get ~path (fn [{:keys ~bindings} resp#]
           (let [data# ~body]
             (.send resp# data#)))))

(defmacro routes-for [ app & routes]
  (let [routes (map gen-route (partition 3 routes))]
     `(doto ~app ~@routes)))