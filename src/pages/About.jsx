import RadialTimeline from "../components/RadialTimeline.jsx";

export default function About() {
  return (
    <section className="space-y-20 relative z-10">

      {/* HEADER */}
      <header className="pt-4">
        <h1 className="text-3xl font-semibold text-white mb-2">About Me</h1>
        <p className="text-sm text-slate-400">
          A look into my background, journey, and the work that drives me.
        </p>
      </header>

      {/* MAIN GRID */}
     <div className="space-y-5 text-sm text-slate-200 leading-relaxed">
  <p>
    I’m an IT Application Developer at{" "}
    <span className="text-sky-300 font-medium">
      Saint George University of Beirut (SGUB)
    </span>
    , where I design and deliver production-grade platforms that support the
    university’s digital transformation. My work focuses on building secure,
    scalable systems that streamline admissions and academic workflows end-to-end
    — from applicant-facing portals to internal scoring, evaluation, and decision
    dashboards.
  </p>

  <p>
    On the engineering side, I work across the full stack. I build ASP.NET Core
    applications and APIs, implement role-based access control, and integrate
    database-heavy business logic using SQL Server, Entity Framework, and stored
    procedures. Many of the systems I maintain involve complex rules and
    high-stakes data integrity (status transitions, scoring logic, audit-safe
    operations), so I prioritize clean architecture, clear validation flows, and
    predictable behavior under real usage.
  </p>

  <p>
    A major part of my day-to-day is building workflow automation around
    documents and application steps: multi-stage forms, autosave drafts, dynamic
    validations, uploads, and administrative tools to review, score, and track
    candidates efficiently. I’ve also deployed and supported production
    environments (including IIS and cloud storage setups) and handled practical
    issues that appear only at scale — permissions, environment differences,
    and reliability across deployments.
  </p>

  <p>
    Beyond enterprise systems, I enjoy building tools that solve real operational
    problems. That includes internal platforms for structured evaluation and
    coordination (like presentation evaluation and topic assignment systems),
    as well as side projects that sharpen my engineering range across Node.js,
    MongoDB, and modern front-end patterns.
  </p>

  <p>
    I also explore applied machine learning, especially where engineering and
    decision support intersect. My projects include algorithmic trading
    experimentation (feature engineering, model training, risk controls, and
    dashboarding) and medical imaging classification work focused on practical
    deployment contexts like telehealth. I’m particularly interested in building
    AI systems that are understandable, testable, and useful in real workflows
    — not just in notebooks.
  </p>

  <p>
    Overall, I care about building software that teams can trust: maintainable
    codebases, efficient database design, clear UX, and tooling that reduces
    friction for users. Whether I’m working on admissions platforms, evaluation
    systems, or AI-assisted utilities, the goal is the same — ship reliable
    systems that make processes faster, cleaner, and easier to operate.
  </p>
</div>

      {/* TIMELINE – NOW WITH PROPER SPACING */}
      <div className="flex justify-center mt-20 sm:mt-24">
        <RadialTimeline />
      </div>

    </section>
  );
}
