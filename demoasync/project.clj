(defproject demoasync "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.bodil/cljs-noderepl "0.1.10"]
                 [prismatic/dommy "0.1.1"]
                 [core.async "0.1.0-SNAPSHOT"]]
  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
  :cljsbuild {
    :builds [{
        :source-paths ["src/server"]
        :compiler {
          :output-to "server/main.js"  ; default: target/cljsbuild-main.js
          :optimizations :simple
          :pretty-print true}}
             {
        :source-paths ["src/client"]
        :compiler {
          :output-to "public/main.js"  ; default: target/cljsbuild-main.js
          :optimizations :simple
          :pretty-print true}}]})
