(ns nopain.slides.par
  (:require [clojure.java.io :as io])
  (:require [clojure.core.reducers :as r])
  (:import [java.util HashMap]))

(defmacro bootstrap []
  `(do
     (use '[nopain.slides :only ~'[next-slide new-slide insert-in-slides]])
     (use '[nopain.handler :as ~'h])
     (h/run-server)
    ))

;; Word count example

(def stop-words #{"de" "la" "que" "el" "en" "y" "a" "los" "del" "se" "las"
                  "por" "un" "para" "con" "no" "una" "su" "al" "lo" "como"
                  "más" "pero" "sus" "le" "ya" "o" "este" "sí" "porque" "esta"
                  "entre" "cuando" "muy" "sin" "sobre" "también" "me" "hasta"
                  "hay" "donde" "quien" "desde" "todo" "nos" "durante" "todos"
                  "uno" "les" "ni" "contra" "otros" "ese" "eso" "ante" "ellos"
                  "e" "esto" "mí" "antes" "algunos" "qué" "unos" "yo" "otro"
                  "otras" "otra" "él" "tanto" "esa" "estos" "mucho" "quienes"
                  "nada" "muchos" "cual" "poco" "ella" "estar" "estas"
                  "algunas" "algo" "nosotros" "mi" "mis" "tú" "te" "ti" "tu"
                  "tus" "ellas" "nosotras" "vosotros" "vosotras" "os" "mío"
                  "mía" "míos" "mías" "tuyo" "tuya" "tuyos" "tuyas" "suyo"
                  "suya" "suyos" "suyas" "nuestro" "nuestra" "nuestros"
                  "nuestras" "vuestro" "vuestra" "vuestros" "vuestras" "esos"
                  "esas" "estoy" "estás" "está" "estamos" "estáis" "están"
                  "esté" "estés" "estemos" "estéis" "estén" "estaré" "estarás"
                  "estará" "estaremos" "estaréis" "estarán" "estaría"
                  "estarías" "estaríamos" "estaríais" "estarían" "estaba"
                  "estabas" "estábamos" "estabais" "estaban" "estuve"
                  "estuviste" "estuvo" "estuvimos" "estuvisteis" "estuvieron"
                  "estuviera" "estuvieras" "estuviéramos" "estuvierais"
                  "estuvieran" "estuviese" "estuvieses" "estuviésemos"
                  "estuvieseis" "estuviesen" "estando" "estado" "estada"
                  "estados" "estadas" "estad" "he" "has" "ha" "hemos" "habéis"
                  "han" "haya" "hayas" "hayamos" "hayáis" "hayan" "habré"
                  "habrás" "habrá" "habremos" "habréis" "habrán" "habría"
                  "habrías" "habríamos" "habríais" "habrían" "había" "habías"
                  "habíamos" "habíais" "habían" "hube" "hubiste" "hubo"
                  "hubimos" "hubisteis" "hubieron" "hubiera" "hubieras"
                  "hubiéramos" "hubierais" "hubieran" "hubiese" "hubieses"
                  "hubiésemos" "hubieseis" "hubiesen" "habiendo" "habido"
                  "habida" "habidos" "habidas" "soy" "eres" "es" "somos" "sois"
                  "son" "sea" "seas" "seamos" "seáis" "sean" "seré" "serás"
                  "será" "seremos" "seréis" "serán" "sería" "serías" "seríamos"
                  "seríais" "serían" "era" "eras" "éramos" "erais" "eran" "fui"
                  "fuiste" "fue" "fuimos" "fuisteis" "fueron" "fuera" "fueras"
                  "fuéramos" "fuerais" "fueran" "fuese" "fueses" "fuésemos"
                  "fueseis" "fuesen" "siendo" "sido" "tengo" "tienes" "tiene"
                  "tenemos" "tenéis" "tienen" "tenga" "tengas" "tengamos"
                  "tengáis" "tengan" "tendré" "tendrás" "tendrá" "tendremos"
                  "tendréis" "tendrán" "tendría" "tendrías" "tendríamos"
                  "tendríais" "tendrían" "tenía" "tenías" "teníamos" "teníais"
                  "tenían" "tuve" "tuviste" "tuvo" "tuvimos" "tuvisteis"
                  "tuvieron" "tuviera" "tuvieras" "tuviéramos" "tuvierais"
                  "tuvieran" "tuviese" "tuvieses" "tuviésemos" "tuvieseis"
                  "tuviesen" "teniendo" "tenido" "tenida" "tenidos" "tenidas"
                  "tened"})

(defn resource-lines [filename]
  (with-open [f (-> filename io/resource io/reader)]
    (vec
      (line-seq f))))
(def quijote (resource-lines "quijote.txt"))

(defn to-lower [s]
  (.toLowerCase s))

(def merge-sum (partial merge-with +))

(defn wordcount-stream [lines]
  (->> lines
    (mapcat (partial re-seq #"\w+"))
    (map to-lower)
    (filter (complement stop-words))
    (map (fn [word] {word 1}))
    (reduce merge-sum)))

(defn wordcount-stream-2 [lines]
  (->> lines
    (partition 512)
    (pmap wordcount-stream)
    (reduce merge-sum)))

(defn wordcount-reduce [lines]
  (->> lines
    (r/mapcat (partial re-seq #"\w+"))
    (r/map to-lower)
    (r/filter (complement stop-words))
    (r/map (fn [word] {word 1}))
    (r/fold merge-sum)))

(defn wordcount-loop [lines]
  (let [accum (HashMap.)]
    (doseq [line     lines
            raw-word (re-seq #"\w+" line)
            :let     [word (to-lower raw-word)]
            :when    (not (stop-words word))]
        (let [count (.get accum word)]
          (.put accum
                word
                (if count (inc count) 1))))
    accum))

;; Primes example

(defn divides? [divisor num]
  (zero? (rem num divisor)))
(defn prime? [n]
  (not-any?
    #(divides? % n)
    (range 2 n)))

(defn primes-1 [from to]
  (count
    (filter prime? (range from (inc to)))))
(defn primes-2 [from to]
  (r/fold +
          (r/map (fn [_] 1)
                 (r/filter prime? (range from (inc to))))))

;; Time measuring macros

(defmacro measure-time [expr]
  `(let [start# (System/nanoTime)
         ret#   ~expr]
     (/ (double (- (System/nanoTime) start#)) 1000000.0)))

(defmacro avg-time [expr]
  `(/
     (->> [(measure-time ~expr)
           (measure-time ~expr)
           (measure-time ~expr)
           (measure-time ~expr)
           (measure-time ~expr)]
       sort
       (drop 1)
       (take 3)
       (reduce +))
     3))

;; Slides

(def moore
  {:name "The Moore's law"
   :text [[:title "The Moore's law"]
          [:image "/moore.png"]
          [:i (str "The number of transistors on a chip doubles "
                   "approximately every two years")]
          [:i "Need more performance? Wait two years."]
          [:i "Not anymore! We don't get faster processors, we get more of them"]
          [:anim "/cell.jpg"]
          ]})

(def slides [moore])
