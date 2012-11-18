(defproject nopain "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [org.clojure/clojurescript "0.0-1450"]
                 [compojure "1.1.1"]
                 [fetch "0.1.0-alpha2" :exclusions [org.clojure/clojure]]
                 [ring/ring-jetty-adapter "1.1.6"]
                 [enfocus "1.0.0-beta1"]
                 [hiccup "1.0.1"]
                 [seesaw "1.4.2"]]
  :plugins [[lein-ring "0.7.3"] [lein-cljsbuild "0.2.9"]]
  :ring {:handler nopain.handler/app}
  :cljsbuild {
    :builds
      [
       {:source-path "src/cljs/nopain"
        :compiler {:output-to "resources/public/main.js"
                   :optimizations :advanced
                   :externs ["resources/public/externs.js"]
                   :pretty-print true
                   }}]}
  :profiles
  {:dev {:dependencies [[ring-mock "0.1.3"]]}})
