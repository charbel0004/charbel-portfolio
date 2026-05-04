import { useEffect, useRef } from "react";

const milestones = [
  {
    year: "2023",
    title: "Early Product Exposure",
    desc: "Moved from support and implementation exposure into environments where real users and real operations shaped the work.",
  },
  {
    year: "2024",
    title: "SGUB Production Delivery",
    desc: "Started owning production admissions and academic workflows at Saint George University of Beirut.",
  },
  {
    year: "2025",
    title: "Broader Delivery Range",
    desc: "Expanded into PGME systems, Lebanese Red Cross delivery, public web work, and internal operations tooling.",
  },
  {
    year: "2026",
    title: "Sharper Personal Brand",
    desc: "Expanded the presentation of production work, institutional delivery, and project documentation across the work history.",
  },
];

export default function RadialTimeline() {
  const containerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("tl-visible");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="tl-hidden w-full rounded-[2rem] border border-[#201a16]/10 bg-[#111827] px-6 py-12 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs uppercase tracking-[0.24em] text-[#d8c29c]">
          Career Direction
        </p>
        <h2 className="mt-2 text-center text-2xl font-semibold text-[#f8f4ee]">
          How the work has matured
        </h2>

        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {milestones.map((item, index) => (
            <div
              key={item.year}
              className="tl-item rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5 opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-sm font-semibold text-[#d8c29c]">{item.year}</div>
              <div className="mt-3 text-lg font-semibold text-[#f8f4ee]">{item.title}</div>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .tl-hidden {
          opacity: 0;
        }

        .tl-visible {
          opacity: 1;
          transition: opacity 0.8s ease;
        }

        .tl-visible .tl-item {
          animation: riseFade 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes riseFade {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
