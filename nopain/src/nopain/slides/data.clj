(ns nopain.slides.data)

(def intro
  {:name "intro"
   :text [
    [:title "Concurrencia sin dolor"]
    [:image "/clojure-icon.gif"]
    [:authors ["Ignacio  Blasco López" "Sebastian Ortega Torres"]]]})


(def counter
  {:name "counter"
   :run "counter"
   :text [[:title [:div#counter 0]]]})

(def resolve-counter
  {:name "resolve counter"
   :text [[:title "Resolviendo el problema del contador"]]
   })


(def identiy-value
  {:name "identity-value"
   :text [[:title "Identidad y Valor"]
          [:i "Valor"]
          [:ii "No cambia"]
          [:ii "Una funcion crea un nuevo valor"]
          [:ii "(insert [a, b] 1 c) => [a, c]"]
          [:ii "[a, c] es un nuevo vector"]
          [:i "Identidad"]
          [:ii "Es un puntero que apunta a un valor"]
          [:ii "Puede apuntar a otro valor a lo largo del tiempo"]
          [:ii "Al leerlo devuelve su valor de ese instante"]
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
  {:name "El atomo"
   :text [[:title "El atomo"]
          [:i "Se construye"]
          [:code "nopain.slides.atom-example/num"]
          [:i "Se lee"]
          [:code "nopain.slides.atom-example/read-count"]
          [:i "Se puede resetear"]
          [:code "nopain.slides.atom-example/reset!"]
          [:i "Se puede modificar"]
          [:code "nopain.slides.atom-example/change-count"]
          [:code "nopain.slides.atom-example/do-count"]
          ]})