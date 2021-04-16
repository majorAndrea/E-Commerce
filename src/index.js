import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { paypalOptions } from "./paypal/paypal.config.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store.js";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <PayPalScriptProvider options={paypalOptions}>
            <App />
          </PayPalScriptProvider>
        </PersistGate>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
