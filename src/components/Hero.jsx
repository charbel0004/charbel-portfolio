import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "../data/projects.js";

const focusAreas = [
  "Enterprise admissions systems and evaluator workflows",
  "Mission-driven platforms for Lebanese Red Cross delivery",
  "Operational automation, backend services, and production support",
  "Applied AI work grounded in practical use cases",
];

const proofPoints = [
  { value: `${projects.length}+`, label: "Curated Projects" },
  { value: "SGUB", label: "Current Core Environment" },
  { value: "2024", label: "Production Delivery Since" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-[#201a16]/10 bg-[#111827] px-6 py-10 shadow-[0_35px_90px_rgba(15,23,42,0.18)] sm:px-8 lg:px-12 lg:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(177,138,81,0.28),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(33,95,91,0.28),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#111827] to-transparent" />

      <div className="relative grid items-start gap-10 xl:grid-cols-[1.6fr,0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.34em] text-[#d8c29c]">
              Charbel Nasr · Application Developer
            </p>
            <h1 className="max-w-4xl font-display text-4xl leading-[0.98] text-[#f8f4ee] sm:text-5xl lg:text-6xl">
              Building structured digital systems for higher education,
              operations, and mission-driven teams.
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              I am an IT graduate and Application Developer currently working at
              Saint George University of Beirut. My work includes SGUB
              admissions and academic platforms, Lebanese Red Cross delivery,
              backend-heavy workflows, and production systems used by real
              operational teams.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/resume"
              className="rounded-full bg-[#f8f4ee] px-5 py-3 text-sm font-medium text-slate-950 transition-all duration-300 hover:bg-white hover:shadow-[0_14px_30px_rgba(248,244,238,0.18)]"
            >
              View Resume
            </Link>
            <a
              href="/Charbel-Nasr-Resume.pdf"
              download="Charbel-Nasr-Resume.pdf"
              className="rounded-full border border-white/15 px-5 py-3 text-sm text-slate-100 transition-all duration-300 hover:border-[#d8c29c]/50 hover:bg-white/5"
            >
              Download Resume
            </a>
            <Link
              to="/projects"
              className="rounded-full border border-white/15 px-5 py-3 text-sm text-slate-100 transition-all duration-300 hover:border-[#d8c29c]/50 hover:bg-white/5"
            >
              Review Projects
            </Link>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {proofPoints.map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[1.4rem] border border-white/10 bg-white/[0.05] px-5 py-5"
              >
                <div className="text-2xl font-semibold text-[#f8f4ee]">{item.value}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-slate-400">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[1.9rem] border border-white/10 bg-white/[0.06] p-6"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[#d8c29c]">
                Focus Areas
              </p>
              <h2 className="mt-3 text-xl font-semibold text-[#f8f4ee]">
                Core delivery areas across institutional and mission-driven work
              </h2>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {focusAreas.map((item) => (
              <div key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#d8c29c]" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[1.4rem] border border-[#d8c29c]/15 bg-[#d8c29c]/10 p-4 text-sm leading-6 text-[#f1e5d0]">
            Current work centers on SGUB application platforms, Lebanese Red
            Cross Youth Hub delivery, and systems built around complex review,
            document, and coordination workflows.
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
