import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
// import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
// import { PRIMARY } from "./config/config";
import rootReducer from "./store/reducers/rootReducer";
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
        <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
