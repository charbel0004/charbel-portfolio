import Hero from "../components/Hero.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import projects from "../data/projects.js";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />

      <section className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">Selected Work</h2>
          <Link
            to="/projects"
            className="text-xs text-blue-400 hover:text-blue-300"
          >
            View all projects →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {projects.slice(0, 4).map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
