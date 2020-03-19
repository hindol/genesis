(ns genesis.views
  (:require
   [clojure.string :as str]
   [genesis.helpers :as h]
   [genesis.db :as db]))

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
                :value           :besu
                :default-checked (= (-> @db/app-state :input :ledger-type) :besu)
                :on-change       #(swap! db/app-state
                                         assoc-in
                                         [:input :ledger-type]
                                         (keyword (-> % .-target .-value)))}]
       "Besu"]
      [:label.radio
       [:input {:type            "radio"
                :name            "ledger-type"
                :value           :quorum
                :default-checked (= (-> @db/app-state :input :ledger-type) :quorum)
                :on-change       #(swap! db/app-state
                                         assoc-in
                                         [:input :ledger-type]
                                         (keyword (-> % .-target .-value)))}]
       "Quorum"]]]]])

(defn validators-input
  []
  [:div.field.is-horizontal
   [:div.field-label.is-normal
    [:label.label "Validators"]]
   [:div.field-body
    [:div.field
     [:p.control
      [:input.input
       {:type        "text"
        :placeholder "0x01, 0x02, 0x03, ..."
        :on-change   #(swap! db/app-state
                             assoc-in
                             [:input :validators]
                             (mapv h/normalize-address
                                   (str/split (-> % .-target .-value)
                                              #", ?")))}]]]]])

(defn show-genesis
  []
  (let [ledger-type (-> @db/app-state :input :ledger-type)]
    [:div.content
     [:pre (if-let [genesis (-> @db/app-state :output :genesis ledger-type)]
             (let [validators (-> @db/app-state :input :validators)]
               (h/clj->json (h/update-genesis genesis ledger-type validators)))
             "Loading...")]]))

(defn show-app-state
  []
  [:div
   [:pre (h/pp-str @db/app-state)]])

(defn page
  []
  [:div.columns
   [:div.column.is-clipped
    [:div.columns
     [:div.column
      [:form
       [ledger-input]
       [validators-input]]]]
    [:div.columns
     [:div.column
      [show-genesis]]]
    #_[:div.columns
       [:div.column
        [show-app-state]]]]])