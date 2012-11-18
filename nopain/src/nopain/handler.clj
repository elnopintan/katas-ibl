(ns nopain.handler
  (:use compojure.core
        [nopain.slides :only [current-slide get-slide]]
        ring.adapter.jetty
        ring.util.response
        [hiccup.core :only [html]]
        [hiccup.page :only [html5 include-js include-css]]
        [noir.fetch.remotes :only [defremote call-remote safe-read]])
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            nopain.game))


(defroutes app-routes
  (GET "/" [] (assoc
                (response
                  (html5
                    (include-js "/main.js")
                    (include-js "/shCore.js")
                    (include-js "/shBrushClojure.js")
                    (include-css "/shCoreDefault.css")
                    (include-css "/shClojureExtra.css")
                    (include-css "/slides.css")
                    [:script {:type "text/javascript"}
                     "SyntaxHighlighter.all();"]
                    [:div#header "DEVCON 1"]
                    [:div#main]
                    [:div#footer "Painless concurrency and paralelism"]))
               :session {:saludo "hola"}))

  (GET "/current" [] (get-slide))
  (GET "/player" [] (html [:div.player [:h3 ""][:button "Roba!"]]))
  (GET "/thief" [] (html [:div [:div.name][:span#coins]]))
  (GET "/new" [] (html [:li.new ""]))
  (ANY "/_fetch" {{:keys [remote params]} :params}
       (let [params (safe-read params)
             remote (keyword remote)]
         (call-remote remote params)))
  (route/resources "/")
  (route/not-found "Not Found"))

(defremote adder [& nums]
  (apply + nums))

(def app
  (handler/site #'app-routes))

(defn run-server []
  (send (agent nil) (fn  [_]
                      (run-jetty #'app {:port 3000}))))
