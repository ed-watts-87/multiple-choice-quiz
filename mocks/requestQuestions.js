import questions from "./questions";

const requestQuestions = () =>
  new Promise((resolve, reject) => {
    resolve(questions);
    // reject(new Error("Question service not available please try again later"));
  });

export default requestQuestions;
