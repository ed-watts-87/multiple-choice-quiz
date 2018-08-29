import questions from "./questions";

const requestQuestions = () =>
  new Promise((resolve, reject) => {
    resolve(questions);
  });

export default requestQuestions;
