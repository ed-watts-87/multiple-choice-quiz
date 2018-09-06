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
              handleChange={handleChange}
            />
          );
        })}
      </div>
      <SelectedAnswer answers={answers} activeIndex={activeIndex} />
    </>
  );
};

const QuestionSelection = props => {
  const { option, handleChange } = props;
  return (
    <div className="questions-card-answer-option">
      <button
        className="questions-card-button-answer"
        onClick={() => handleChange(option.optionText)}
      >
        {option.optionText}
      </button>
    </div>
  );
};

const SelectedAnswer = props => {
  const { answers, activeIndex } = props;
  const findAnswerIndex = el => el.questionIndex == activeIndex;
  const currentAnswer = answers.findIndex(findAnswerIndex);
  return (
    <div className="questions-card-selected-answer">
      {currentAnswer > -1
        ? `Your current selected answer: ${answers[currentAnswer].answer}`
        : `Select an answer`}
    </div>
  );
};

export default QuestionCard;
