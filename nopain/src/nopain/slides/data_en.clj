(ns nopain.slides.data-en
  (:require nopain.slides.atom-example)
  (:require nopain.game))


(def intro
  {:name "intro"
   :text [
    [:title "Painless concurrency"]
    [:static-image "/clojure-icon.gif"]
    [:authors ["Ignacio  Blasco López" "Sebastián Ortega Torres"]]]})


(def counter
  {:name "counter"
   :run "counter"
   :text [[:title [:div#counter 0]]]})

(def game
  {:name "game"
   :run "game"
   :text [[:title "Game"]
          [:page 
           [:div
               [:div#register
               [:input#registerinput "" ]
                [:button#registerbutton "Register" ]]
            [:ul#news]
            [:div#players]]
               ]]})

(def game-result
  {:name "game-result"
   :text [[:title "Game result"]]})

(def resolve-counter
  {:name "resolve counter"
   :text [[:title "Solving counter problem"]]
   })


(def identity-value
  {:name "identity-value"
   :text [[:title "Imperative vs Functional"]
          [:image "/Variable1_en.jpg"]
          [:i "Imperative model"]
          [:ii "Variable change"]
          [:anim "/Variable2_en.jpg"]
          [:anim "/Variable3_en.jpg"]
          [:anim "/Variable4_en.jpg"]
          [:java-snippet "void changeCount() {\n    num = (num+num)%1000000;\n}"]
          [:java-snippet "c.changeCount();\nc.changeCount();\nc.changeCount();"]
          [:i "Time dependency"]
          [:i "Gets worse with concurrency"]

          ]}
  )

(def identity-value-2
  {:name "identity-value 2"
   :text [[:title "Imperative vs Functional"]
          [:image "/Valor1_en.jpg"]
          [:ii "Function composition"]
          [:ii "Each value used to produce the next"]
          [:anim "/Valor2_en.jpg"]
          [:anim "/Valor3_en.jpg"]
          [:java-snippet "Counter changeCount() {\n    return new Counter((num+num)%1000000);\n}"]
          [:java-snippet "c.changeCount().\n  changeCount().\n  changeCount();"]
          [:i "Referential transparency"]
          [:i "Can be shared"]
          [:i "More garbage"]
          [:i "Need of special data structures"]
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
          [:image "/Atom1_en.jpg"]
          [:code "nopain.slides.atom-example/num"]
          [:code "nopain.slides.atom-example/change-count"]
          [:code "nopain.slides.atom-example/do-count"]
          [:anim "/Atom2_en.jpg"]
          [:code "nopain.slides.atom-example/read-count"]
          ]})

(def atomo-2
  {:name "Atom-2"
   :text [[:title "Atom"]
          [:image "/AtomC1_en.jpg"]
          [:i "Compare and Set..."]
          [:anim "/AtomC2_en.jpg"]
          [:i "...and Retry"]
          [:anim "/AtomC3_en.jpg"]
           ]})


(def referencia 
  {:name "Ref"
   :text [[:title "STM"]
          [:image "/Ref1_en.jpg"]
          [:i "Software Transactional Memory"]
          [:code-snippet "(def mi-ref (ref 1))"]
          [:i "Transactionn"]
          [:code-snippet "(dosync ...)"]
          [:code-snippet "(alter mi-ref inc)"]
          [:anim "/Ref2_en.jpg"]
          [:i "Multiversion Concurrency Control (MVCC)"]
          [:anim "/Ref3_en.jpg"]
          [:i "... and Retry"]
          [:i "Beware. No secondary effects!!"]]})

(defn ejemplo-juego [] 
  {:name "Ref-2"
   :text [[:title "Implementacion del juego"]
          [:i "Game implementation"]
		  [:code "nopain.game/players"]
		  [:code "nopain.game/news"]
          [:code "nopain.game/new-player"]
          [:code "nopain.game/add-player"]
          [:code-snippet (str "players \n" (into {} (take 2 @nopain.game/players)) "") ]
          [:code "nopain.game/steal-coins"]
          [:code "nopain.game/notify"]
          [:code "nopain.game/read-news"]]})


(str @nopain.game/players)
(def agente
  {:name "Agente"
   :text [[:title "Agent"]
          [:image "/Agent1_en.jpg"]
          [:i "Asynchronous behaviour"]
          [:i "Secuential execution"]
          [:code-snippet "(def james (agent \"bond\"))"]
          [:code-snippet "(send james str \" 007\")"]
          [:anim "/Agent2_en.jpg"]
          [:i "For I/O"]
          [:code-snippet "(send-off james #(write file %) \"Bang Bang\")"]
          [:i "Collaboration with atoms and refs"]
          [:ii "Waits to commit to be sent"]
          ]})

(def agradecimiento
  {:name "Gracias"
   :text [[:title "Thank you very much"]]})

(def thank "Thank you ")

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
