import React from "react";

const QuestionCard = props => {
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

const QuestionSelection = props => {
  const { option, answers, activeIndex, handleChange } = props;
  const findAnswerIndex = el => el.questionIndex == activeIndex;
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
