(ns node-examples.core 
  (:require [cljs.nodejs :as node])
  (:require-macros [node-examples.macros :as m :only (routes-for)]))


;Estado atomico y compartido
(def cont (atom 0))
(def express (node/require "express"))
(def http (node/require "http"))
(def app (. express (createServer)))

; El request de express usa el prototipo http.IncomingMessage
; lo guardo en Request
(def Request (.-IncomingMessage http))

; Aqui implemento el protocolo ILookup que me permite
; usar destructuring con los parametros de Request de Express.
(extend-type Request
    ILookup
    (-lookup [ r k]
      (.param r (name k))))

(defn -main [& args]
  (.use app (. express (logger)))
  
  ;Esta macro expande las rutas queda mas conciso. Incluso ocupa 20 lineas de codigo javascript menos
  (m/routes-for app
            "/hello" [] "Hello World"
            "/bye"   [] "Bye World"
            "/other/:a/:b" [a b] (str "The req is " a "," b ". Visited " (swap! cont inc)))
  
  (.listen app 3000)  
  (println (str "Express server started on port: "
                (.-port (. app (address))))))

(set! *main-cli-fn* -main)
