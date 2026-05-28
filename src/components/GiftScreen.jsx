import { motion } from "framer-motion";

export default function GiftScreen({ next }) {

  return (
    <section className="hero">

      <motion.div
        className="gift-box"
        initial={{ scale: 0.5, rotate: -10, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        🎁
      </motion.div>

      <h1 className="section-title">
        A Special Surprise For You ❤️
      </h1>

      <p className="description">
        My biggest gift isn't wrapped in paper.
        <br /><br />
        It's my love,
        my loyalty,
        my time,
        and my forever with you ❤️
      </p>

      <button className="primary-btn" onClick={next}>
        See Our Memories ✨
      </button>

    </section>
  );
}