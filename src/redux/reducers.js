import { RETRIEVE_QUESTIONS, ANSWER_QUESTION } from "./actions";
import { combineReducers } from "redux";

function questionsReducer(state = {}, action) {
  switch (action.type) {
    case RETRIEVE_QUESTIONS: {
      return action.payload;
    }
    default:
      return state;
  }
}

const reducer = combineReducers({
  questions: questionsReducer
});

export default reducer;
