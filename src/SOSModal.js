export default function SOSModal({ open, onClose }) {
  if (!open) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("sos-overlay")) {
      onClose();
    }
  };

  return (
    <div className="sos-overlay open" onClick={handleOverlayClick}>
      <div className="sos-modal">
        <button className="sos-close" onClick={onClose}>
          ×
        </button>

        <div>
          {/* Replace with real SOS content */}
          <p>Take a breath. You’re safe.</p>
        </div>

        <div className="sos-nav">
          <button className="sos-btn-prev">← Back</button>

          <div className="sos-prog-dots"></div>

          <button className="sos-btn-next">Next →</button>
        </div>
      </div>
    </div>
  );
}
