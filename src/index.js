import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import CreateStore from "./store";
import {unstable_HistoryRouter as HistoryRouter} from "react-router-dom";
import { history } from "./redux/history";
import "./styles/global.scss"

const store = CreateStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider  store={store}>
    <React.StrictMode>
      <HistoryRouter history={history}>
          <App />
      </HistoryRouter>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
