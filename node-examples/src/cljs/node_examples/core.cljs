(ns node-examples.core 
  (:require [cljs.nodejs :as node]))

; Aqui implemento el protocolo ILookup que me permitie
; usar destructuring con los parametros de Request de Express.
;Si el Request no hubiera sido Object a pelo lo habria hecho con extend-type
(deftype ExpressReq [r] 
    ILookup
    (-lookup [ _ k]
      (.param r (name k))))
;Estado atomico y compartido
(def cont (atom 0))
(def express (node/require "express"))
(def app (. express (createServer)))

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
                   (.send res (f (ExpressReq. req)))))))
  (.listen app 3000)
  
  (println (str "Express server started on port: "
                (.-port (. app (address))))))

(set! *main-cli-fn* -main)

;Y eso que no he usado macros...