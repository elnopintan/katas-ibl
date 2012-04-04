(ns node-examples.core 
  (:require [cljs.nodejs :as node]))


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

;Puedo acumular los handlers todos en un mapa, lo que hace que sea menos verboso
(def resps {
             "/hello" (fn [_] "Hello World")
             "/bye"   (fn [_]"Bye World")
             ;Aqui uso el destructuring. Con poco esfuerzo acabo de mejorar Express ;-)
             "/other/:a/:b" (fn [{ a :a b :b }] (str "The req is " a "," b ". Visited " @cont))})

(defn -main [& args]
  (.use app (. express (logger)))
  ;Con doseq puedo iterar por todo el mapa de respuestas
  (doseq [[path f] resps]
    (doto app
      (.get path (fn [req res]
                   ;Incremento con cada llamada el contador de forma atomica
                   (swap! cont inc)
                   (.send res (f req))))))
  (.listen app 3000)
  
  (println (str "Express server started on port: "
                (.-port (. app (address))))))

(set! *main-cli-fn* -main)

;Y eso que no he usado macros...