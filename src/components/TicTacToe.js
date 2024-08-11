import { useState } from "react";
import Board from "./ticTacToe/Board";
import ScoreBoard from "./ticTacToe/ScoreBoard";
import checkBoard from "../lib/ticTacToe";

export default function TicTacToe() {
  const [history, setHistory] = useState([Array(9).fill(0)]);
  const [winning3, setWinners] = useState([]);
  const [winner, declareWinner] = useState(null);

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
    if (winningSquares) {
      setWinners(winningSquares);
      const winningPlayer = nextSquares[winningSquares[0]] > 0 ? "X" : "O";
      declareWinner(winningPlayer);
    }
    setHistory([...history, nextSquares]);
  }

  return (
    <div id="tic-tac-toe-game">
      <h2>{createStatusMessage()}</h2>
      <div>
        <ScoreBoard player={"X"} wins={15} />
        <Board
          squares={currentSquares}
          onPlay={handlePlay}
          winning3={winning3}
          isComplete={winner || isDraw}
          playersTurn={playersTurn}
        />
        <ScoreBoard player={"O"} wins={3} />
      </div>
    </div>
  );
}
