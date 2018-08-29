import React from "react";

export default class Questions extends React.Component {
  render() {
    return (
      <div className="questions-card">
        <div className="questions-card-header">
          <h3>Question</h3>
        </div>
        <div className="questions-card-answers">
          <div className="questions-card-answer-option">
            <input type="radio" id="a" name="name" />
            <label htmlFor="a">some answer</label>
          </div>
          <div className="questions-card-answer-option">
            <input type="radio" id="b" name="name" />
            <label htmlFor="b">some answer</label>
          </div>
          <div className="questions-card-answer-option">
            <input type="radio" id="c" name="name" />
            <label htmlFor="c">some answer</label>
          </div>
        </div>
        <div className="questions-card-ctas">
          <button>Previous</button>
          <button>Next</button>
          <button>Submit</button>
        </div>
      </div>
    );
  }
}
