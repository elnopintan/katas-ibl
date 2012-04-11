(ns cljproxy.core
  (:gen-class)
  (use lamina.core aleph.http gloss.core gloss.io )
  (import java.net.URL))

(def frame (repeat 1000 :byte))
(defn proxy-handler [dest]
  (fn  [{ :keys [uri body request-method] :as request}]
    (let [resp   (sync-http-request
            {:request-method request-method
             :url (str dest uri)
             :body body
             :frame frame})
          resp (assoc resp :body (map* #(encode (compile-frame frame) %) (:body resp)))] 
      resp)))

(defn -main
  [ dest & args]
  (start-http-server (wrap-ring-handler (proxy-handler dest)) {:port 8080}))
