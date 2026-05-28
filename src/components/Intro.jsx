
export default function Intro({ next }) {

  return (
    <section className="hero">

      <p className="tagline">
       Yeahhh It's Your Birthday! 🥳🎉
      </p>

      <h1 className="main-title">
        Happy Birthday Beautiful Princess
      </h1>

      <div className="hero-photo-frame">
        <img src="/images/home.jpeg" alt="birthday" />
      </div>

      <p className="description">
        Today is not just another day.
        <br /><br />
        Today celebrates your smile,
        your kindness,
        your beauty,
        and the happiness you bring everywhere ❤️
      </p>

      <button className="primary-btn" onClick={next}>
        Open Your Birthday Letter 💌
      </button>

    </section>
  );
}
