import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";

// to init i18n
import "./i18n";

// TODO: dashboard endpoint: /core/dashboard/ [GET] get all lawyers
// TODO: /core/dashboard/{idLawyer}/  in body: approved: true/false [PUT] to accept or refuse lawyer
// TODO: lawyer dashboard (yasser)

// [ ] get reviews
// [ ] post review
// [ ] post appointment

axios.defaults.baseURL = "http://127.0.0.1:8000";
axios.defaults.headers.post["Content-Type"] = "application/json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
