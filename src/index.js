import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import reducer from "./redux/reducers";

import Questions from "./Questions/Questions";
import ReportCard from "./ReportCard/ReportCard";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <h1>Food Quiz!</h1>
          <Switch>
            <Route exact path="/" component={Questions} />
            <Route path="/results" component={ReportCard} />
          </Switch>
        </>
      </Router>
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
