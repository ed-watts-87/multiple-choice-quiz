import getAnswers from "./getAnswers";

const correctAnswers = [
  { questionIndex: 1, answer: "Colourless" },
  { questionIndex: 0, answer: "Soup" },
  { questionIndex: 2, answer: "Almonds" },
  { questionIndex: 3, answer: "Oats" },
  { questionIndex: 4, answer: "Deep Fried Mars Bar" }
];

const incorrectAnswers = [
  { questionIndex: 1, answer: "Blue" },
  { questionIndex: 0, answer: "Potato" },
  { questionIndex: 2, answer: "Walnuts" },
  { questionIndex: 3, answer: "Vodka" },
  { questionIndex: 4, answer: "Apples" }
];

const threeCorrect = [
  { questionIndex: 1, answer: "Colourless" },
  { questionIndex: 0, answer: "Soup" },
  { questionIndex: 2, answer: "Almonds" },
  { questionIndex: 3, answer: "Vodka" },
  { questionIndex: 4, answer: "Apples" }
];

test("expect all results to return correct", () => {
  getAnswers(correctAnswers).then(results => {
    const numberCorrect = 0;
    results.forEach(result => {
      result.result === "correct" && numberCorrect++;
    });
    expect(numberCorrect).toEqual(5);
  });
});

test("expect all results to return incorrect", () => {
  getAnswers(correctAnswers).then(results => {
    const numberCorrect = 0;
    results.forEach(result => {
      result.result === "correct" && numberCorrect++;
    });
    expect(numberCorrect).toEqual(0);
  });
});

test("expect 3 correct, 2 incorrect", () => {
  getAnswers(correctAnswers).then(results => {
    const numberCorrect = 0;
    const numberIncorrect = 0;
    results.forEach(result => {
      result.result === "correct" ? numberCorrect++ : numberIncorrect++;
    });
    expect(numberCorrect).toEqual(3);
    expect(numberIncorrect).toEqual(2);
  });
});
