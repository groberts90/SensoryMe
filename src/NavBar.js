export function NavBar({
  onOpenSOS,
  onShowHome,
  onShowToolkit,
  senses = [],
  activeView = "home",
  toolkitCount = 0,
}) {
  return (
    <nav className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-mark">
          <div className="logo-blob">🌈</div>
          <div className="logo-text">
            Sensory<span>Me</span>
          </div>
        </div>
        <div className="logo-tag">Build your personal toolkit</div>
      </div>

      <button className="sos-sidebar-btn" onClick={onOpenSOS}>
        <span className="sos-pulse"></span>
        SOS — I'm overwhelmed
      </button>

      <div className="sidebar-nav">
        <div className="nav-section-label">Explore</div>

        <button
          className={`nav-item ${activeView === "home" ? "active" : ""}`}
          onClick={onShowHome}
        >
          <span className="nav-icon" style={{ background: "#f7f2ee" }}>
            🏠
          </span>
          Home
        </button>

        <div className="nav-section-label">Senses</div>
        <div>
          {senses.map((sense) => (
            <button
              key={sense.id}
              className={`nav-item ${activeView === sense.id ? "active" : ""} ${
                sense.hasItems ? "has-items" : ""
              }`}
              onClick={sense.onClick}
            >
              <span
                className="nav-icon"
                style={{ background: sense.color || "#eee" }}
              >
                {sense.icon}
              </span>
              {sense.label}
              <span
                className="nav-badge"
                style={{ background: "var(--sage)" }}
              ></span>
            </button>
          ))}
        </div>

        <div className="nav-section-label">My Toolkit</div>
        <button
          className={`nav-item ${activeView === "toolkit" ? "active" : ""}`}
          onClick={onShowToolkit}
        >
          <span className="nav-icon" style={{ background: "#a8d5b520" }}>
            🗂️
          </span>
          My Strategies
          <span
            className="nav-badge"
            style={{ background: "var(--sage)", opacity: toolkitCount ? 1 : 0 }}
          ></span>
        </button>
      </div>

      <div className="sidebar-footer">
        <button className="toolkit-footer-btn" onClick={onShowToolkit}>
          <span>My toolkit</span>
          <span className="tk-count-pill">{toolkitCount}</span>
        </button>
      </div>
    </nav>
  );
}
