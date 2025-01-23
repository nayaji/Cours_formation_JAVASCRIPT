const { pickBankScore, pickPlayerCard, stateOfTheGame, endGameMessage } = require('./07-01-control-flow-conditional-statements-if-else.js'); // Assuming the functions are exported from black_jack.js

describe("pickBankScore", () => {
  it("should return a number", () => {
    const score = pickBankScore();
    expect(typeof score).toBe("number");
  });

  it("should give a number between 16 and 21", () => {
    const scores = [];
    for (let i = 0; i < 100; i++) {
      const score = pickBankScore();
      if (score >= 16 && score <= 21) {
        scores.push(score);
      }
    }

    expect(scores.length).toBe(100);
  });
});

describe("pickPlayerCard", () => {
  it("should return a number", () => {
    const card = pickPlayerCard();
    expect(typeof card).toBe("number");
  });

  it("should draw a number between 1 and 11", () => {
    const cards = [];
    for (let i = 0; i < 100; i++) {
      const card = pickPlayerCard();
      if (card >= 1 && card <= 11) {
        cards.push(card);
      }
    }

    expect(cards.length).toBe(100);
  });
});


describe("stateOfTheGame", () => {
  it("should return a String", () => {
    expect(typeof stateOfTheGame(1, 2)).toBe("string");
  });

  it("should return an interpolated String with player and bank scores", () => {
    const gameState = stateOfTheGame(1, 2);
    expect(gameState).toMatch(/score is:? 1/i);
    expect(gameState).toMatch(/bank('s)?( score)? is:? 2/i);
  });
});

describe("endGameMessage", () => {
  it("should return a String", () => {
    expect(typeof endGameMessage(2, 16)).toBe("string");
  });

  it("should return a message telling you that you lost if your score goes over 21", () => {
    expect(endGameMessage(22, 16)).toMatch(/los[et]/i);
  });

  it('should return "Black Jack" when you score exactly 21', () => {
    expect(endGameMessage(21, 16)).toMatch(/black[ -]?jack/i);
  });

  it('should return "Push" if it\'s a draw', () => {
    expect(endGameMessage(18, 18)).toMatch(/push/i);
  });

  it('should return a message telling you that you won if your score is higher than the bank\'s', () => {
    expect(endGameMessage(20, 18)).toMatch(/w[io]n/i);
  });

  it('should return a message telling you that you lost if your score is lower than the bank\'s', () => {
    expect(endGameMessage(17, 20)).toMatch(/los[et]/i);
  });
});
