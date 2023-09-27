import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ScrollToTop from "./components/ScrollToTop";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Provider store={configureStore()}>
      <ScrollToTop />
      <App />
    </Provider>
  </HashRouter>
);
