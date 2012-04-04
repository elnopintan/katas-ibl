(defproject node-examples "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [org.clojure/clojurescript "0.0-1011"]]
  :plugins [[lein-cljsbuild "0.1.5"]]
  :cljsbuild {:builds
              [{       ; The path to the top-level ClojureScript source directory:
                :source-path "src/cljs"
                                        ; The standard ClojureScript compiler options:
                                        ; (See the ClojureScript compiler documentation for details.)
                :compiler {
                           :output-to "main.js"  ; default: main.js in current directory
                           :optimizations :simple
                           :target :nodejs
                           ;:pretty-print true
                           }}]})







