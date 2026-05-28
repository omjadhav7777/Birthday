
import { useState } from "react";

export default function LuxuryLetter({ next }) {

  const [opened, setOpened] = useState(false);

  return (
    <section className="hero">

      {!opened ? (

        <div className="envelope-wrapper">

          <div
            className="envelope"
            onClick={() => setOpened(true)}
          >

            <div className="envelope-flap"></div>

            <div className="letter-preview">
              💌
            </div>

          </div>

          <p className="tap-text">
            Tap The Letter To Open It ❤️
          </p>

        </div>

      ) : (

        <div className="luxury-letter">

          <h2>To The Most Precious Girl ❤️</h2>

          <p>
            There are some people in life who become so precious
            that imagining life without them feels impossible.
            <br /><br />

            And for me…
            that person is you ❤️
            <br /><br />

            You are not just someone I love.
            You are my peace,
            my happiness,
            my comfort,
            and honestly…
            my whole world.
            <br /><br />

            You are jolly,
            cute,
            beautiful,
            mature,
            hardworking,
            smart,
            caring,
            and the kind of person people are lucky to have.
            <br /><br />

            The way you smile,
            the way you look at me with your beautiful eyes…
            damn,
            my heart melts every single time ❤️
            <br /><br />

            Sometimes you think you are not that pretty
            or not that special.
            But if only you could see yourself from my perspective,
            you would realize
            how truly beautiful and precious you are.
            <br /><br />

            One message from you can fix my mood.
            One smile from you can make my entire day better.
            Your presence alone makes my life feel happier.
            <br /><br />

            No matter what happens,
            no matter how difficult life gets,
            I will always stay beside you.
            Even if the whole world stands against you,
            I never will.
            <br /><br />

            Because loving you is one of the most beautiful things
            that has ever happened to me ❤️
            <br /><br />

            Happiest Birthday
            to the most genuine,
            lovable,
            hardworking,
            smart,
            caring,
            beautiful,
            and sweetest person ever.
            <br /><br />

            I just want to see you smiling forever ✨❤️
            <br></br>
            <br></br>

            Forever Yours ❤️😘,
            <br></br>
            Om 
          </p>
          <button className="primary-btn" onClick={next}>
            Continue To Your Celebration 🎂
          </button>

        </div>

      )}

    </section>
  );
}
