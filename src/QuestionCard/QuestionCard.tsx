import * as React from "react";
import { IQuestion, IAnswer, IOptions, IHandleOptionChange } from "../typings";

interface IQuestionCardProps {
  questions: IQuestion[];
  answers: IAnswer[];
  activeIndex: number;
  handleChange: IHandleOptionChange;
}

interface IQuestionSelectionProps {
  key: string;
  option: IOptions;
  answers: IAnswer[];
  activeIndex: number;
  handleChange: IHandleOptionChange;
}

const QuestionCard = (props: IQuestionCardProps) => {
  const { questions, answers, activeIndex, handleChange } = props;
  const activeQuestion = questions[activeIndex];
  return (
    <>
      <div className="questions-card-header">
        <h3>{activeQuestion.questionText}</h3>
      </div>
      <div className="questions-card-answers">
        {activeQuestion.options.map((option, idx) => {
          return (
            <QuestionSelection
              key={`${activeIndex}-${idx}`}
              option={option}
              answers={answers}
              activeIndex={activeIndex}
              handleChange={handleChange}
            />
          );
        })}
      </div>
    </>
  );
};

const QuestionSelection = (props: IQuestionSelectionProps) => {
  const { option, answers, activeIndex, handleChange } = props;
  const findAnswerIndex = (el: IAnswer) => el.questionIndex == activeIndex;
  const currentAnswer = answers.findIndex(findAnswerIndex);
  const isSelected =
    currentAnswer != -1 && answers[currentAnswer].answer == option.optionText;
  return (
    <div className="questions-card-answer-option">
      <button
        className={`${
          isSelected
            ? "questions-card-button-answer selected"
            : "questions-card-button-answer"
        }`}
        onClick={() => handleChange(option.optionText)}
      >
        {option.optionText}
      </button>
    </div>
  );
};

export default QuestionCard;
