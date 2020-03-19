(ns genesis.core
  (:require-macros
   [cljs.core.async.macros :refer [go]])
  (:require
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]
   [genesis.db :as db]
   [genesis.views :as v]
   [reagent.dom :as rdom]))

(defn fetch-genesis-template
  []
  (go (let [validators (-> @db/app-state :input :validators)
            response   (<! (http/get "json/genesis.json"))]
        (swap! db/app-state
               assoc-in
               [:output :genesis]
               (v/update-genesis (:body response) validators)))))

(defn start []
  (fetch-genesis-template)
  (rdom/render
   [v/page]
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
