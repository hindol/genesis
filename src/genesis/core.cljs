(ns genesis.core
  (:require-macros
   [cljs.core.async.macros :refer [go]])
  (:require
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]
   [genesis.db :as db]
   [genesis.helpers :as h]
   [genesis.views :as v]
   [reagent.dom :as rdom]
   ["rlp" :as rlp]))

(defn fetch-genesis-templates
  []
  (go (let [validators  (-> @db/app-state :input :validators)
            response    (<! (http/get "json/genesis.json"))]
        (swap! db/app-state
               assoc-in
               [:output :genesis]
               (h/update-genesis (:body response)
                                 (-> @db/app-state :input :ledger-type)
                                 validators)))))

(defn start []
  (fetch-genesis-templates)
  (rdom/render
   [v/page]
   (. js/document (getElementById "app"))))

(defn ^:export init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (js/console.log (rlp/decode "0xf87ea00000000000000000000000000000000000000000000000000000000000000000f854948539c5c368dda69bc541299a5293836ca9e3a36194b97ccc82acb5d04c557e6363e283e2f0a44c0f8b942e7427a308b7e04f53cbceec3d2a9ff6955b7b4594b7108387430622ffebe9c9777bbe5c7d647f9dea808400000000c0"))
  (js/console.log (rlp/decode "0xf8d9f89394d8dba507e85f116b1f7e231ca8525fc9008a6966946571d97f340c8495b661a823f2c2145ca47d63c294e36cbeb565b061217930767886474e3cde903ac594f512a992f3fb749857d758ffda1330e590fa915e94b912de287f9b047b4228436e94b5b78e3ee16171948157d4437104e3b8df4451a85f7b2438ef6699ff94b131288f355bc27090e542ae0be213c20350b767b8410000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0"))
  (start))

(defn stop []
  ;; stop is called before any code is reloaded
  ;; this is controlled by :before-load in the config
  (js/console.log "stop"))
