(ns nopain.slides.data
  (:require nopain.slides.atom-example)
  (:require nopain.game))


(def intro
  {:name "intro"
   :text [
    [:title "Concurrencia sin dolor"]
    [:static-image "/clojure-icon.gif"]
    [:authors [{:name "Ignacio Blasco López"
                :pdihub "ibl"
                :github "elnopintan"}
               {:name "Sebastián Ortega Torres"
                :pdihub "sortega"
                :github "sortega"}]]]})

(def counter
  {:name "counter"
   :run "counter"
   :text [[:title [:div#counter 0]]]})

(def game
  {:name "game"
   :run "game"
   :text [[:title "Juego"]
          [:page
           [:div
               [:div#register
               [:input#registerinput "" ]
                [:button#registerbutton "Regístrate" ]]
            [:ul#news]
            [:div#players]]
               ]]})

(def game-result
  {:name "game-result"
   :text [[:title "Resultado del juego"]]})

(def resolve-counter
  {:name "resolve counter"
   :text [[:title "Resolviendo el problema del contador"]]
   })


(def identity-value
  {:name "identity-value"
   :text [[:title "Imperativo vs Funcional"]
          [:image "/Variable1.jpg"]
          [:i "Modelo Imperativo"]
          [:ii "Modificar variables"]
          [:anim "/Variable2.jpg"]
          [:anim "/Variable3.jpg"]
          [:anim "/Variable4.jpg"]
          [:java-snippet "void changeCount() {\n    num = (num+num)%1000000;\n}"]
          [:java-snippet "c.changeCount();\nc.changeCount();\nc.changeCount();"]
          [:i "Dependencia temporal"]
          [:i "Empeora con concurrencia"]

          ]}
  )

(def identity-value-2
  {:name "identity-value 2"
   :text [[:title "Imperativo vs Funcional"]
          [:image "/Valor1.jpg"]
          [:i "Modelo Funcional"]
          [:ii "Combinar funciones"]
          [:ii "Generar un valor a partir del siguiente"]
          [:anim "/Valor2.jpg"]
          [:anim "/Valor3.jpg"]
          [:anim "/Valor4.jpg"]
          [:java-snippet "Counter changeCount() {\n    return new Counter((num+num)%1000000);\n}"]
          [:java-snippet "c.changeCount().\n  changeCount().\n  changeCount();"]
          [:i "Transparencia referencial"]
          [:i "Comparticion sin peligro"]
          [:i "Genera mas basura"]
          [:i "Necesita estructuras especificas"]
          [:anim "/clojure-trees.png"]
          ]}
  )

(def q-es-clojure
  {:name "Que es Clojure?"
   :text[[:title "¿Que es clojure?"]
         [:static-image "/clojure-icon.gif"]
         [:i "Dialecto de Lisp"]
         [:i "Funciona en:"]
         [:ii "JVM"]
         [:ii "Javascript"]
         [:i "Enfasis en:"]
         [:ii "programación funcional (inmutabilidad, funciones)"]
         [:ii "concurrencia"]]})


(def curso-relampago
  {:name "Aprenda clojure (1)"
   :text [[:title "Aprenda clojure en poco tiempo"]
          [:i "Sintaxis"]
          [:ii "([funcion o macro] arg1...argn)"]
          [:i "Funcion"]
          [:ii "Recibe n argumentos"]
          [:ii "Genera un resultado"]
          [:ii "se compone de otras funciones"]
          [:i "Macro"]
          [:ii "Recibe n argumentos"]
          [:ii "Genera código a partir de los argumentos"]]})

(def curso-relampago-2
  {:name "Aprenda clojure (2)"
   :text [[:title "Aprenda clojure en poco tiempo"]
          [:i "Datos y argumentos"]
          [:ii "Numeros => 1 2 3"]
          [:ii "Claves => :a :b :c"]
          [:ii "Símbolos => a b c"]
          [:ii "Cadenas => \"abc\""]
          [:ii "Vectores => [1 2 3]"]
          [:ii "Conjuntos => #{ 1 2 3}"]
          [:ii "Listas => ( 1 2 3)"]
          [:ii "Mapas => { :saludo \"Hola\", \"despedida\" :mundo}"]
          [:title "FIN"]]})

(def atomo
  {:name "Atom"
   :text [[:title "Atom"]
          [:image "/Atom1.jpg"]
          [:code "nopain.slides.atom-example/num"]
          [:code "nopain.slides.atom-example/change-count"]
          [:code "nopain.slides.atom-example/do-count"]
          [:anim "/Atom2.jpg"]
          [:code "nopain.slides.atom-example/read-count"]
          ]})

(def atomo-2
  {:name "Atom-2"
   :text [[:title "Atom"]
          [:image "/AtomC1.jpg"]
          [:i "Compare and Set..."]
          [:anim "/AtomC2.jpg"]
          [:i "...and Retry"]
          [:anim "/AtomC3.jpg"]
           ]})


(def referencia
  {:name "Ref"
   :text [[:title "STM"]
          [:image "/Ref1.jpg"]
          [:i "Software Transactional Memory"]
          [:code-snippet "(def mi-ref (ref 1))"]
          [:i "Transacción"]
          [:code-snippet "(dosync ...)"]
          [:code-snippet "(alter mi-ref inc)"]
          [:anim "/Ref2.jpg"]
          [:i "Multiversion Concurrency Control (MVCC)"]
          [:anim "/Ref3.jpg"]
          [:i "... and Retry"]
          [:i "Prohibidos efectos secundarios!!"]]})

(defn ejemplo-juego [] 
  {:name "Ref-2"
   :text [[:title "Implementacion del juego"]
          [:i "Ejemplo en el juego"]
		  [:code "nopain.game/players"]
		  [:code "nopain.game/news"]
          [:code "nopain.game/new-player"]
          [:code "nopain.game/add-player"]
          [:code-snippet (str "players \n" (into {} (take 2 @nopain.game/players)) "") ]
          [:code "nopain.game/steal-coins"]
          [:code "nopain.game/notify"]
          [:code "nopain.game/read-news"]]})


(def agente
  {:name "Agente"
   :text [[:title "Agent"]
          [:image "/Agent1.jpg"]
          [:i "Comportamiento asíncrono"]
          [:i "Ejecucion secuencial"]
          [:code-snippet "(def james (agent \"bond\"))"]
          [:code-snippet "(send james str \" 007\")"]
          [:anim "/Agent2.jpg"]
          [:i "Ejecucion de entrada/salida"]
          [:code-snippet "(send-off james #(write file %) \"Bang Bang\")"]
          [:i "Colabora con atoms y refs"]
          [:ii "Solo envia tras el commit"]
          ]})

(def agradecimiento
  {:name "Gracias"
   :text [[:title "Muchas Gracias"]]})

(def thank "Gracias ")

(def slides [intro 
             counter 
             resolve-counter
             identity-value
             identity-value-2
             atomo
             atomo-2
             game
             game-result
             referencia
             (ejemplo-juego)
             agente
             agradecimiento])
