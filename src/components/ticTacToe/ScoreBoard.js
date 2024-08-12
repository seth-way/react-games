export default function ScoreBoard({ player, wins }) {
  return (
    <div className="scoreboard">
      <h3 className={`player-${player}`}>{player}</h3>
      {wins ? (
        <ol className="wins">
          {Array(wins)
            .fill(0)
            .map((_, i) => (
              <li key={i}></li>
            ))}
        </ol>
      ) : (
        "0"
      )}
    </div>
  );
}
