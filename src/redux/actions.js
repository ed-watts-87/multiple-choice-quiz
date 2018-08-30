import requestQuestions from "../../mocks/requestQuestions";
import getAnswers from "../../mocks/getAnswers";

//ACTIONS
export const RETRIEVE_QUESTIONS = "RETRIEVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const GET_RESULTS = "GET_RESULTS";

export function retrieveQuestions() {
  return function(dispatch) {
    return requestQuestions()
      .then(data => {
        dispatch({
          type: RETRIEVE_QUESTIONS,
          payload: data
        });
      })
      .catch(err => {
        return { err: "service not available" };
      });
  };
}

export function answerQuestion(answer) {
  return {
    type: "ANSWER_QUESTION",
    answer
  };
}

export function getResults(answers) {
  return function(dispatch) {
    return getAnswers(answers)
      .then(results => {
        dispatch({
          type: "GET_RESULTS",
          payload: results
        });
      })
      .catch(err => {
        return { err: "service not available" };
      });
  };
}
