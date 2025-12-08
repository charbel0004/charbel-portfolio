import { motion } from "framer-motion";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index ? index * 0.1 : 0 }}
      className="
        relative overflow-hidden
        rounded-2xl bg-surface border border-slate-800/80 
        p-5 shadow-soft transition duration-300 
        hover:-translate-y-1 hover:shadow-[0_0_18px_rgba(0,200,255,0.35)]
        hover:border-cyan-400/60 group
      "
    >
      {/* Animated Shine Sweep */}
      <div
        className="
          absolute inset-0 opacity-0 group-hover:opacity-20 
          bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent 
          translate-x-[-100%] group-hover:translate-x-[100%]
          transition-all duration-[1200ms] ease-out
          pointer-events-none
        "
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-base font-semibold text-white transition group-hover:text-cyan-300">
          {project.title}
        </h3>

        <span
          className="
            text-[11px] px-2 py-0.5 rounded-full bg-accentSoft 
            text-slate-200 border border-slate-700 
            transition group-hover:bg-cyan-600/40 group-hover:text-white
          "
        >
          {project.type}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-300 mb-3 leading-relaxed group-hover:text-slate-200 transition">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="
              text-[11px] px-2 py-0.5 rounded-full 
              bg-slate-900/70 text-slate-300 border border-slate-800
              transition duration-200
              hover:bg-cyan-500/20 hover:text-cyan-300 hover:border-cyan-400/50
            "
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Highlight */}
      {project.highlight && (
        <p className="text-xs text-blue-300 mt-1 group-hover:text-cyan-200 transition">
          {project.highlight}
        </p>
      )}
    </motion.article>
  );
}
