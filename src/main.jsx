import React from "react";
import ReactDOM from "react-dom/client";
import { EcuotProvider } from "./context/EcuotProvider.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EcuotProvider>
      <App />
    </EcuotProvider>
  </React.StrictMode>
);
