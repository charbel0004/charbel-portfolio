import React, { useEffect, useRef, useState } from "react";

export default function RadialTimeline() {
  const timelineRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const milestones = [
    {
      year: "2023",
      title: "Started IT & AI Focus",
      desc: "Specialized in backend systems, AI models, and cloud engineering.",
    },
    {
      year: "2024",
      title: "SGUB Admissions System",
      desc: "Developed scalable workflows for university admissions.",
    },
    {
      year: "2025",
      title: "PGME Platform & UNISHELF",
      desc: "Delivered full-stack systems with automation and CI/CD.",
    },
    {
      year: "2026",
      title: "AI & Cloud Engineering",
      desc: "Built AI trading models and cloud-native architectures.",
    },
  ];

  // Scroll animation trigger
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (timelineRef.current) obs.observe(timelineRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={timelineRef}
      className={`flex flex-col items-center justify-center transition-all duration-700
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      pt-4 pb-14`}
    >
      <h2 className="text-xl font-semibold text-white mb-12 text-center drop-shadow">
        Journey & Growth
      </h2>

      <div className="relative flex items-center justify-center">

        {/* RESPONSIVE OUTER RING */}
        <div
          className="relative rounded-full border border-cyan-400/40 shadow-[0_0_45px_rgba(0,255,255,0.25)]
          animate-[pulseGlow_6s_ease-in-out_infinite]"
          style={{
            width: "min(80vw, 380px)",
            height: "min(80vw, 380px)",
          }}
        />

        {/* ORBITING LIGHT */}
        <div
          className="absolute w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_18px_rgba(0,255,255,0.7)]
          animate-[orbit_10s_linear_infinite]"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* RADIAL ITEMS */}
        <div className="absolute inset-0 flex items-center justify-center">
          {milestones.map((m, i) => {
            const angle = (i / milestones.length) * (2 * Math.PI);
            const radius = 150; // dynamic radius

            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={i}
                className="absolute w-40 text-center transform -translate-x-1/2 -translate-y-1/2
                transition duration-300 hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(0,255,255,0.6)]"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
              >
                {/* Glowing Connector Line */}
                <div
                  className="absolute w-[2px] bg-gradient-to-b from-cyan-300/50 to-transparent"
                  style={{
                    height: `${radius - 20}px`,
                    transformOrigin: "top",
                    transform: `rotate(${(angle * 180) / Math.PI + 90}deg)`,
                    opacity: 0.6,
                  }}
                />

                {/* Dot */}
                <div
                  className="w-3 h-3 mx-auto mb-2 rounded-full bg-cyan-400 
                  shadow-[0_0_20px_rgba(0,255,255,0.8)]
                  animate-[dotPulse_2.5s_ease-in-out_infinite]"
                />

                {/* Year */}
                <div className="text-cyan-300 text-sm font-semibold drop-shadow">
                  {m.year}
                </div>

                {/* Title */}
                <div className="text-sky-200 text-sm font-semibold mt-1 drop-shadow">
                  {m.title}
                </div>

                {/* Description */}
                <p className="text-slate-300 text-xs mt-1 leading-snug">
                  {m.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* SOFT INNER GLOW */}
        <div className="absolute inset-12 rounded-full bg-cyan-400/5 blur-3xl" />
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(150px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(150px) rotate(-360deg); }
        }

        @keyframes dotPulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.4); opacity: 1; }
        }

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 30px rgba(0,255,255,0.3); }
          50% { box-shadow: 0 0 60px rgba(0,255,255,0.6); }
        }
      `}</style>
    </section>
  );
}
