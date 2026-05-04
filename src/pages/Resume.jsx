import { Link } from "react-router-dom";

const summaryPoints = [
  "Application Developer at Saint George University of Beirut building production systems for admissions, PGME, and academic operations.",
  "Hands-on across ASP.NET Core, SQL Server, Entity Framework, React, JavaScript, backend services, and workflow-heavy internal software.",
  "Focused on translating complex operational processes into maintainable, production-ready applications used by real teams.",
];

const experience = [
  {
    period: "February 2024 - Present",
    role: "Application Developer",
    company: "Saint George University of Beirut",
    location: "Achrafieh, Lebanon",
    points: [
      "Build and maintain enterprise admissions and academic platforms used by applicant-facing, evaluator-facing, and administrative teams.",
      "Design workflow-heavy systems covering dynamic forms, document handling, recommendation flows, review states, scoring logic, and internal dashboards.",
      "Develop backend services and APIs with ASP.NET Core, SQL Server, and Entity Framework with attention to security, maintainability, and operational reliability.",
      "Support deployment, permissions, issue resolution, and day-to-day production stability across application layers.",
    ],
  },
  {
    period: "February 2023 - February 2024",
    role: "IT Support and Junior Development",
    company: "Saint George University of Beirut",
    location: "Achrafieh, Lebanon",
    points: [
      "Supported faculty and staff operations while contributing to application testing, documentation, and internal system maintenance.",
      "Built early exposure to production environments, enterprise processes, and technical coordination across departments.",
    ],
  },
  {
    period: "2024 - Present",
    role: "Independent Product and Client Delivery",
    company: "Mission-Driven and Commercial Projects",
    location: "Lebanon / Remote",
    points: [
      "Delivered full-stack and operational software for Lebanese Red Cross work, commercial platforms, automation products, and applied AI projects.",
      "Owned delivery across product structuring, backend logic, frontend implementation, deployment, and post-launch refinements.",
    ],
  },
];

const selectedWork = [
  "SGUB Undergraduate Admissions Platform: production admissions workflows, document handling, role-based review, and operational decision support.",
  "PGME Residency and Fellowship Applications: multi-step application system with heavier validation, SQL-backed processing, and reviewer coordination.",
  "Lebanese Red Cross Youth Hub: internal coordination platform with role-based workflows, topic distribution, and operational ownership.",
  "UNISHELF Commerce Experience: structured catalog and media-heavy commercial platform with AWS-backed delivery.",
];

const skills = [
  "C#",
  "ASP.NET Core",
  "React",
  "JavaScript",
  "SQL Server",
  "Entity Framework",
  "REST APIs",
  "Stored Procedures",
  "IIS",
  "AWS S3",
  "CloudFront",
  "MongoDB",
  "Python",
  "Git",
];

const education = [
  "B.S. in Information Technology (AI Emphasis) — Saint George University of Beirut",
  "M.S. in Data Science (In Progress) — Lebanese American University",
];

export default function Resume() {
  return (
    <section className="space-y-10">
      <header className="rounded-[2rem] border border-[#201a16]/10 bg-[#111827] px-6 py-8 shadow-[0_35px_90px_rgba(15,23,42,0.16)] sm:px-8">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d8c29c]">
              Resume
            </p>
            <h1 className="mt-3 font-display text-4xl leading-tight text-[#f8f4ee] sm:text-5xl">
              Application Developer delivering production systems for higher education and operational teams
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
              Production-focused experience across SGUB platforms, Lebanese Red
              Cross delivery, backend services, workflow-heavy applications,
              and enterprise support responsibilities.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/Charbel-Nasr-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#f8f4ee] px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-white"
            >
              View Resume
            </a>
            <a
              href="/Charbel-Nasr-Resume.pdf"
              download="Charbel-Nasr-Resume.pdf"
              className="rounded-full border border-white/15 px-5 py-3 text-sm text-slate-100 transition hover:border-[#d8c29c]/50 hover:bg-white/5"
            >
              Download Resume
            </a>
            <Link
              to="/projects"
              className="rounded-full border border-white/15 px-5 py-3 text-sm text-slate-100 transition hover:border-[#d8c29c]/50 hover:bg-white/5"
            >
              Review Projects
            </Link>
          </div>
        </div>
      </header>

      <section className="grid gap-6 xl:grid-cols-[1.25fr,0.75fr]">
        <div className="rounded-[1.75rem] border border-[#201a16]/10 bg-white/85 p-6 shadow-[0_18px_42px_rgba(15,23,42,0.05)] sm:p-7">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
            Executive Summary
          </p>
          <div className="mt-5 space-y-3">
            {summaryPoints.map((point) => (
              <div key={point} className="flex gap-3 text-sm leading-7 text-slate-600">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#215f5b]" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-[#201a16]/10 bg-[#f8f4ee] p-6 shadow-[0_18px_42px_rgba(15,23,42,0.05)] sm:p-7">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
            Core Stack
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[#201a16]/10 bg-white px-3 py-1.5 text-xs text-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
              Education
            </p>
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              {education.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[1.9rem] border border-[#201a16]/10 bg-white/85 p-6 shadow-[0_18px_42px_rgba(15,23,42,0.05)] sm:p-8">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
            Experience
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-950">
            Experience across production systems and operational software delivery
          </h2>
        </div>

        <div className="mt-8 space-y-6">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="rounded-[1.5rem] border border-[#201a16]/10 bg-[#f8f4ee] p-5"
            >
              <div className="flex flex-col gap-2 xl:flex-row xl:items-start xl:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[#7a5b2b]">
                    {item.period}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-950">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {item.company} · {item.location}
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {item.points.map((point) => (
                  <div key={point} className="flex gap-3 text-sm leading-7 text-slate-600">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#215f5b]" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr,1fr]">
        <div className="rounded-[1.75rem] border border-[#201a16]/10 bg-[#111827] p-6 shadow-[0_28px_60px_rgba(15,23,42,0.12)] sm:p-7">
          <p className="text-xs uppercase tracking-[0.24em] text-[#d8c29c]">
            Selected Work
          </p>
          <div className="mt-5 space-y-3">
            {selectedWork.map((item) => (
              <div key={item} className="flex gap-3 text-sm leading-7 text-slate-300">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#d8c29c]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-[#201a16]/10 bg-white/85 p-6 shadow-[0_18px_42px_rgba(15,23,42,0.05)] sm:p-7">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
            Role Alignment
          </p>
          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
            <p>
              Application development, full-stack delivery, and backend-leaning
              roles involving structured workflows, business logic, and
              operational reliability.
            </p>
            <p>
              Experience includes production environments where systems support
              admissions, academic operations, and mission-driven coordination.
            </p>
            <p>
              Project details cover the systems, scope, and outcomes behind the
              work listed in this resume.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
