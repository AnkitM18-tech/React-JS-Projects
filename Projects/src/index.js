import React from "react";
import ReactDOM from "react-dom";
// import "./birthday-reminder/index.css";
// import "./tours/index.css";
// import "./reviews/index.css";
// import "./accordion/index.css";
// import "./menu/index.css";
// import "./tabs/index.css";
// import "./slider/index.css";
// import "./lorem-ipsum/index.css";
// import "./color-generator/index.css";
// import "./grocery-bud/index.css";
// import "./navbar/index.css";
// import "./sidebar-modal/index.css";
import "./stripe-submenus/index.css";
import "./cart/index.css";
// import { AppProvider } from "./sidebar-modal/context";
// import { AppProvider } from "./stripe-submenus/context";
import { AppProvider } from "./cart/context";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
