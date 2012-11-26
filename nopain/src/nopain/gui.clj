(ns nopain.gui
  (:use [seesaw.core])
  (:use [nopain.slides]))

(defn realize [slide]
  (if (fn? slide)
    (slide)
    slide))

(defn remote [slides]
  (invoke-later
    (let [slide-buttons (for [s slides
                              :let [slide (realize s)]]
                          (action :name    (:name slide)
                                  :handler (fn [e]
                                             (new-slide slide))))
          step-button   (action :name "Step"
                                :handler (fn [_] (next-slide)))]
    (-> (frame :title "nopain"
               :content (vertical-panel
                          :items (concat
                                   ["Slides:"] slide-buttons
                                   ["Control:" step-button])))
      pack!
      show!))))
