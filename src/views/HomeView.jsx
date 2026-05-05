import SenseCard from "../Components/SenseCard";

export default function HomeView({ senses }) {
  return (
    <div className="view active">
      <div className="home-hero">
        <div className="home-eyebrow">Welcome to SensoryMe</div>

        <h1>
          Your senses,
          <br />
          <em>your strategies.</em>
        </h1>

        <p>
          Explore each sense at your own pace. Answer a few questions, then
          hand-pick the strategies that feel right for you. Your toolkit is
          yours to build — one sense at a time.
        </p>

        <div className="rainbow-bar"></div>
      </div>

      <div className="senses-grid">
        {senses.map((sense, index) => (
          <SenseCard sense={sense} index={index} done={false} onClick />
          // <div key={sense.id} className="sense-card">
          //   {sense.label}
          // </div>
        ))}
      </div>
    </div>
  );
}
