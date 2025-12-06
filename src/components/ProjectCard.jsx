export default function ProjectCard({ project }) {
  return (
    <article className="rounded-2xl bg-surface border border-slate-800/80 p-5 shadow-soft hover:border-blue-500/60 transition group">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-base font-semibold text-white">
          {project.title}
        </h3>
        <span className="text-[11px] px-2 py-0.5 rounded-full bg-accentSoft text-slate-200 border border-slate-700">
          {project.type}
        </span>
      </div>
      <p className="text-sm text-slate-300 mb-3">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-[11px] px-2 py-0.5 rounded-full bg-slate-900/70 text-slate-300 border border-slate-800"
          >
            {tech}
          </span>
        ))}
      </div>
      {project.highlight && (
        <p className="text-xs text-blue-300">{project.highlight}</p>
      )}
    </article>
  );
}
