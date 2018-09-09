import {
  RETRIEVE_QUESTIONS,
  ANSWER_QUESTION,
  GET_RESULTS,
  RESET_APP,
  ERROR
} from "./actions";
import { combineReducers } from "redux";
import { IQuestion, IAnswer, IResult, IError } from "../types";

export const questionsReducer = (
  state: ReadonlyArray<IQuestion> = [],
  action
) => {
  switch (action.type) {
    case RETRIEVE_QUESTIONS: {
      return action.payload;
    }
    case RESET_APP: {
      return [];
    }
    default:
      return state;
  }
};

export const answerReducer = (state: ReadonlyArray<IAnswer> = [], action) => {
  switch (action.type) {
    case ANSWER_QUESTION:
      const findAnswerIndex = el =>
        el.questionIndex == action.answer.questionIndex;
      const answerExists = state.findIndex(findAnswerIndex) > -1;
      let answersArray = state.slice();
      if (answerExists) {
        answersArray = answersArray.map(answer => {
          return answer.questionIndex == action.answer.questionIndex
            ? action.answer
            : answer;
        });
      } else {
        answersArray.push(action.answer);
      }

      return answersArray;
    case RESET_APP: {
      return [];
    }
    default:
      return state;
  }
};

export const resultsReducer = (state: ReadonlyArray<IResult> = [], action) => {
  switch (action.type) {
    case GET_RESULTS:
      return action.payload;
    case RESET_APP: {
      return [];
    }
    default:
      return state;
  }
};

export const errorReducer = (state: Readonly<IError> = {}, action) => {
  switch (action.type) {
    case ERROR:
      return action.payload;
    case RESET_APP: {
      return {};
    }
    default:
      return state;
  }
};

const reducer = combineReducers({
  questions: questionsReducer,
  answers: answerReducer,
  results: resultsReducer,
  error: errorReducer
});

export default reducer;
