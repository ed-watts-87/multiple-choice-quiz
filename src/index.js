import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./redux/reducers";

import Questions from "./Questions/Questions";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Food Quiz!</h1>
        <Questions />
      </div>
    );
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
