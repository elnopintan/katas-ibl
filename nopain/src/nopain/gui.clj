(ns nopain.gui
  (:use [seesaw.core])
  (:use [nopain.slides]))

(defn remote [slides]
  (invoke-later
    (let [slide-buttons (for [s slides]
                          (action :name    (:name s)
                                  :handler (fn [e] (new-slide s))))
          step-button   (action :name "Step" 
                                :handler (fn [_] (next-slide)))]
    (-> (frame :title "nopain"
               :content (vertical-panel
                          :items (concat
                                   ["Slides:"] slide-buttons
                                   ["Control:" step-button])))
      pack!
      show!))))
