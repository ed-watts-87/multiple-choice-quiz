export interface IError {
  error: string;
}

interface IOptions {
  optionText: string;
}

export interface IQuestions {
  options: IOptions[];
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
