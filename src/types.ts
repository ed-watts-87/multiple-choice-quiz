export interface IError {
  error: string;
}

export interface IOptions {
  optionText: string;
}

export interface IQuestion {
  options: IOptions[];
  questionText: string;
}

export interface IAnswer {
  answer: string;
  questionIndex: number;
}

export interface IResult {
  answerGiven: string;
  question: number;
  questionText: string;
  result: string;
}

export interface IHandleOptionChange {
  (option: string);
}
