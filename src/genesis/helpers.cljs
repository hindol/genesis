(ns genesis.helpers
  (:require
   [clojure.pprint :as pp]))

(defn pp-str
  [x]
  (with-out-str (pp/pprint x)))

(defn clj->json
  [x]
  (.stringify js/JSON (clj->js x) nil 2))

(defn buffer->hex-str
  [x]
  (str "0x" (.toString x "hex")))

(defn hex-str->bytes
  [s]
  (letfn [(hex-pair->byte [[a b]]
            (js/parseInt (str a b) 16))]
    (->> (partition 2 s)
         (mapv hex-pair->byte)
         (js/Uint8Array.))))