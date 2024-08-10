export default function Square({ value, idx, winning3, onPlay, playersTurn }) {
  const playerCSS = value
    ? ` player-${value > 0 ? "X" : "O"}`
    : ` hover-${playersTurn}`;

  const winnerCSS = winning3.includes(idx) ? " winner" : "";

  return (
    <button
      className={"square" + playerCSS + winnerCSS}
      onClick={() => onPlay(idx)}
    >
      {value ? (value > 0 ? "X" : "O") : playersTurn}
    </button>
  );
}
