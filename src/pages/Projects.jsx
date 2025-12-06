import projects from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-white mb-2">Projects</h1>
        <p className="text-sm text-slate-400">
          A selection of systems, platforms, and experiments I’ve worked on.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
