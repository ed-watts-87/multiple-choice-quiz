export interface IError {
  error: string;
}

interface IOptions {
  optionText: string;
}

export interface IQuestion {
  options: IOptions[];
}

export interface IAnswers {
  answer: string;
  questionIndex: number;
}

export interface IResults {
  answerGiven: string;
  question: number;
  questionText: string;
  result: string;
}
