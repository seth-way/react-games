export default function checkBoard(board) {
  for (const i of [0, 1, 2]) {
    if (checkRow(i, board)) return checkRow(i, board);
    if (checkColumn(i, board)) return checkColumn(i, board);
  }

  return checkDiagonals(board);
}

function checkRow(i, board) {
  const startSquare = i * 3;
  const indices = [0, 1, 2].map((i) => startSquare + i);
  const winner = checkForWinner(indices, board);
  return winner ? indices : false;
}

function checkColumn(i, board) {
  const startSquare = i;
  const indices = [0, 1, 2].map((i) => 3 * i + startSquare);
  const winner = checkForWinner(indices, board);
  return winner ? indices : false;
}

function checkDiagonals(board) {
  const diag1 = [0, 4, 8];
  if (checkForWinner(diag1, board)) return diag1;

  const diag2 = [2, 4, 6];
  if (checkForWinner(diag2, board)) return diag2;

  return false;
}

function checkForWinner(indices, board) {
  const vals = indices.map((i) => board[i]);
  const winner = Math.abs(addSquares(...vals)) === 3;
  return winner;
}

function addSquares(...vals) {
  return vals.reduce((a, b) => a + b, 0);
}
