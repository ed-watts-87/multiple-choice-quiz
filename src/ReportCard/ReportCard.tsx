import * as React from "react";
import { History } from "history";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getResults, resetApplication } from "../redux/actions";

import ReportAnswers from "../ReportAnswers/ReportAnswers";
import Error from "../Error/Error";
import { IResult, IQuestion, IAnswer, IError } from "../typings";

interface IReportCardProps {
  getResults: (answers: object) => void;
  resetApplication: () => void;
  questions: IQuestion[];
  answers: IAnswer[];
  results: IResult[];
  error: IError;
  history: History;
}

class ReportCard extends React.Component<IReportCardProps, void> {
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
      <div className="questions-card">
        {results.length > 1 && (
          <ReportAnswers
            getCorrectNumber={this.getCorrectNumber}
            results={this.props.results}
            resetApp={this.resetApp}
          />
        )}
        {this.props.error.error && <Error />}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getResults: answers => dispatch(getResults(answers)),
    resetApplication: () => dispatch(resetApplication())
  };
};

const mapStateToProps = ({ questions, answers, results, error }) => {
  return { questions, answers, results, error };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ReportCard)
);
