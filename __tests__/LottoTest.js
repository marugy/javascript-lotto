const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto");
const App = require("../src/App");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  //아래에 추가 테스트 작성 가능
  test("구입 금액이 숫자가 아니면 예외가 발생한다", ()=>{
    mockQuestions(["notnumber"]);
    expect(() => {
      const app = new App();
      app.play();
  }).toThrow("[ERROR]");
  });

});
