import requestQuestions from "../../mocks/requestQuestions";
import getAnswers from "../../mocks/getAnswers";
import { IQuestion, IAnswer } from "../typings";

//ACTIONS
export const RETRIEVE_QUESTIONS = "RETRIEVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const GET_RESULTS = "GET_RESULTS";
export const RESET_APP = "RESET_APP";
export const ERROR = "ERROR";

export function resetApplication() {
  return {
    type: "RESET_APP"
  };
}

export function retrieveQuestions() {
  return function(dispatch) {
    return requestQuestions()
      .then((data: IQuestion[]) => {
        dispatch({
          type: "RETRIEVE_QUESTIONS",
          payload: data
        });
      })
      .catch(err => {
        dispatch({
          type: "ERROR",
          payload: { error: err.message }
        });
      });
  };
}

export function answerQuestion(answer: IAnswer) {
  return {
    type: "ANSWER_QUESTION",
    answer
  };
}

export function getResults(answers: IAnswer[]) {
  return function(dispatch) {
    return getAnswers(answers)
      .then(results => {
        dispatch({
          type: "GET_RESULTS",
          payload: results
        });
      })
      .catch(err => {
        dispatch({
          type: "ERROR",
          payload: { error: err.message }
        });
      });
  };
}
