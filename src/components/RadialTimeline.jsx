import React, { useEffect, useRef } from "react";

export default function RadialTimeline() {
  const containerRef = useRef(null);
  const milestones = [
    {
      year: "2023",
      title: "Started IT & AI Focus",
      desc: "Specialized in backend systems, AI models, and cloud technology.",
    },
    {
      year: "2024",
      title: "SGUB Admissions System",
      desc: "Developed scalable workflows for university admissions.",
    },
    {
      year: "2025",
      title: "PGME Platform & UNISHELF",
      desc: "Delivered full-stack systems, automation, and CI/CD pipelines.",
    },
    {
      year: "2026",
      title: "AI Projects & Cloud Engineering",
      desc: "Building trading models, imaging tools, and cloud architectures.",
    },
  ];

  /* --- SCROLL TRIGGER ANIMATION --- */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("tl-visible");
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-20 sm:py-28 flex flex-col items-center tl-hidden"
    >
      <h2 className="text-xl sm:text-2xl font-semibold text-white mb-14 text-center">
        Journey & Growth
      </h2>
      <div className="relative flex items-center justify-center radial-container tl-scale">
        {/* OUTER RING */}
        <div
          className="
            radial-ring absolute rounded-full border border-cyan-400/40
            shadow-[0_0_25px_rgba(0,255,255,0.25)]
            animate-[pulseGlow_6s_ease-in-out_infinite]
          "
        />
        {/* ORBIT DOT */}
        <div
          className="
            orbit-dot absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-400 rounded-full
            shadow-[0_0_15px_rgba(0,255,255,0.8)]
            w-3 h-3 sm:w-4 sm:h-4
          "
        />
        {/* MILESTONES */}
        {milestones.map((m, i) => {
          const rad = (i / milestones.length) * 2 * Math.PI;
          const deg = (rad * 180) / Math.PI;
          return (
            <div key={i}>
              {/* CONNECTOR */}
              <div
                className="connector absolute origin-left"
                style={{
                  "--angle": `${deg}deg`,
                }}
              />
              {/* MILESTONE ITEM */}
              <div
                className="
                  milestone absolute left-1/2 top-1/2 text-center opacity-0 tl-item
                  w-24 sm:w-32
                "
                style={{ 
                  "--pos-transform": `translate(-50%, -50%) rotate(${deg}deg) translateX(var(--r)) rotate(${-deg}deg)` 
                }}
              >
                <div
                  className="
                    w-2 h-2 sm:w-3 sm:h-3 mx-auto mb-1 rounded-full bg-cyan-400
                    shadow-[0_0_10px_rgba(0,255,255,0.8)]
                    animate-[dotPulse_2.5s_ease-in-out_infinite]
                  "
                />
                <div className="text-cyan-300 text-xs sm:text-sm font-semibold">
                  {m.year}
                </div>
                <div className="text-sky-200 text-[10px] sm:text-sm font-semibold mt-1">
                  {m.title}
                </div>
                <p className="text-slate-300 text-[9px] sm:text-xs mt-1 leading-snug">
                  {m.desc}
                </p>
              </div>
            </div>
          );
        })}
        {/* INNER GLOW */}
        <div className="absolute inset-[calc(var(--r)*0.4)] rounded-full bg-cyan-400/5 blur-2xl pointer-events-none" />
      </div>
      <style>{`
      /* =============================
            RESPONSIVE RADIUS
      ============================== */
      .radial-container {
        --r: 100px;
        --mw: 6rem;
        width: calc(var(--r) * 2 + var(--mw));
        height: calc(var(--r) * 2 + var(--mw));
      }
      .radial-ring {
        width: calc(var(--r) * 2);
        height: calc(var(--r) * 2);
      }
      @media (min-width: 640px) {
        .radial-container { 
          --r: 135px; 
          --mw: 8rem;
        }
      }
      @media (min-width: 768px) {
        .radial-container { --r: 170px; }
      }
      /* =============================
            CONNECTOR LINES
      ============================== */
      .connector {
        width: calc(var(--r) * 0.9);
        height: 1px;
        background: linear-gradient(
          to right,
          rgba(0,255,255,0.0),
          rgba(0,255,255,0.6)
        );
        position: absolute;
        left: 50%;
        top: 50%;
        transform: rotate(var(--angle));
        box-shadow: 0 0 12px rgba(0,255,255,0.3);
      }
      /* =============================
            MILESTONE POSITION
      ============================== */
      .milestone {
        transform: var(--pos-transform);
      }
      /* =============================
            ORBIT ANIMATION
      ============================== */
      .orbit-dot {
        animation: orbit 10s linear infinite;
        transform-origin: center;
      }
      @keyframes orbit {
        0% { transform: rotate(0deg) translateX(var(--r)) rotate(0deg); }
        100% { transform: rotate(360deg) translateX(var(--r)) rotate(-360deg); }
      }
     /* =============================
            TIMELINE REVEAL
      ============================== */
      .tl-hidden { opacity: 0; }
      .tl-visible { opacity: 1; transition: opacity 1s ease; }
      .tl-scale {
        transform: scale(0.7);
        transition: transform 1s ease;
      }
      .tl-visible .tl-scale {
        transform: scale(1);
      }
      /* Milestone fade-in stagger */
      .tl-visible .tl-item {
        animation: riseFade 1s ease forwards;
      }
      .tl-visible > div:nth-child(3) .tl-item { animation-delay: 0.2s; }
      .tl-visible > div:nth-child(4) .tl-item { animation-delay: 0.4s; }
      .tl-visible > div:nth-child(5) .tl-item { animation-delay: 0.6s; }
      .tl-visible > div:nth-child(6) .tl-item { animation-delay: 0.8s; }
      @keyframes riseFade {
        0% { 
          opacity: 0; 
          transform: var(--pos-transform) scale(0.8); 
        }
        100% { 
          opacity: 1; 
          transform: var(--pos-transform); 
        }
      }
      /* Extra glow */
      @keyframes dotPulse {
        0%, 100% { transform: scale(1); opacity: 0.8; }
        50% { transform: scale(1.4); opacity: 1; }
      }
      @keyframes pulseGlow {
        0%, 100% { box-shadow: 0 0 20px rgba(0,255,255,0.25); }
        50% { box-shadow: 0 0 40px rgba(0,255,255,0.45); }
      }
      `}</style>
    </section>
  );
}