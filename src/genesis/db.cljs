(ns genesis.db
  (:require
   [reagent.core :as r]))

(defonce app-state
  (r/atom
   {:input  {:ledger-type :besu
             :validators  []}
    :output {:genesis {:besu   nil
                       :quorum nil}}}))