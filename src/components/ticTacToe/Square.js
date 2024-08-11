import { useRef } from "react";

const factor = 0.04;

export default function Square({ value, idx, winning3, onPlay, playersTurn }) {
  const ref = useRef(null);
  const winnerCSS = winning3.includes(idx) ? " winner" : "";

  function translateWinningSquare({ current }) {
    const board = document.querySelector(".board");
    const boardCenterX = board.offsetLeft + board.offsetWidth / 2;
    const boardCenterY = board.offsetTop + board.offsetHeight / 2;

    const squareCenterX = current.offsetLeft + current.offsetWidth / 2;
    const squareCenterY = current.offsetTop + current.offsetHeight / 2;

    const deltaX = squareCenterX - boardCenterX;
    const deltaY = squareCenterY - boardCenterY;

    current.style.transform = `translate(${deltaX * factor}px, ${deltaY * factor}px)`;
  }

  const playerCSS = value
    ? ` player-${value > 0 ? "X" : "O"}`
    : ` hover-${playersTurn}`;

  if (winnerCSS) translateWinningSquare(ref);

  return (
    <button
      className={"square" + playerCSS + winnerCSS}
      onClick={() => onPlay(idx)}
      ref={ref}
    >
      {value ? (value > 0 ? "X" : "O") : playersTurn}
    </button>
  );
}
