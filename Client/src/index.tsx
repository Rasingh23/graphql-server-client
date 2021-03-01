/*
* Index file to render composed App
*/


import React from "react";
import { render } from "react-dom";
import { StoreProvider } from "./components/store";
import App from "./App";

const rootElement = document.getElementById("root");
render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  rootElement
);
