export default function SenseCard({ sense, index, count, done, onClick }) {
  const pct = Math.min(count * 8, 100);

  return (
    <div
      className="sense-card"
      style={{ "--cc": sense.color }}
      onClick={onClick}
    >
      {/* dynamic pseudo-accent workaround */}
      <style>
        {`
            .sense-card:nth-child(${index + 1})::after {
              background: ${sense.color};
            }
          `}
      </style>

      <div className="card-icon-wrap" style={{ background: sense.bg }}>
        {sense.icon}
      </div>

      <div className="card-sense-name">{sense.label}</div>
      <div className="card-sense-desc">{sense.desc}</div>

      <div className="card-foot">
        <div className="card-prog-bar">
          <div
            className="card-prog-fill"
            style={{
              background: sense.color,
              width: `${pct}%`,
            }}
          />
        </div>

        <span
          className={`card-status-chip ${done ? "chip-done" : "chip-empty"}`}
        >
          {done ? `✓ ${count} added` : "Start"}
        </span>
      </div>
    </div>
  );
}
