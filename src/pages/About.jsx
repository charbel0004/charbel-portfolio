export default function About() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-white mb-2">About</h1>
        <p className="text-sm text-slate-400">
          A bit about my background, experience, and what I enjoy building.
        </p>
      </header>

      <div className="grid md:grid-cols-[2fr,1.2fr] gap-8">
        <div className="space-y-4 text-sm text-slate-200">
          <p>
            I’m an IT Application Developer at{" "}
            <span className="font-medium text-sky-300">
              Saint George University of Beirut (SGUB)
            </span>
            , working within the Information and Communication Technology Office.
          </p>
          <p>
            My work focuses on building secure, maintainable systems: admission
            platforms, academic workflows, scoring dashboards, document
            management, and integrations with university infrastructure. I’m
            comfortable owning an application from database design to frontend
            UX and deployment.
          </p>
          <p>
            On the AI side, I’ve been exploring trading algorithms,
            data-driven decision systems, and medical imaging models, blending
            practical software engineering with applied machine learning.
          </p>
          <p>
            Outside of work, I enjoy learning, tinkering with new tools, and
            contributing to projects that make processes smoother for teams and
            students.
          </p>
        </div>

        <div className="rounded-2xl bg-surface border border-slate-800/80 p-5 text-sm text-slate-200">
          <h2 className="text-sm font-semibold text-white mb-3">
            Skills Snapshot
          </h2>
          <div className="space-y-3 text-xs">
            <div>
              <p className="text-slate-400 mb-1">Backend & APIs</p>
              <p>ASP.NET Core, C#, Node.js, Express</p>
            </div>
            <div>
              <p className="text-slate-400 mb-1">Data & Databases</p>
              <p>SQL Server, Entity Framework, MongoDB, Stored Procedures</p>
            </div>
            <div>
              <p className="text-slate-400 mb-1">Frontend</p>
              <p>React, TypeScript (optional), Tailwind, Razor Views</p>
            </div>
            <div>
              <p className="text-slate-400 mb-1">AI & Analytics</p>
              <p>Python, Pandas, Scikit-learn, TensorFlow/PyTorch basics</p>
            </div>
            <div>
              <p className="text-slate-400 mb-1">DevOps & Cloud</p>
              <p>AWS (EC2, S3, CloudFront), IIS, Docker basics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
