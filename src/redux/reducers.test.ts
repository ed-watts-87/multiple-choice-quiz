import { questionsReducer, answerReducer } from "./reducers";
const questions = require("../mocks/questions.json");

const finalQuestionState = questions;

const answerAddState = [
  {
    answer: "Soup",
    questionIndex: 0
  }
];

const answerUpdateState = [
  {
    answer: "Potato",
    questionIndex: 0
  }
];

test("expect final question state to be list of questions", () => {
  const action = {
    type: "RETRIEVE_QUESTIONS",
    payload: questions
  };
  expect(questionsReducer([], action)).toEqual(finalQuestionState);
});

test("expect final answer state to have 1 answer", () => {
  const answer = {
    questionIndex: 0,
    answer: "Soup"
  };
  const action = {
    type: "ANSWER_QUESTION",
    answer: answer
  };
  expect(answerReducer([], action)).toEqual(answerAddState);
});

test("expect final answer state to have updated answer", () => {
  const answer = {
    questionIndex: 0,
    answer: "Potato"
  };
  const action = {
    type: "ANSWER_QUESTION",
    answer: answer
  };
  expect(answerReducer(answerAddState, action)).toEqual(answerUpdateState);
});
