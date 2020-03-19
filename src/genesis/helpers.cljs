(ns genesis.helpers
  (:require
   [clojure.pprint :as pp]
   [clojure.string :as str]
   ["rlp" :as rlp]))

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

(defn normalize-address
  [s]
  (let [lower (str/lower-case s)]
    (if (str/starts-with? lower "0x")
      (subs lower 2)
      lower)))

(defn extra-data
  [ledger-type validators]
  (condp = ledger-type
    :besu (let [data    [(js/Uint8Array. 32)
                         (mapv hex-str->bytes validators)
                         (js/Uint8Array. 0)
                         (js/Uint8Array. 4)
                         []]
                encoded (rlp/encode (clj->js data))]
            (buffer->hex-str encoded))
    :quorum (let [data    [(mapv hex-str->bytes validators)
                           (js/Uint8Array. 65)
                           []]
                  encoded (rlp/encode (clj->js data))]
              (str "0x" (apply str (repeat 64 "0")) (subs (buffer->hex-str encoded) 2)))))

(defn update-genesis
  [m ledger-type validators]
  (assoc m :extraData (extra-data ledger-type validators)))
