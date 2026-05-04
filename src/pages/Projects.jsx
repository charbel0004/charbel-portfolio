import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import projects, { projectCategories } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const visibleProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section className="space-y-8">
      <header className="max-w-5xl space-y-3">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
          Project Portfolio
        </p>
        <h1 className="text-3xl font-semibold text-slate-950 sm:text-4xl">
          SGUB systems, Lebanese Red Cross delivery, and application development work
        </h1>
        <p className="text-sm leading-7 text-slate-600 sm:text-base">
          Projects are grouped across higher education systems, mission-driven
          delivery, commercial builds, and selective AI or automation work.
        </p>
      </header>

      <div className="rounded-[1.7rem] border border-[#201a16]/10 bg-white/80 p-4 shadow-[0_18px_42px_rgba(15,23,42,0.05)] sm:p-5">
        <div className="flex flex-wrap gap-3">
          {["All", ...projectCategories].map((category) => {
            const active = category === selectedCategory;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                  active
                    ? "bg-[#111827] text-[#f8f4ee] shadow-[0_10px_24px_rgba(15,23,42,0.12)]"
                    : "border border-[#201a16]/10 bg-[#f8f4ee] text-slate-600 hover:border-[#b18a51]/30 hover:text-slate-950"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-6">
        {visibleProjects.map((project, index) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              duration: 0.65,
              delay: index * 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid items-start gap-5 xl:grid-cols-[minmax(0,1.25fr)_minmax(340px,0.75fr)]"
          >
            <ProjectCard project={project} index={index} />

            <aside className="rounded-[1.5rem] border border-[#201a16]/10 bg-[#f8f4ee] p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
                <section>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Scope
                  </h2>
                  <div className="mt-3 space-y-2.5 text-sm leading-7 text-slate-600">
                    {project.scope.map((item) => (
                      <div key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#7a5b2b]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Outcome
                  </h2>
                  <div className="mt-3 space-y-2.5 text-sm leading-7 text-slate-600">
                    {project.outcomes.map((item) => (
                      <div key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#215f5b]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </aside>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
