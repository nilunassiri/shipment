import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";
// eslint-disable-next-line import/named
import { Provider } from "react-redux";
import shipmentReducer from "features/shipment/shipmentSlice";

// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "context";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    shipment: shipmentReducer,
  },
});

ReactDOM.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </MaterialUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
