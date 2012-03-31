(ns cljproxy.core
  (:gen-class)
  (use lamina.core aleph.http)
  (import java.net.URL))

(defn proxy-handler [dest]
  (fn  [channel { :keys [uri body request-method] :as request}]
    (let [resp   (http-request
            {:request-method request-method
             :url (str dest uri)
             :body body})] 
      (enqueue channel @resp))))

(defn -main
  [ dest & args]
  (start-http-server (proxy-handler dest) {:port 8080}))
