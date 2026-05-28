
import { useEffect, useRef } from "react";

export default function RomanticCanvas() {

  const canvasRef = useRef(null);

  useEffect(() => {

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const hearts = [];

    for (let i = 0; i < 25; i++) {

      hearts.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 18 + 10,
        speed: Math.random() * 0.8 + 0.2
      });
    }

    function animate() {

      ctx.clearRect(0, 0, width, height);

      hearts.forEach((heart) => {

        ctx.globalAlpha = 0.15;
        ctx.font = `${heart.size}px serif`;

        ctx.fillText("❤️", heart.x, heart.y);

        heart.y += heart.speed;

        if (heart.y > height) {
          heart.y = -20;
          heart.x = Math.random() * width;
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

  }, []);

  return <canvas ref={canvasRef} className="romantic-canvas" />;
}
