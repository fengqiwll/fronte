/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n/index";
//config
import { RouterProvider } from "react-router-dom";
import routes from "./router.config";

import { store } from "./store/index";
import { Provider as StoreProvider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);


root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <RouterProvider router={routes} />
    </StoreProvider>
  </React.StrictMode>,
);
