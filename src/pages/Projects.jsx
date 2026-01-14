import { useEffect, useState } from "react";
import projects from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  // central close handler (plays animation, then unmounts)
  function requestClose() {
    if (!selected || isClosing) return;
    setIsClosing(true);
    window.setTimeout(() => {
      setSelected(null);
      setIsClosing(false);
    }, 260); // must match animation duration
  }

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") requestClose();
    }

    if (selected) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, isClosing]);

  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-white mb-2">Projects</h1>
        <p className="text-sm text-slate-400">
          A selection of systems, platforms, and experiments I’ve worked on.
        </p>
      </header>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <button
            key={p.title}
            type="button"
            onClick={() => setSelected(p)}
            className="text-left focus:outline-none"
          >
            {/* Tech wrapper */}
            <div className="group relative rounded-2xl">
              {/* animated border + glow */}
              <div className="absolute -inset-[1px] rounded-2xl opacity-30 blur-lg tech-glow group-hover:opacity-70 transition-opacity" />
              <div className="absolute -inset-[1px] rounded-2xl tech-border opacity-50 group-hover:opacity-90 transition-opacity" />

              {/* 3D lift + shine */}
              <div
                className="relative rounded-2xl overflow-hidden transform-gpu transition-all duration-300 will-change-transform
                           group-hover:-translate-y-1 group-hover:scale-[1.01]
                           group-hover:[transform:perspective(900px)_rotateX(2deg)_rotateY(-2deg)]"
              >
                <ProjectCard project={p} />

                {/* top shine sweep */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute -top-24 left-[-30%] h-40 w-[160%] rotate-12 tech-shine" />
                </div>

                {/* corner micro-grid */}
                <div className="pointer-events-none absolute inset-0 opacity-20 group-hover:opacity-35 transition-opacity">
                  <div className="absolute inset-0 tech-microgrid" />
                </div>

                {/* small “open” hint */}
                <div className="pointer-events-none absolute bottom-3 right-3 text-[11px] text-slate-300/70 opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to expand
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 tech-backdrop ${
              isClosing
                ? "animate-[fadeOut_.26s_ease-in_forwards]"
                : "animate-[fadeIn_.18s_ease-out]"
            }`}
            onClick={requestClose}
          />

          {/* Modal panel */}
          <div
            className={`relative w-full max-w-4xl [transform-style:preserve-3d] ${
              isClosing
                ? "animate-[spinOut_.26s_ease-in_forwards]"
                : "animate-[spinIn_.30s_cubic-bezier(.2,.9,.2,1)_both]"
            }`}
          >
            {/* outer border */}
            <div className="absolute -inset-[1px] rounded-2xl tech-border opacity-80" />
            <div className="absolute -inset-[10px] rounded-3xl blur-2xl tech-glow opacity-60" />

            <div className="relative rounded-2xl border border-white/10 bg-slate-950/85 shadow-2xl overflow-hidden">
              {/* modal background effects */}
              <div className="pointer-events-none absolute inset-0 opacity-35">
                <div className="absolute inset-0 tech-grid" />
                <div className="absolute inset-0 tech-scanlines" />
                <div className="absolute inset-0 tech-vignette" />
              </div>

              {/* Header */}
              <div className="relative flex items-start justify-between gap-4 p-6 border-b border-white/10">
                <div>
                  <h2
                    id="project-modal-title"
                    className="text-xl md:text-2xl font-semibold text-white"
                  >
                    {selected.title}
                  </h2>
                  <p className="mt-1 text-sm text-slate-400">{selected.type}</p>
                </div>

                <button
                  type="button"
                  onClick={requestClose}
                  className="shrink-0 rounded-xl px-3 py-2 text-sm text-slate-200/90
                             hover:text-white hover:bg-white/10 transition"
                >
                  Close
                </button>
              </div>

              {/* Content */}
              <div className="relative p-6 space-y-6">
                <p className="text-slate-200 leading-relaxed">
                  {selected.description}
                </p>

                {selected.highlight && (
                  <div className="relative rounded-xl border border-white/10 bg-white/5 p-4 overflow-hidden">
                    <div className="absolute -inset-20 tech-orb opacity-30" />
                    <p className="relative text-sm text-slate-100">
                      <span className="font-semibold text-white">Highlight:</span>{" "}
                      {selected.highlight}
                    </p>
                  </div>
                )}

                {Array.isArray(selected.stack) && selected.stack.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-2">
                      Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selected.stack.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200
                                     hover:bg-white/10 transition"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <p className="text-xs text-slate-500">Tip: Press ESC to close.</p>
              </div>
            </div>
          </div>

          {/* Effects CSS */}
          <style>{`
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }

            /* 360-ish spin in/out (3D Y rotation looks futuristic) */
            @keyframes spinIn {
              from {
                opacity: 0;
                transform: perspective(1100px) rotateY(-360deg) translateY(14px) scale(0.96);
                filter: blur(4px);
              }
              to {
                opacity: 1;
                transform: perspective(1100px) rotateY(0deg) translateY(0) scale(1);
                filter: blur(0px);
              }
            }
            @keyframes spinOut {
              from {
                opacity: 1;
                transform: perspective(1100px) rotateY(0deg) translateY(0) scale(1);
                filter: blur(0px);
              }
              to {
                opacity: 0;
                transform: perspective(1100px) rotateY(360deg) translateY(14px) scale(0.96);
                filter: blur(4px);
              }
            }

            /* Backdrop: subtle “tech” depth */
            .tech-backdrop {
              background:
                radial-gradient(1200px 600px at 50% 10%, rgba(56,189,248,0.12), transparent 60%),
                radial-gradient(900px 500px at 70% 80%, rgba(168,85,247,0.10), transparent 60%),
                rgba(0,0,0,0.72);
              backdrop-filter: blur(10px);
            }

            /* Animated border (conic gradient) */
            .tech-border {
              background: conic-gradient(from 180deg,
                rgba(56,189,248,0.9),
                rgba(168,85,247,0.9),
                rgba(34,211,238,0.9),
                rgba(56,189,248,0.9)
              );
              mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
              -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
              padding: 1px;
              -webkit-mask-composite: xor;
              mask-composite: exclude;
              animation: borderSpin 6s linear infinite;
            }
            @keyframes borderSpin {
              from { filter: hue-rotate(0deg); }
              to   { filter: hue-rotate(360deg); }
            }

            /* Glow blob */
            .tech-glow {
              background:
                radial-gradient(600px 120px at 20% 20%, rgba(56,189,248,0.55), transparent 60%),
                radial-gradient(700px 160px at 80% 40%, rgba(168,85,247,0.45), transparent 60%),
                radial-gradient(520px 140px at 40% 80%, rgba(34,211,238,0.35), transparent 60%);
            }

            /* Shine sweep */
            .tech-shine {
              background: linear-gradient(90deg,
                transparent,
                rgba(255,255,255,0.12),
                transparent
              );
              filter: blur(2px);
              animation: shine 1.25s ease-out forwards;
            }
            @keyframes shine {
              from { transform: translateX(-20%); opacity: 0; }
              30%  { opacity: 1; }
              to   { transform: translateX(25%); opacity: 0; }
            }

            /* Micro grid overlay on cards */
            .tech-microgrid {
              background-image:
                linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px);
              background-size: 28px 28px;
              background-position: 0 0;
              mask-image: radial-gradient(220px 140px at 80% 20%, #000 40%, transparent 75%);
              -webkit-mask-image: radial-gradient(220px 140px at 80% 20%, #000 40%, transparent 75%);
            }

            /* Modal grid / scanlines / vignette */
            .tech-grid {
              background-image:
                linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px);
              background-size: 54px 54px;
              background-position: 0 0;
              opacity: 0.7;
            }
            .tech-scanlines {
              background: repeating-linear-gradient(
                to bottom,
                rgba(255,255,255,0.06),
                rgba(255,255,255,0.06) 1px,
                transparent 1px,
                transparent 6px
              );
              opacity: 0.22;
              mix-blend-mode: overlay;
            }
            .tech-vignette {
              background: radial-gradient(800px 500px at 50% 20%, transparent 20%, rgba(0,0,0,0.55) 75%);
            }

            /* Highlight orb */
            .tech-orb {
              background:
                radial-gradient(220px 140px at 30% 30%, rgba(56,189,248,0.35), transparent 70%),
                radial-gradient(220px 140px at 70% 50%, rgba(168,85,247,0.28), transparent 70%);
              filter: blur(6px);
            }
          `}</style>
        </div>
      )}
    </section>
  );
}
