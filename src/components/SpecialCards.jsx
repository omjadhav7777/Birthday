
import { motion } from "framer-motion";


const cards = [

    {
        title: "Your Smile 😍",
        text: "Your smile can brighten even my darkest days.",
        image: "/images/smile.jpg"
    },

    {
        title: "Your Cuteness 🥺",
        text: "Everything about you feels adorable and magical.",
        image: "/images/Cuteness.jpeg"
    },

    {
        title: "Your Eyes ✨",
        text: "I could honestly get lost in your eyes forever.",
        image: "/images/eyes.jpeg"
    },

    {
        title: "Your Beauty ❤️",
        text: "You care for people in the purest way possible.",
        image: "/images/beauty.jpeg"
    },

    {
        title: "Your Laugh 😄",
        text: "Your laugh is my favorite sound in this world.",
        image: "/images/Laugh.jpeg"
    },

    {
        title: "Your Presence 💖🫂",
        text: "Life simply feels happier when you're around.",
        image: "/images/presence.jpeg"
    }

];

export default function SpecialCards({ next, audioRef }) {

    return (

        <section className="hero">

            <h1 className="section-title">
                Things That Make You Special ❤️
            </h1>

            {/* VIDEOS */}

            <div className="special-video-grid">

                <video
                    controls
                    className="special-video"
                    preload="metadata"
                    onPlay={() => {

                        console.log("VIDEO PLAYED");

                        if (audioRef?.current) {

                            audioRef.current.pause();
                        }
                    }}

                    onPause={() => {

                        console.log("VIDEO PAUSED");

                        if (audioRef?.current) {

                            audioRef.current.play()
                                .catch(() => { });
                        }
                    }}

                    onEnded={() => {

                        console.log("VIDEO ENDED");

                        if (audioRef?.current) {

                            audioRef.current.play()
                                .catch(() => { });
                        }
                    }}
                >
                    <source src="/videos/V1.mp4" type="video/mp4" />
                </video>

                <video
                    controls
                    className="special-video"
                    preload="metadata"
                    onPlay={() => {

                        console.log("VIDEO PLAYED");

                        if (audioRef?.current) {

                            audioRef.current.pause();
                        }
                    }}

                    onPause={() => {

                        console.log("VIDEO PAUSED");

                        if (audioRef?.current) {

                            audioRef.current.play()
                                .catch(() => { });
                        }
                    }}

                    onEnded={() => {

                        console.log("VIDEO ENDED");

                        if (audioRef?.current) {

                            audioRef.current.play()
                                .catch(() => { });
                        }
                    }}
                >
                    <source src="/videos/V2.mp4" type="video/mp4" />
                </video>

            </div>

            {/* CARDS */}

            <div className="cards-grid">

                {cards.map((card, index) => (

                    <motion.div
                        key={index}
                        className="special-card"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.1
                        }}
                    >

                        <img
                            src={card.image}
                            alt={card.title}
                            className="card-image"
                        />

                        <h2>{card.title}</h2>

                        <p>{card.text}</p>

                    </motion.div>

                ))}

            </div>

            <button
                className="primary-btn"
                onClick={next}
            >
                Final Surprise ❤️
            </button>


        </section>
    );
}