import questions from "./questions";

const requestQuestions = () =>
  new Promise((resolve, reject) => {
    // reject(new Error("Question service not available please try again later"));
    resolve(questions);
  });

export default requestQuestions;
