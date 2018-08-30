import answers from "./answers";

const getAnswers = givenAnswers =>
  new Promise((resolve, reject) => {
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
    const checkResults = givenAnswers.map((givenAnswer, idx) => {
      const indexOfAnswer = givenAnswer.questionIndex;
      if (givenAnswer.answer === answers[indexOfAnswer].answer) {
        return {
          question: indexOfAnswer,
          result: correct
        };
      } else {
        return {
          question: indexOfAnswer,
          result: incorrect
        };
      }
    });

    const results = checkResults.sort(sortAnswers);
    resolve(results);
  });

export default getAnswers;
