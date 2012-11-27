(ns nopain.slides.par
  (:use [nopain.sim])
  (:require [nopain.wordcount :as wc]))

(defmacro bootstrap []
  `(do
     (use '[nopain.slides :only ~'[next-slide new-slide insert-in-slides]])
     (use '[nopain.handler :as ~'h])
     (h/run-server)
    ))

;; Slides

(def intro
  {:name "intro"
   :text [[:title "Painless parallelism"]
          [:i "Concurrency != Parallelism"]
          [:static-image "/clojure-icon.gif"]]})

(def moore
  {:name "The Moore's law"
   :text [[:title "The Moore's law"]
          [:image "/moore.png"]
          [:i (str "The number of transistors on a chip doubles "
                   "approximately every two years")]
          [:i "Need more performance? Wait two years."]
          [:i "Not anymore! We don't get faster processors, we get more of them"]
          [:anim "/cell.jpg"]
          [:i "But we have spent decades optimizing for one core (or few)"]
          [:anim "/x86.png"]
          [:i "What should we do?"]
          ]})

(def twocents
  {:name "My two cents"
   :text [[:title "My two cents"]
          [:image "/insanity.jpg"]
          [:subtitle "Referential transparency"]
          [:i "Transparent functions only depend on their inputs"]
          [:anim "/pure_vs_impure.png"]
          [:ii "Not on any internal state"]
          [:ii "Not on when you call it"]
          [:ii "Not on the order in which you call it"]
          [:i  "Explicit data dependencies"]
          [:subtitle "Be declarative"]
          [:anim "/declarative.jpg"]
          [:i  "What and not how"]
          [:i  "Logic over flow control"]
          [:anim "/makefile.png"]
          [:i  "Make room for reordering, parallelization and distribution"]
          ]})

(def streams
  {:name "Streams"
   :text [[:title "Streams"]
          [:image "/lazyseqs1.png"]
          [:i "Streams (or lazy sequences) abstracts from looping"]
          [:anim  "/lazyseqs2.png"]
          [:anim  "/lazyseqs3.png"]
          [:i "Stream operators are more declarative than loops"]
          [:ii "Map"]
          [:anim  "/map.png"]
          [:ii "Filter"]
          [:anim  "/filter.png"]
          [:ii "Reduce"]
          [:anim  "/reduce.png"]
          [:ii "Partition"]
          [:anim  "/partition.png"]
          [:ii "And so on..."]
          [:anim  "/perlis.jpg"]
          [:i [:div
               [:p.quote "It is better to have 100 functions operate on one
                        data structure than 10 functions on 10 data
                        structures"]
               [:p.author "Alan Perlis 1922-1990"]]]
          ]})

(def galaxy-example
  {:name "Galaxy simulation example"
   :text [[:title "Galaxy simulation example"]
          [:i "Let's simulate a galaxy of n stars naïvely (O(n^2))"]
          [:image "/galaxy-sim-1.png"]
          [:code  "nopain.sim/update-galaxy"]
          [:anim  "/galaxy-sim-2.png"]
          [:code  "nopain.sim/simulate"]
          [:anim  "/galaxy-sim-3.png"]
          [:code-snippet "(simulate update-galaxy 0.1 100 galaxy)"]
          [:i  "How difficult is parallelize the map part?"]
          [:code  "nopain.sim/update-galaxy-2"]
          [:i  "~50% speed up just <b>by changing map by pmap</b>"]
          ]})

(def problem-solved
  {:name "Problem solved?"
   :text [[:title "Problem solved?"]
          [:image "/problem-solved.jpg"]
          [:i "Let's look at other example: word counting"]
          [:code "nopain.wordcount/wordcount"]
          [:anim "/stream-of-words.png"]
          [:i "pmap all over the place"]
          [:code "nopain.wordcount/wordcount-pmap"]
          [:i "Speed up of <b>-450%!</b> Synchronization time dominates."]
          [:code "nopain.wordcount/wordcount-buckets"]
          [:i "Speed up of <b>41%</b>"]]})

(def reducers
  {:name "Reducers"
   :text [[:title "Reducers"]
          [:i "The stream abstraction is intrinsically serial"]
          [:image "/reduce-combine.png"]
          [:i "The reduce-combine model unleashes parallelism"]
          [:i "Can we modify streams to use this model?"]
          [:ii "Before"]
          [:code "nopain.wordcount/wordcount"]
          [:ii "After"]
          [:code "nopain.wordcount/wordcount-reduce"]
          [:i "Similar speedup as bucketing"]
          ]})

(def compared-times (wc/compared-times wc/benchmark-results))

(def qa-time
  {:name "Thanks and Q&A"
   :text [[:page [:div
                  [:h1.title "Conclusion"]
                  [:p.conclussion
                   "Leverage immutability, referential transparency
                    and declarative models and stop suffering"]
                  [:div#thanks "Thanks for your time"]
                  ]]
          ]})

(def slides [moore
             twocents
             streams
             galaxy-example
             problem-solved
             reducers
             compared-times
             qa-time])
