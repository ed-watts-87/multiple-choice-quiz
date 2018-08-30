import React from "react";
import ReportCard from "../ReportCard/ReportCard";
import { connect } from "react-redux";
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
        {this.props.results.length > 0 ? (
          <ReportCard />
        ) : questions.length > 0 ? (
          <>
            <Question
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
              submit={this.submit}
            />
          </>
        ) : (
          <div className="questions-card-header error">
            <div>
              <h3>{questions.error}</h3>
              <button onClick={() => location.reload()}>Reload</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const Question = props => {
  const { questions, answers, activeIndex, handleChange } = props;
  const findAnswerIndex = el => el.questionIndex == activeIndex;
  const currentAnswer = answers.findIndex(findAnswerIndex);
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
              <button
                className="questions-card-button-answer"
                onClick={() => handleChange(option.optionText)}
              >
                {option.optionText}
              </button>
            </div>
          );
        })}
      </div>

      <div className="questions-card-selected-answer">
        {currentAnswer > -1
          ? `Your current selected answer: ${answers[currentAnswer].answer}`
          : `Select an answer`}
      </div>
    </>
  );
};

const QuestionButtons = props => {
  const {
    activeIndex,
    questions,
    answers,
    increment,
    decrement,
    submit
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
        onClick={() => submit()}
      >
        Submit
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    retrieveQuestions: () => dispatch(retrieveQuestions()),
    answerQuestion: answer => dispatch(answerQuestion(answer)),
    getResults: answers => dispatch(getResults(answers))
  };
};

const mapStateToProps = ({ questions, answers, results }) => {
  return { questions, answers, results };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions);
