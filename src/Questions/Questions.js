import React from "react";

import { connect } from "react-redux";
import { retrieveQuestions, answerQuestion } from "../redux/actions";

class Questions extends React.Component {
  incrementIndex() {
    this.setState({
      activeIndex: this.state.activeIndex + 1
    });
  }

  decrementIndex() {
    this.setState({
      activeIndex: this.state.activeIndex - 1
    });
  }

  handleOptionChange = evt => {
    this.props.answerQuestion({
      questionIndex: this.state.activeIndex,
      answer: evt.target.value
    });
  };

  componentDidMount() {
    this.props.retrieveQuestions().then(() =>
      this.setState({
        activeIndex: 0
      })
    );
  }

  render() {
    const questions = this.props.questions;
    const answers = this.props.answers;
    return (
      <div className="questions-card">
        {this.state && (
          <>
            <Question
              questions={questions}
              activeIndex={this.state.activeIndex}
              handleChange={this.handleOptionChange}
            />
            <div className="questions-card-answer-status">
              {answers.length} out of {questions.length} questions answered
            </div>
            <div className="questions-card-ctas">
              <button
                disabled={this.state.activeIndex == 0}
                onClick={() => this.decrementIndex()}
              >
                Previous
              </button>
              <button
                disabled={this.state.activeIndex == questions.length - 1}
                onClick={() => this.incrementIndex()}
              >
                Next
              </button>
              <button disabled={answers.length != questions.length}>
                Submit
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}

const Question = props => {
  const { questions, activeIndex, handleChange } = props;
  const activeQuestion = questions[activeIndex];
  return (
    <>
      <div className="questions-card-header">
        <h3>{activeQuestion.questionText}</h3>
      </div>
      <div className="questions-card-answers">
        {activeQuestion.options.map((option, idx) => {
          return (
            <div
              className="questions-card-answer-option"
              key={`${activeIndex}-${idx}`}
            >
              <input
                onChange={handleChange}
                type="radio"
                id={`${activeIndex}-${idx}`}
                name={`question${activeIndex}`}
                value={option.optionText}
              />
              <label htmlFor={`${activeIndex}-${idx}`}>
                {option.optionText}
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    retrieveQuestions: () => dispatch(retrieveQuestions()),
    answerQuestion: answer => dispatch(answerQuestion(answer))
  };
};

const mapStateToProps = ({ questions, answers }) => {
  return { questions, answers };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions);
