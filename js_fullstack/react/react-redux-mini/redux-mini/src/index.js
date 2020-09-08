import React,{useContext} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import {Provider} from './react-redux'
let action1 = {
  type: "INCREMENT",
};
let action2 = {
  type: "DECREMENT",
};
function reducer(state = 1, action) {
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  } else {
    return state;
  }
}
let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  // consumer

  document.getElementById("root")
);
