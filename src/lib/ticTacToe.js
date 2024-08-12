export default function checkBoard(board) {
  for (const i of [0, 1, 2]) {
    if (checkRow(i, board)) return checkRow(i, board);
    if (checkColumn(i, board)) return checkColumn(i, board);
  }

  return checkDiagonals(board);
}

export function checkRow(i, board) {
  const startSquare = i * 3;
  const indices = [0, 1, 2].map((i) => startSquare + i);
  const winner = checkForWinner(indices, board);
  return winner ? indices : false;
}

export function checkColumn(i, board) {
  const startSquare = i;
  const indices = [0, 1, 2].map((i) => 3 * i + startSquare);
  const winner = checkForWinner(indices, board);
  return winner ? indices : false;
}

export function checkDiagonals(board) {
  const diag1 = [0, 4, 8];
  if (checkForWinner(diag1, board)) return diag1;

  const diag2 = [2, 4, 6];
  if (checkForWinner(diag2, board)) return diag2;

  return false;
}

export function checkForWinner(indices, board) {
  const vals = indices.map((i) => board[i]);
  const winner = Math.abs(addVals(...vals)) === 3;
  return winner;
}

export function addVals(...vals) {
  const safeNum = (type) => Number(type) || 0;
  return vals.reduce((a, b) => safeNum(a) + safeNum(b) || 0, 0);
}
