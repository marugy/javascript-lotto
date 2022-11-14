const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto");
const Ask = require("../src/Ask");

class App {
  play() {

    const ask = new Ask();

    ask.money();
    ask.buyLotto();
    ask.showLottoList();
    const lotto = new Lotto(ask.winningNumber());
    ask.bonus();

    MissionUtils.Console.close();
  }
}

module.exports = App;
