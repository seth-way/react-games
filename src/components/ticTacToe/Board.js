import { useState, useEffect } from "react";
import Square from "./Square";

export default function Board({
  squares,
  onPlay,
  winning3,
  isComplete,
  playersTurn,
}) {
  return (
    <div className={"board" + (isComplete ? " complete" : "")}>
      {[0, 1, 2].map((row) => (
        <div className="board-row" key={`row-${row}`}>
          {[0, 1, 2].map((col) => {
            const idx = row * 3 + col;
            return (
              <Square
                key={`square-${idx}`}
                value={squares[idx]}
                idx={idx}
                winning3={winning3}
                onPlay={onPlay}
                playersTurn={playersTurn}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
