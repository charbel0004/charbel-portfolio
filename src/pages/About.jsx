import Experience from "../components/Experience.jsx";
import RadialTimeline from "../components/RadialTimeline.jsx";

const strengths = [
  "Designing workflow-heavy applications with clear operational logic and strong validation paths",
  "Building with ASP.NET Core, SQL Server, Entity Framework, React, and production constraints in mind",
  "Translating manual, document-heavy processes into reliable internal software",
  "Balancing backend depth, usability, and deployment responsibility in the same role",
];

const profilePoints = [
  "IT graduate working as an Application Developer at Saint George University of Beirut",
  "Experience across enterprise platforms, internal tools, Red Cross delivery, and applied AI projects",
  "Focused on maintainability, operational clarity, and production reliability",
];

export default function About() {
  return (
    <section className="relative z-10 space-y-12">
      <header className="max-w-5xl space-y-3 pt-4">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
          About
        </p>
        <h1 className="text-3xl font-semibold text-slate-950 sm:text-4xl">
          Application Developer building dependable systems with real operational value
        </h1>
        <p className="text-sm leading-7 text-slate-600 sm:text-base">
          My work is centered on software that people actually depend on:
          admissions workflows, internal review systems, public platforms,
          operational tools, and side projects where automation or AI can bring
          real value.
        </p>
      </header>

      <div className="grid gap-8 xl:grid-cols-[1.4fr,1fr]">
        <div className="rounded-[1.9rem] border border-[#201a16]/10 bg-white/80 p-6 shadow-[0_18px_42px_rgba(15,23,42,0.05)] sm:p-7">
          <div className="space-y-5 text-sm leading-7 text-slate-600">
            <p>
              I am an IT Application Developer at{" "}
              <span className="font-medium text-[#215f5b]">
                Saint George University of Beirut
              </span>
              , where I design, implement, and maintain software that supports
              admissions and academic operations. My day-to-day work spans
              applicant-facing flows, evaluator workflows, backend services,
              internal dashboards, and the business logic that keeps those
              systems stable in production.
            </p>

            <p>
              A large part of my work sits in workflow-intensive application
              development. I build with ASP.NET Core, SQL Server, Entity
              Framework, JavaScript, and React in environments where form
              logic, document handling, access control, encrypted identifiers,
              and review states all have to work reliably together.
            </p>

            <p>
              I also care about delivery, not only implementation. Hosting,
              deployment, permissions, issue resolution, and post-launch
              reliability are part of the responsibility. That has made my
              approach more practical: features matter, but maintainability and
              operational clarity matter just as much.
            </p>

            <p>
              Beyond SGUB, I have delivered work for Lebanese Red Cross
              projects, commercial platforms, automation products, and applied
              AI efforts in areas such as trading systems and medical imaging.
              Across all of them, the pattern is consistent: I do best on work
              that has structure, users, and meaningful operational use.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <aside className="rounded-[1.9rem] border border-[#201a16]/10 bg-[#111827] p-6 sm:p-7">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Professional Profile
            </p>
            <div className="mt-5 space-y-3">
              {profilePoints.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-7 text-slate-300">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#d8c29c]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </aside>

          <aside className="rounded-[1.9rem] border border-[#201a16]/10 bg-white/80 p-6 shadow-[0_18px_42px_rgba(15,23,42,0.05)] sm:p-7">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Core Strengths
            </p>
            <div className="mt-5 space-y-3">
              {strengths.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-7 text-slate-600">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#215f5b]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>

      <Experience />

      <div className="flex justify-center">
        <RadialTimeline />
      </div>
    </section>
  );
}
