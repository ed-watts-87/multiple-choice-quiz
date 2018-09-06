import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getResults, resetApplication } from "../redux/actions";

class ReportCard extends React.Component {
  componentDidMount() {
    if (this.props.questions.length == 0) {
      return this.props.history.push("/");
    }
    this.props.getResults(this.props.answers);
  }

  resetApp = () => {
    this.props.resetApplication();
    this.props.history.push("/");
  };

  getCorrectNumber = () => {
    let numberCorrect = 0;
    this.props.results.forEach(result => {
      result.result === "correct" && numberCorrect++;
    });
    return numberCorrect;
  };

  render() {
    const results = this.props.results;
    return (
      this.props.results.length > 1 && (
        <div className="questions-card">
          {!results[0].error ? (
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
                      {result.result == "correct" ? (
                        <span>✅</span>
                      ) : (
                        <span>❌</span>
                      )}
                    </div>
                  </div>
                );
              })}
              <div className="report-card-ctas">
                <button onClick={() => this.resetApp()}>Play Again?</button>
              </div>
            </>
          ) : (
            <div className="report-card-header error">
              <div>
                <h3>{results[0].error}</h3>
                <button onClick={() => this.resetApp()}>Reload</button>
              </div>
            </div>
          )}
        </div>
      )
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getResults: answers => dispatch(getResults(answers)),
    resetApplication: () => dispatch(resetApplication())
  };
};

const mapStateToProps = ({ questions, answers, results }) => {
  return { questions, answers, results };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ReportCard)
);
