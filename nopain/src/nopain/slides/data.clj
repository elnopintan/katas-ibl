(ns nopain.slides.data
  (:require nopain.slides.atom-example)
  (:require nopain.game))

(def intro
  {:name "intro"
   :text [
    [:title "Concurrencia sin dolor"]
    [:static-image "/clojure-icon.gif"]
    [:authors ["Ignacio  Blasco López" "Sebastián Ortega Torres"]]]})

(def anim
  {:name "anim"
   :text [
          [:image "/Valor1.jpg"]
          [:anim "/Valor2.jpg"]
          [:anim "/Valor3.jpg"]
          ]})


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
          [:i "Modelo Imperativo"]
          [:ii "Modificar variables"]
          [:image "/Variable1.jpg"]
          [:anim "/Variable2.jpg"]
          [:anim "/Variable3.jpg"]
          [:anim "/Variable4.jpg"]
          [:i "Identidad y valor mezcladas"]
          ]}
  )

(def identity-value-2
  {:name "identity-value 2"
   :text [[:title "Imperativo vs Funcional"]
          [:i "Modelo Funcional"]
          [:ii "Combinar funciones"]
          [:ii "Generar un valor a partir del siguiente"]
          [:image "/Valor1.jpg"]
          [:anim "/Valor2.jpg"]
          [:anim "/Valor3.jpg"]
          [:anim "/Valor4.jpg"]
          [:i "No es suficiente"]
          ]}
  )

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
          [:anim "/AtomC2.jpg"]
          [:anim "/AtomC3.jpg"]
           ]})


(def referencia 
  {:name "Ref"
   :text [[:title "Ref"]
          [:image "/Ref1.jpg"]
          [:code "nopain.game/new-player"]
          [:code-snippet "(dosync ...)"]
          [:code-snippet "(alter mi-ref + 1)"]
          [:anim "/Ref2.jpg"]
          [:anim "/Ref3.jpg"]]})

(defn referencia-2 [] 
  {:name "Ref-2"
   :text [[:title "Ref"]
          [:i "Ejemplo en el juego"]
          [:code "nopain.game/steal-coins"]
          [:code-snippet (str "players \n" (into {} (take 2 @nopain.game/players)) "") ]]})


(str @nopain.game/players)
(def agente
  {:name "Agente"
   :text [[:title "Agent"]
          [:image "/Agent1.jpg"]
          [:code "nopain.game/news"]
          [:code "nopain.game/notify"]
          [:anim "/Agent2.jpg"]
          [:code-snippet "(send-off my-agent #(write file %) \"Hola mundo\")"]
          ]})

(def agradecimiento
  {:name "Gracias"
   :text [[:title "Muchas Gracias"]]})