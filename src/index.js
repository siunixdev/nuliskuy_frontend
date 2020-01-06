import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as myConst from "./MyConstant";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { stat } from "fs";

const globalState = {
  category: ""
};

// Reducer
const rootReducer = (state = globalState, action) => {
  if (action.type === "CATEGORY_CLICK") {
    return {
      ...state,
      category: action.text
    };
  }
  console.log(state);
  return state;
};

// Store
const storeRedux = createStore(rootReducer);

ReactDOM.render(
  <Provider store={storeRedux}>
    <App />
  </Provider>,
  document.getElementById("root")
);
ReactDOM.render(myConst.APP_NAME, document.getElementById("app"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
