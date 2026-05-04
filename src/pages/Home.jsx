import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "../components/Hero.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import Experience from "../components/Experience.jsx";
import projects, { featuredProjects } from "../data/projects.js";

const categories = [
  {
    title: "SGUB Systems",
    text: "Admissions, PGME, recommendation workflows, and the backend services supporting academic and administrative teams.",
  },
  {
    title: "Lebanese Red Cross Delivery",
    text: "Mission-driven internal products, public-facing delivery, and operational tools with clear use in the field.",
  },
  {
    title: "Automation and AI",
    text: "Independent builds in automation, trading research, and applied machine learning that extend beyond institutional software.",
  },
];

const professionalNotes = [
  {
    title: "Target Roles",
    text: "Application Developer, Full-Stack Developer, or Backend-leaning product roles involving workflow-heavy systems and SQL-backed business logic.",
  },
  {
    title: "Current Delivery",
    text: "Production SGUB systems, Lebanese Red Cross delivery, and backend-led application work across operational and administrative processes.",
  },
  {
    title: "Working Stack",
    text: "ASP.NET Core, SQL Server, Entity Framework, React, JavaScript, IIS, and production issue handling across application layers.",
  },
];

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />

      <section className="grid gap-4 xl:grid-cols-3">
        {categories.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              delay: index * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-[1.6rem] border border-[#201a16]/10 bg-white/75 p-6 shadow-[0_18px_42px_rgba(15,23,42,0.05)] transition-transform duration-300 hover:-translate-y-1"
          >
            <p className="text-sm font-semibold text-slate-950">{item.title}</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
          </motion.div>
        ))}
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Featured Work
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950 sm:text-3xl">
              Selected projects across SGUB, Red Cross, and applied systems work
            </h2>
          </div>
          <Link
            to="/projects"
            className="text-sm text-[#7a5b2b] transition hover:text-[#5f4520]"
          >
            View the full project archive
          </Link>
        </div>

        <div className="grid items-start gap-5 xl:grid-cols-2">
          {featuredProjects.slice(0, 4).map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              compact
            />
          ))}
        </div>
      </section>

      <Experience />

      <section className="grid gap-5 xl:grid-cols-[1.1fr,0.9fr]">
        <div className="rounded-[2rem] border border-[#201a16]/10 bg-[#111827] p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.25em] text-[#d8c29c]">
            Professional Focus
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#f8f4ee] sm:text-3xl">
            Production systems, operational workflows, and applied delivery
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            Work across SGUB platforms, Lebanese Red Cross delivery, and
            backend-heavy applications built around real workflows, internal
            coordination, and production support needs.
          </p>
        </div>

        <div className="grid gap-4">
          {professionalNotes.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.6rem] border border-[#201a16]/10 bg-white/80 p-6 shadow-[0_18px_42px_rgba(15,23,42,0.05)]"
            >
              <h3 className="text-base font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-[#201a16]/10 bg-white/80 p-6 sm:p-8 shadow-[0_18px_42px_rgba(15,23,42,0.05)]">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Project Coverage
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950 sm:text-3xl">
              Additional work across academic, mission-driven, and commercial systems
            </h2>
          </div>
          <div className="text-sm text-slate-500">{projects.length} projects documented</div>
        </div>

        <div className="mt-6 columns-1 gap-4 xl:columns-2">
          {projects.slice(4).map((project) => (
            <div
              key={project.slug}
              className="mb-4 break-inside-avoid rounded-[1.45rem] border border-[#201a16]/10 bg-[#f8f4ee] p-5 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-base font-semibold text-slate-950">{project.title}</h3>
                <span className="text-xs uppercase tracking-[0.16em] text-slate-500">
                  {project.period}
                </span>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {project.attention}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
