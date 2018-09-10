import * as React from "react";
import { connect } from "react-redux";
import { IError, IQuestion, IAnswer } from "../typings";
import QuestionButtons from "../QuestionButtons/QuestionButtons";
import QuestionCard from "../QuestionCard/QuestionCard";
import Error from "../Error/Error";

import { retrieveQuestions, answerQuestion } from "../redux/actions";

interface IQuestionProps {
  retrieveQuestions: () => void;
  answerQuestion: (IAnswer) => void;
  questions: IQuestion[];
  answers: IAnswer[];
  error: IError;
}

type IQuestionState = {
  readonly activeIndex: number;
};

class Questions extends React.Component<IQuestionProps, IQuestionState> {
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

  handleOptionChange = (option: string) => {
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
    answerQuestion: (answer: IAnswer) => dispatch(answerQuestion(answer))
  };
};

const mapStateToProps = ({ questions, answers, error }) => {
  return { questions, answers, error };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions);
