import React from "react";
import { connect } from "react-redux";

class ReportCard extends React.Component {
  getCorrectNumber = () => {
    let numberCorrect = 0;
    this.props.results.forEach(result => {
      result.result === "correct" && numberCorrect++;
    });
    return numberCorrect;
  };

  render() {
    const results = this.props.results;
    return !results[0].error ? (
      <>
        <div className="report-card-header">
          <h3>Your Results...</h3>
          <h4>You got {this.getCorrectNumber()} right!</h4>
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
          <button onClick={() => location.reload()}>Play Again?</button>
        </div>
      </>
    ) : (
      <div className="report-card-header">
        <div>
          <h3>{results[0].error}</h3>
          <button onClick={() => location.reload()}>Reload</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ results }) => {
  return { results };
};

export default connect(mapStateToProps)(ReportCard);
