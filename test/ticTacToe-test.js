import { expect } from "chai";
import checkBoard, {
  checkRow,
  checkColumn,
  checkDiagonals,
  checkForWinner,
  addVals,
} from "../src/lib/ticTacToe";

describe("Add 3 values", () => {
  it("should add 3 values", () => {
    const result = addVals(1, 0, 1);
    expect(result).to.equal(2);
  });

  it("should add another 3 values", () => {
    const result = addVals(-1, 0, -1);
    expect(result).to.equal(-2);
  });

  it("should not break if given less than 3 vals", () => {
    const result = addVals(-1, 0);
    expect(result).to.equal(-1);
  });

  it("should evaluate non-numbers as 0", () => {
    const result = addVals(-1, "A", NaN);
    expect(result).to.equal(-1);
  });
});

describe("Check for winner", () => {
  const board = [-1, -1, 1, -1, 1, 1, -1, 0, 1];

  it("should take 3 indices, board & return true if is a winning combo", () => {
    const result = checkForWinner([0, 3, 6], board);
    expect(result).to.be.true;
  });

  it("should work an any 3 indices", () => {
    const result = checkForWinner([2, 5, 8], board);
    expect(result).to.be.true;
  });

  it("should return false when combo is not a winner", () => {
    const result = checkForWinner([1, 4, 7], board);
    expect(result).to.be.false;
  });
});

describe("Check diagonals for a winner", () => {
  it("should check board & return indices of winning diagonal combo", () => {
    const board = [1, -1, 1, -1, 1, 1, -1, 0, 1];
    const expected = [0, 4, 8];
    const result = checkDiagonals(board);
    expect(result).to.deep.equal(expected);
  });

  it("should work with either diagonal", () => {
    const board = [1, -1, -1, -1, -1, 1, -1, 0, 1];
    const expected = [2, 4, 6];
    const result = checkDiagonals(board);
    expect(result).to.deep.equal(expected);
  });

  it("should return false if no winning diagonal combos", () => {
    const board = [1, -1, 11, -1, -1, 1, -1, 0, 1];
    const result = checkDiagonals(board);
    expect(result).to.be.false;
  });
});

describe("Check row for a winner", () => {
  it("should check board row & return indices of winning combo", () => {
    const board = [1, 1, 1, -1, 1, 1, -1, 0, 1];
    const expected = [0, 1, 2];
    const result = checkRow(0, board);
    expect(result).to.deep.equal(expected);
  });

  it("should work on any row", () => {
    const board = [1, 1, 1, -1, 0, 1, -1, -1, -1];
    const expected = [6, 7, 8];
    const result = checkRow(2, board);
    expect(result).to.deep.equal(expected);
  });

  it("should only check the input row", () => {
    const board = [1, 1, 1, -1, 0, 1, -1, -1, -1];
    const result = checkRow(1, board);
    expect(result).to.be.false;
  });
});

describe("Check column for a winner", () => {
  it("should check board col & return indices of winning combo", () => {
    const board = [1, -1, 1, 1, -1, 1, 1, 0, 1];
    const expected = [0, 3, 6];
    const result = checkColumn(0, board);
    expect(result).to.deep.equal(expected);
  });

  it("should work on any col", () => {
    const board = [1, 1, -1, -1, 0, -1, -1, -1, -1];
    const expected = [2, 5, 8];
    const result = checkColumn(2, board);
    expect(result).to.deep.equal(expected);
  });

  it("should only check the input col", () => {
    const board = [1, 1, -1, 1, 0, -1, 1, -1, -1];
    const result = checkColumn(1, board);
    expect(result).to.be.false;
  });
});

describe("Check board for a winner", () => {
  it("should check entire board & return indices of winning combo", () => {
    const board = [1, -1, -1, 1, -1, 1, -1, 0, 1];
    const expected = [2, 4, 6];
    const result = checkBoard(board);
    expect(result).to.deep.equal(expected);
  });

  it("should work on any winning board combo", () => {
    const board = [1, -1, 1, 1, -1, 1, 1, 0, 1];
    const expected = [0, 3, 6];
    const result = checkBoard(board);
    expect(result).to.deep.equal(expected);
  });

  it("should return false if board has no winner", () => {
    const board = [-1, 1, -1, 1, -1, 1, 1, 0, 1];
    const result = checkBoard(board);
    expect(result).to.be.false;
  });
});
