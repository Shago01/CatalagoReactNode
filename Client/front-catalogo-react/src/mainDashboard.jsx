import React from "react";
import ReactDOM from "react-dom/client";
import "./css/main.css";

import AppDashboard from "./components/Dashboard/AppDashboard";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppDashboard />
  </React.StrictMode>
);
