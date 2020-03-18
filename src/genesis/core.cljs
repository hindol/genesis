(ns genesis.core
  (:require-macros
   [cljs.core.async.macros :refer [go]])
  (:require
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]
   [clojure.pprint :as pp]
   [clojure.string :as str]
   [reagent.core :as r]
   [reagent.dom :as rdom]
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
  (->> (partition 2 s)
       (mapv (fn [[a b]]
               (js/parseInt (str a b) 16)))
       (js/Uint8Array.)))

;; define your app data so that it doesn't get over-written on reload

(defonce app-state
  (r/atom
   {:input  {:ledger-type :besu
             :validators  []}
    :output {:genesis nil}}))

(defn ledger-input
  []
  [:div.field.is-horizontal
   [:div.field-label.is-normal
    [:label.label "Ledger Type"]]
   [:div.field-body
    [:div.field
     [:p.control
      [:label.radio
       [:input {:type    "radio"
                :name    "ledger-type"
                :checked (= (-> @app-state :input :ledger-type) :besu)}]
       "Besu"]
      [:label.radio
       [:input {:type    "radio"
                :name    "ledger-type"
                :checked (= (-> @app-state :input :ledger-type) :quorum)}]
       "Quorum"]]]]])

(defn normalize-address
  [s]
  (let [lower (str/lower-case s)]
    (if (str/starts-with? lower "0x")
      (subs lower 2)
      lower)))

(defn validators-input
  []
  (let [path [:input :validators]]
    (fn []
      [:div.field.is-horizontal
       [:div.field-label.is-normal
        [:label.label "Validators"]]
       [:div.field-body
        [:div.field
         [:p.control
          [:input.input {:type        "text"
                         :placeholder "0x01, 0x02, 0x03, ..."
                         :on-change   #(swap! app-state
                                              assoc-in
                                              path
                                              (mapv normalize-address
                                                    (str/split (-> % .-target .-value) #", ?")))}]]]]])))

(defn extra-data
  [validators]
  (let [data    [(js/Uint8Array. 32)
                 (mapv hex-str->bytes validators)
                 (js/Uint8Array. 0)
                 (js/Uint8Array. 4)
                 []]
        encoded (rlp/encode (clj->js data))]
    (buffer->hex-str encoded)))

(defn update-genesis
  [m validators]
  (assoc m :extraData (extra-data validators)))

(defn fetch-genesis-template
  []
  (go (let [validators (-> @app-state :input :validators)
            response   (<! (http/get "json/genesis.json"))]
        (swap! app-state
               assoc-in
               [:output :genesis]
               (update-genesis (:body response) validators)))))

(defn show-genesis
  []
  [:div.content
   [:pre (if-let [genesis (-> @app-state :output :genesis)]
           (let [validators (-> @app-state :input :validators)]
             (clj->json (update-genesis genesis validators)))
           "Loading...")]])

(defn show-app-state
  []
  [:div
   [:pre (pp-str @app-state)]])

(defn start []
  (fetch-genesis-template)
  (rdom/render
   [:div.columns
    [:div.column
     [:div.columns
      [:div.column
       [:form
        [ledger-input]
        [validators-input]]]]
     [:div.columns
      [:div.column
       [show-genesis]]]]]
   (. js/document (getElementById "app"))))

(defn ^:export init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (start))

(defn stop []
  ;; stop is called before any code is reloaded
  ;; this is controlled by :before-load in the config
  (js/console.log "stop"))
