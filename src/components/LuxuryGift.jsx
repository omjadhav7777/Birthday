
import { useState } from "react";

export default function LuxuryGift({ next }) {

  const [opened, setOpened] = useState(false);

  return (
    <section className="hero">

      {!opened ? (

        <>
          <div
            className="gift-box"
            onClick={() => setOpened(true)}
          >
            🎁
          </div>

          <p className="tap-text">
            Tap Your Gift ❤️
          </p>
        </>

      ) : (

        <div className="gift-celebration">

          <div className="blast-items">
            🌸 🍫 ❤️ 🌹 💖
          </div>

          <h1 className="section-title">
            You Deserve The Whole World ❤️
          </h1>

          <p className="description">
            Flowers for your beauty 🌹💐🌹
            <br />
            Chocolates for your sweetness 🍫🍫
            <br />
            And endless love for your heart ❤️❤️❤️❤️❤️❤️
          </p>

          <button className="primary-btn" onClick={next}>
            See Your Beautiful Moments 📸
          </button>

        </div>

      )}

    </section>
  );
}
