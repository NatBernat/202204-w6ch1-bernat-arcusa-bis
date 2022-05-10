import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import AppStyled from "./AppStyled";
import store from "./redux/store/store";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppStyled>
        <App />
      </AppStyled>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
