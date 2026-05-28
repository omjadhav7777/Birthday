
import { useState, useRef } from "react";
import Intro from "./components/Intro";
import LuxuryLetter from "./components/LuxuryLetter";
import CakeCelebration from "./components/CakeCelebration";
import LuxuryGift from "./components/LuxuryGift";
// import Memories from "./components/Memories";
import FinalScreen from "./components/FinalScreen";
import RomanticCanvas from "./components/RomanticCanvas";
import SpecialCards from "./components/SpecialCards";
import "./index.css";

export default function App() {

  const [screen, setScreen] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true);
  const audioRef = useRef(null);

  const screens = [
    <Intro next={() => setScreen(1)} />,
    <LuxuryLetter next={() => setScreen(2)} />,
    <CakeCelebration next={() => setScreen(3)} />,
    <LuxuryGift next={() => setScreen(4)} />,
    <SpecialCards next={() => setScreen(5)} audioRef={audioRef} />,
    
    <FinalScreen />
  ];

  const startMusic = () => {

    console.log("Button clicked");

    // REMOVE OVERLAY IMMEDIATELY
    setShowOverlay(false);

    // PLAY MUSIC
    if (audioRef.current) {

      audioRef.current.volume = 0.35;

      audioRef.current.play().catch(() => {
        console.log("Autoplay blocked");
      });
    }
  };


  return (
    <div className="app">
       <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="/Birthday.mp3" type="audio/mp3" />
      </audio>

      <RomanticCanvas />
      
      {showOverlay && (
        <div className="music-overlay">
          <button
            className="music-btn"
            // onClick={() => setShowOverlay(false)}
            onClick={startMusic}
          >
            ❤️ Open Your Birthday Surprise
          </button>
        </div>
      )}

      <div className="overlay-bg"></div>

       

      <div className="nav-buttons">

        {screen > 0 && (
          <button className="nav-btn" onClick={() => setScreen(screen - 1)}>
            ← Back
          </button>
        )}

        <button className="nav-btn" onClick={() => setScreen(0)}>
          🏠 Home
        </button>

      </div>

      {screens[screen]}

    </div>
  );
}
