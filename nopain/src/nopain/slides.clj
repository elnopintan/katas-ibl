(ns nopain.slides
  (:use [hiccup.core :only [html]]
        [hiccup.page :only [html5]]
        [hiccup.util :only [escape-html]]
        [noir.fetch.remotes :only [defremote]])
  (:require [clojure.string :as s]))


(def current-slide
  "This atom stores the current slide"
  (atom {:pos 0 :name "init" :text [[:title ""]]}))

; Rendering slides 

(defn append-slide [data] 
  (fn [slides] (conj slides data)))

(defn set-image [image]
  [:img.image {:src image}])

(defn animation [image] 
  (letfn [(new-frame [frame] 
            (if (= :img.image (first frame)) 
                     (set-image image)
                     frame))]
    (fn [slides] 
      (into [] (map new-frame slides)))))


(defmulti render-slide "Renders part of a slide" first)

(defmethod render-slide :title [[_ text]]
  (append-slide [:h1.title text ]))

(defmethod render-slide :subtitle [[_ text]]
  (append-slide [:h2.title text ]))

(defmethod render-slide :image [[_ img]]
  (append-slide (set-image img)))

(defmethod render-slide :static-image [[_ img]]
  (append-slide [:img {:src img}]))

(defmethod render-slide :anim [[_ img]]
  (animation img))

(defmethod render-slide :authors [[_ auths]]
  (append-slide [:ul.authors  (map (fn [a] [:li.author a]) auths )]))

(defmethod render-slide :code [[_ code]]
  (append-slide [:pre.code {:class "brush: clojure;"}
   (escape-html (clojure.repl/source-fn (symbol code)))]))

(defmethod render-slide :code-snippet [[_ code]]
  (append-slide [:pre.code {:class "brush: clojure;"}
   (escape-html code)]))

(defmethod render-slide :i [[_ data]]
  (append-slide [:ul.i [:li data]]))

(defmethod render-slide :ii [[_ data]]
  (append-slide [:ul.ii [:ul [:li data]]]))

(defmethod render-slide :quote [[_ text author]]
  (append-slide [:div.quote text])
  (append-slide [:div.author author]))

(defmethod render-slide :page [[_ data]]
  (append-slide [:div.pager data]))

; Presentation

(defn render-slides [text pos] 
  "Renders a list of slides"
  (letfn [(apply-render 
          [r s]
           ((render-slide s) r))]
    (reduce apply-render [] (take (inc pos) text))))

(defremote get-slide [name pos]
  (let [{curr-pos :pos {curr-name :name text :text f :run} :data} @current-slide]
    (if (or (not= name curr-name) (not= pos curr-pos))
      {:name curr-name
       :pos curr-pos
       :run f
       :html (html (seq (render-slides text curr-pos)))}))) 


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

