(ns spa.core
  (:require [reagent.core :as reagent :refer [atom]]
            [ajax.core :refer [GET POST]]))

  (def state (atom {:doc {} :saved? false}))

  (defn set-value! [id value]
    (swap! state assoc :saved? false)
    (swap! state assoc-in [:doc id] value))

  (defn get-value [id]
    (get-in @state [:doc id]))

  (defn row [label & body]
     [:div.row
     [:div.col-md-2 [:span label]]
     [:div.col-md-3 body]])


 (defn text-input [id label]
   [row label
    [:input
     {:type "text"
      :class "form-control"
      :value (get-value id)
      :on-change #(set-value! id (-> % .-target .-value))}]])

(defn list-item [id k v selections]
  (letfn [(handle-click! []
            (swap! selections update-in [k] not)
            (set-value! id (->> @selections
                                (filter second)
                                (map first))))]
    [:li {:class (str "list-group-item"
                      (if (k @selections) " active"))
          :on-click handle-click!}
     v]))


(defn selection-list [id label & items]
  (let [selections (->> items (map (fn [[k]] [k false])) (into {}) atom)]    
    (fn []
      [:div.row
       [:div.col-md-2 [:span label]]
       [:div.col-md-5
        [:div.row
         (for [[k v] items]
           [list-item id k v selections])]]])))




(defn handler [response]
  (.log js/console (str response)))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

(defn save-doc []
  (GET "/save"
      {:handler (fn [res] (swap! state assoc :saved? res))
       :error-handler error-handler}))

(defn done1 []
  (POST "/send-message"
      {:params {:message "Hello World"
                :user    "Bob"}
       :handler handler
       :error-handler error-handler}))


(defn done []
  (GET "/hello" {:handler handler
                 :error-handler error-handler}))




(defn home []
  [:div
   [:div.page-header [:h1 "Reagent Form"]]

   [text-input :first-name "First name"]
   [text-input :last-name "Last name"]

   [selection-list :favorite-drinks "Favorite drinks"
    [:coffee "Coffee"]
    [:beer "Beer"]
    [:crab-juice "Crab juice"]]
   (if (:saved? @state)
     [:p "Saved"]
     [:button {:type "submit"
               :class "btn btn-default"
               :onClick save-doc}
      "Submit"])])
   
(reagent/render-component [home]
                           (.getElementById js/document "app"))
