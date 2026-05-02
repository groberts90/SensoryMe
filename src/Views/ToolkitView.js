export default function ToolkitView({ toolkit }) {
  return (
    <div className="view active">
      <div className="toolkit-header">
        <div className="eyebrow">My personal collection</div>

        <h2>
          My Sensory
          <br />
          <em>Toolkit</em>
        </h2>

        <p>Strategies you've selected across your senses.</p>
      </div>

      <div>
        {toolkit.length === 0 ? (
          <p style={{ padding: "20px" }}>No strategies yet.</p>
        ) : (
          toolkit.map((item) => <div key={item.id}>{item.name}</div>)
        )}
      </div>
    </div>
  );
}
