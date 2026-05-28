
export default function CakeCelebration({ next }) {

  return (
    <section className="hero">

      <div className="cake-emoji">
        🎂
      </div>

      <h1 className="section-title">
        Today Is Your Day Bubu ✨
      </h1>

      <p className="description">
        May your life always stay as sweet as your smile ❤️
      </p>

      <button className="primary-btn" onClick={next}>
        Open Your Luxury Gift 🎁
      </button>

    </section>
  );
}
