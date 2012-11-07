(ns nopain.slides
  (:use [hiccup.core :only [html]]
        [hiccup.page :only [html5]]
        [hiccup.util :only [escape-html]]
        [noir.fetch.remotes :only [defremote]])
  (:require [clojure.string :as s]))


(def current-slide (atom {:pos 0 :name "init" :text [[:title ""]]}))

(defmulti render-slide first)

(defmethod render-slide :title [[_ text]]
  [:h1 text])

(defmethod render-slide :image [[_ img]]
  [:img {:src img}])

(defmethod render-slide :authors [[_ auths]]
  [:ul  (map (fn [a] [:li a]) auths )])

(defmethod render-slide :code [[_ code]]
  [:pre {:class "brush: clojure;"}
   (escape-html (clojure.repl/source-fn (symbol code)))])

(defmethod render-slide :i [[_ data]]
  [:ul.i [:li data]])

(defmethod render-slide :ii [[_ data]]
  [:ul.ii [:ul [:li data]]])

(defmethod render-slide :page [[_ data]]
  data)

(defn render-slides [text pos]
  (map render-slide (take (inc pos) text)))

(defremote get-slide [name pos]
  (let [{curr-pos :pos {curr-name :name text :text f :run} :data} @current-slide]
    (if (or (not= name curr-name) (not= pos curr-pos))
      {:name curr-name
       :pos curr-pos
       :run f
       :html (html (render-slides text curr-pos))}))) 

(defn new-slide [slide]
  (reset! current-slide {:pos 0 :data slide}))

(defn next-slide []
  (swap! current-slide update-in [:pos] inc))

(defn insert-in-slides [slide]
  (swap! current-slide
         (fn [{{text :text} :data pos :pos :as v}]
           (-> v
               (update-in [:pos] inc)
               (update-in [:data :text]
                          (fn [_]
                            (concat (take (inc pos) text)
                                    [slide]
                                    (drop (inc pos) text))))))))

