import { useEffect, useRef } from "react";
import bgCircuit from "../assets/bg-circuit.png"; // <-- FIXED PATH

export default function CircuitBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = bgCircuit; // <-- FIX HERE

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    let time = 0;

    img.onload = () => {
      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // motherboard background
        ctx.globalAlpha = 0.25;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // CPU pulse
        const pulse = Math.sin(time / 20) * 20 + 40;
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;

        ctx.globalAlpha = 0.20;
        ctx.beginPath();
        ctx.arc(cx, cy, pulse, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,180,255,0.45)";
        ctx.filter = "blur(65px)";
        ctx.fill();
        ctx.filter = "none";

        // line glow animation
        ctx.globalAlpha = 0.25;
        ctx.globalCompositeOperation = "lighter";
        ctx.filter = "blur(2px)";

        const offset = (time % canvas.width) * 1.5;

        const gradient = ctx.createLinearGradient(offset, 0, offset + 200, 0);
        gradient.addColorStop(0, "rgba(0,255,255,0)");
        gradient.addColorStop(0.5, "rgba(0,255,255,0.5)");
        gradient.addColorStop(1, "rgba(0,255,255,0)");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.filter = "none";
        ctx.globalCompositeOperation = "source-over";

        time += 1.5;
        requestAnimationFrame(animate);
      }

      animate();
    };

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: -30,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}
