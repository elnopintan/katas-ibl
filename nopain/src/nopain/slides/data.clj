(ns nopain.slides.data)

(def intro
  {:name "intro"
   :text [
    [:title "Concurrencia sin dolor"]
    [:image "/clojure-icon.gif"]
    [:authors ["Ignacio  Blasco López" "Sebastian Ortega Torres"]]]})

(def sl1
  {:name "sl1"
   :text [
          [:title "Que es la computación concurrente"]
          [:i "Segun la wikipedia:"]
          [:ii "Concurrent computing is a form of computing in which programs are designed as collections of interacting computational processes that may be executed in parallel."]
          [:i "Estrategias"]
          [:ii "Memoria compartida"]
          [:ii "Paso de mensajes"]
          [:i "Problema: Coordinar los procesos que manipulan los mismos datos"]
          [:ii "Solucion: Bloqueos y Señales"]]})

(def sl2
  {:name "sl2"
   :text [
          [:title "Otra perspectiva"]
          [:i "Mutabilidad"]
          [:ii "X = 1"]
          [:ii "print X => 1"]
          [:ii "X = 2"]
          [:ii "print X => 2"]]})

(def counter
  {:name "counter"
   :run "counter"
   :text [[:title [:div#counter 0]]]})