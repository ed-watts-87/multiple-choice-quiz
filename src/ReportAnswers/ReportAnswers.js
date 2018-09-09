import * as React from "react";

const ReportAnswers = props => {
  const { getCorrectNumber, results, resetApp } = props;
  return (
    <>
      <div className="report-card-header">
        <h3>Your Results...</h3>
        <h4>You got {getCorrectNumber()} right!</h4>
      </div>
      {results.map(result => {
        return (
          <div
            key={`results-${result.question}`}
            className="report-card-results"
          >
            <div>
              {result.question + 1}. {result.questionText} You said:{" "}
              {result.answerGiven}
              ...{" "}
              {result.result == "correct" ? <span>✅</span> : <span>❌</span>}
            </div>
          </div>
        );
      })}
      <div className="report-card-ctas">
        <button onClick={() => resetApp()}>Play Again?</button>
      </div>
    </>
  );
};

export default ReportAnswers;
