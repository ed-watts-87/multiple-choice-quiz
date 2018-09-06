import React from "react";
import { connect } from "react-redux";
import QuestionButtons from "../QuestionButtons/QuestionButtons";
import QuestionCard from "../QuestionCard/QuestionCard";
import Error from "../Error/Error";

import {
  retrieveQuestions,
  answerQuestion,
  getResults
} from "../redux/actions";

class Questions extends React.Component {
  state = {
    activeIndex: 0
  };

  incrementIndex = () => {
    this.setState({
      activeIndex: this.state.activeIndex + 1
    });
  };

  decrementIndex = () => {
    this.setState({
      activeIndex: this.state.activeIndex - 1
    });
  };

  submit = () => {
    this.props.getResults(this.props.answers);
  };

  handleOptionChange = option => {
    this.props.answerQuestion({
      questionIndex: this.state.activeIndex,
      answer: option
    });
  };

  componentDidMount() {
    this.props.retrieveQuestions();
  }

  render() {
    const questions = this.props.questions;
    const answers = this.props.answers;
    return (
      <div className="questions-card">
        {questions.length > 0 && (
          <>
            <QuestionCard
              questions={questions}
              answers={answers}
              activeIndex={this.state.activeIndex}
              handleChange={this.handleOptionChange}
            />
            <div className="questions-card-answer-status">
              {answers.length} out of {questions.length} questions answered
            </div>
            <QuestionButtons
              activeIndex={this.state.activeIndex}
              questions={questions}
              answers={answers}
              increment={this.incrementIndex}
              decrement={this.decrementIndex}
            />
          </>
        )}
        {this.props.error.error && <Error />}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    retrieveQuestions: () => dispatch(retrieveQuestions()),
    answerQuestion: answer => dispatch(answerQuestion(answer)),
    getResults: answers => dispatch(getResults(answers))
  };
};

const mapStateToProps = ({ questions, answers, results, error }) => {
  return { questions, answers, results, error };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions);
