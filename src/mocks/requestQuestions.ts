const questions = require("./questions.json");
import { IQuestion } from "../typings";

const requestQuestions = () =>
  new Promise<IQuestion[]>((resolve, reject) => {
    // reject(new Error("Question service not available please try again later"));
    resolve(questions);
  });

export default requestQuestions;
