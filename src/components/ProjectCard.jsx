import { motion } from "framer-motion";

export default function ProjectCard({ project, index, compact = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.65,
        delay: index ? index * 0.06 : 0,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-[1.65rem] border border-[#201a16]/10 bg-white/80 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-[#b18a51]/30"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(177,138,81,0.12),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.6),transparent)] opacity-90" />

      <div className="relative">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="max-w-[84%]">
            <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
              {project.client}
            </p>
            <h3 className="mt-2 text-xl font-semibold leading-snug text-slate-950 transition-colors duration-300 group-hover:text-[#7a5b2b]">
              {project.title}
            </h3>
          </div>

          <span className="rounded-full border border-[#201a16]/10 bg-[#111827] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[#f8f4ee]">
            {project.status}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.18em] text-slate-500">
          <span>{project.type}</span>
          <span className="text-slate-400">/</span>
          <span>{project.period}</span>
          <span className="text-slate-400">/</span>
          <span>{project.category}</span>
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-600">{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#201a16]/10 bg-[#f8f4ee] px-2.5 py-1 text-[11px] text-slate-600 transition-colors duration-300 group-hover:border-[#b18a51]/30"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-[#b18a51]/15 bg-[#f3ede3] p-4 text-sm leading-6 text-slate-700">
          {project.attention}
        </div>

        {!compact && Array.isArray(project.outcomes) && project.outcomes.length > 0 && (
          <div className="mt-5 space-y-2.5 text-sm leading-6 text-slate-600">
            {project.outcomes.slice(0, 2).map((outcome) => (
              <div key={outcome} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#215f5b]" />
                <span>{outcome}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}
