const answers = require("./answers.json");
import { IAnswer } from "../src/typings";

interface IResult {
  question: number;
  questionText: string;
  answerGiven: string;
  result: string;
}

const sortAnswers = (a: IResult, b: IResult) => {
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

const getAnswers = (givenAnswers: IAnswer[]) =>
  new Promise<IResult[]>((resolve, reject) => {
    // reject(new Error("Answer service not available please try again later"));
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
