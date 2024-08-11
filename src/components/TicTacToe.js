import { useState } from "react";
import Board from "./ticTacToe/Board";
import ScoreBoard from "./ticTacToe/ScoreBoard";
import checkBoard from "../lib/ticTacToe";

export default function TicTacToe() {
  const [history, setHistory] = useState([Array(9).fill(0)]);
  const [winning3, setWinners] = useState([]);
  const [winner, declareWinner] = useState(null);
  const [playerXWins, setXWins] = useState(0);
  const [playerYWins, setYWins] = useState(0);

  const currentSquares = history[history.length - 1];
  const playersTurn = history.length % 2 ? "X" : "O";
  const isDraw = history.length > 9;

  function createStatusMessage() {
    if (winner)
      return (
        <>
          Player · <span className={`player-${winner}`}>{winner}</span> · Wins!
        </>
      );
    if (isDraw) return "It's a Draw!";
    return (
      <>
        Player · <span className={`player-${playersTurn}`}>{playersTurn}</span>
      </>
    );
  }

  function handlePlay(i) {
    if (currentSquares[i]) return;
    const nextSquares = [...currentSquares];
    nextSquares[i] = history.length % 2 ? 1 : -1;
    const winningSquares = checkBoard(nextSquares);
    if (winningSquares) handleWinner(winningSquares, nextSquares);
    setHistory([...history, nextSquares]);
  }

  function handleWinner(indices, board) {
    const winningPlayer = board[indices[0]] > 0 ? "X" : "O";
    setWinners(indices);
    declareWinner(winningPlayer);
    if (winningPlayer === "X") setXWins(playerXWins + 1);
    else setYWins(playerYWins + 1);
  }

  function clearBoard() {
    setHistory([Array(9).fill(0)]);
  }

  function newGame() {
    clearBoard();
    setWinners([]);
    declareWinner(null);
  }

  return (
    <div id="tic-tac-toe-game">
      <h2>{createStatusMessage()}</h2>

      <Board
        squares={currentSquares}
        onPlay={handlePlay}
        winning3={winning3}
        isComplete={winner || isDraw}
        playersTurn={playersTurn}
      />
      <div className="game-info">
        <ScoreBoard player="X" wins={playerXWins} />
        <ScoreBoard player="O" wins={playerYWins} />
      </div>
      <div className="buttons">
        <button>clear board</button>
        <button>new game</button>
      </div>
    </div>
  );
}
