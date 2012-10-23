(ns nopain.handler
  (:use compojure.core
        [nopain.slides :only [current-slide get-slide]]
        ring.adapter.jetty
        ring.util.response
        [hiccup.core :only [html]]
        [hiccup.page :only [html5 include-js]]
        [noir.fetch.remotes :only [defremote call-remote safe-read]])
  (:require [compojure.handler :as handler]
            [compojure.route :as route]))


(defroutes app-routes
  (GET "/" [] (assoc (response (html5
                                (include-js "/main.js")
                                [:div#main "hello"]))
               :session {:saludo "hola"}))
       
  (GET "/current" [] (get-slide))
  (ANY "/_fetch" {{:keys [remote params]} :params}
       (let [params (safe-read params)
             remote (keyword remote)]
         (call-remote remote params)))
  (route/resources "/")
  (route/not-found "Not Found"))

(defremote adder [& nums]
  (apply + nums))

(def app
  (handler/site app-routes))


(defn run-server []
  (send (agent nil) (fn [_] (run-jetty app {:port 3000}))))