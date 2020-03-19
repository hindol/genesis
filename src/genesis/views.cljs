(ns genesis.views
  (:require
   [clojure.string :as str]
   [genesis.helpers :as h]
   [genesis.db :as db]
   ["rlp" :as rlp]))

(defn normalize-address
  [s]
  (let [lower (str/lower-case s)]
    (if (str/starts-with? lower "0x")
      (subs lower 2)
      lower)))

(defn extra-data
  [validators]
  (let [data    [(js/Uint8Array. 32)
                 (mapv h/hex-str->bytes validators)
                 (js/Uint8Array. 0)
                 (js/Uint8Array. 4)
                 []]
        encoded (rlp/encode (clj->js data))]
    (h/buffer->hex-str encoded)))

(defn update-genesis
  [m validators]
  (assoc m :extraData (extra-data validators)))

(defn ledger-input
  []
  [:div.field.is-horizontal
   [:div.field-label.is-normal
    [:label.label "Ledger Type"]]
   [:div.field-body
    [:div.field
     [:p.control
      [:label.radio
       [:input {:type            "radio"
                :name            "ledger-type"
                :default-checked (= (-> @db/app-state :input :ledger-type) :besu)}]
       "Besu"]
      [:label.radio
       [:input {:type            "radio"
                :name            "ledger-type"
                :default-checked (= (-> @db/app-state :input :ledger-type) :quorum)}]
       "Quorum"]]]]])

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
                         :on-change   #(swap! db/app-state
                                              assoc-in
                                              path
                                              (mapv normalize-address
                                                    (str/split (-> % .-target .-value) #", ?")))}]]]]])))

(defn show-genesis
  []
  [:div.content
   [:pre (if-let [genesis (-> @db/app-state :output :genesis)]
           (let [validators (-> @db/app-state :input :validators)]
             (h/clj->json (update-genesis genesis validators)))
           "Loading...")]])

(defn show-app-state
  []
  [:div
   [:pre (h/pp-str @db/app-state)]])

(defn page
  []
  [:div.columns
   [:div.column
    [:div.columns
     [:div.column
      [:form
       [ledger-input]
       [validators-input]]]]
    [:div.columns
     [:div.column
      [show-genesis]]]]])