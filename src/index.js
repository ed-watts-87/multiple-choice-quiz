import React from "react";
import ReactDOM from "react-dom";
import Questions from "./Questions/Questions";
import "./index.css";

class App extends React.Component {
  render() {
    return <Questions />;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
