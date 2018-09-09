import * as React from "react";
import { withRouter } from "react-router-dom";

const QuestionButtons = props => {
  const {
    activeIndex,
    questions,
    answers,
    increment,
    decrement,
    history
  } = props;
  return (
    <div className="questions-card-ctas">
      <button disabled={activeIndex == 0} onClick={() => decrement()}>
        Previous
      </button>
      <button
        disabled={activeIndex == questions.length - 1}
        onClick={() => increment()}
      >
        Next
      </button>
      <button
        disabled={answers.length != questions.length}
        onClick={() => history.push("/results")}
      >
        Submit
      </button>
    </div>
  );
};

export default withRouter(QuestionButtons);
