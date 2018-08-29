import requestQuestions from "../../mocks/requestQuestions";

//ACTIONS
export const RETRIEVE_QUESTIONS = "RETRIEVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

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
