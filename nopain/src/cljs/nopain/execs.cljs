(ns nopain.execs)

(def exec (atom {}))

(defn add-f [n f s] (swap! exec assoc n [f s]))

(defn run [n] (let [[f _] (n @exec)] (f)))
(defn stop [n] (let [[_ s] (n @exec)] (s)))

