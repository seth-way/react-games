export default function ScoreBoard({ player, wins }) {
  const winCount = Array(wins).fill(0);
  return (
    <div className="scoreboard">
      <h3 className={`player-${player}`}>{player}</h3>
      <ol className="wins">
        {winCount.map(() => (
          <li></li>
        ))}
      </ol>
    </div>
  );
}
