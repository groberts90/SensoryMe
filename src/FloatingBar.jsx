import { useState } from "react";

export default function FloatingBar({ count, onViewToolkit }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className={`floating-bar ${count ? "visible" : ""}`}>
      <div className="fb-left">
        <div className="fb-dots">
          {Array.from({ length: Math.min(count, 5) }).map((_, i) => (
            <div key={i} className="fb-dot lit"></div>
          ))}
        </div>

        <div className="fb-count">{count} strategies selected</div>

        <div className="fb-label">Tap any strategy to add or remove it</div>
      </div>

      <button className="fb-btn" onClick={onViewToolkit}>
        View my toolkit →
      </button>

      <button className="fb-dismiss" onClick={() => setVisible(false)}>
        ×
      </button>
    </div>
  );
}
