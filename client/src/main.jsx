import React from "react";
import ReactDOM from "react-dom/client";
import "./config/firebase-config";
import App from "./App";
import "./globalStyle.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
