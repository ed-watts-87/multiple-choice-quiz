import answers from "./answers";

const sortAnswers = (a, b) => {
  const indexA = a.question;
  const indexB = b.question;
  let comparison = 0;
  if (indexA > indexB) {
    comparison = 1;
  } else if (indexA < indexB) {
    comparison = -1;
  }
  return comparison;
};

const getAnswers = givenAnswers =>
  new Promise((resolve, reject) => {
    const checkResults = givenAnswers.map(givenAnswer => {
      const indexOfAnswer = givenAnswer.questionIndex;
      return {
        question: indexOfAnswer,
        questionText: answers[indexOfAnswer].questionText,
        answerGiven: givenAnswer.answer,
        result:
          givenAnswer.answer === answers[indexOfAnswer].answer
            ? "correct"
            : "incorrect"
      };
    });

    const results = checkResults.sort(sortAnswers);
    resolve(results);
  });

export default getAnswers;
