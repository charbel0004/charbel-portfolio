import RadialTimeline from "../components/RadialTimeline.jsx";

export default function About() {
  return (
    <section className="space-y-16">

      {/* HEADER */}
      <header>
        <h1 className="text-2xl font-semibold text-white mb-2">About Me</h1>
        <p className="text-sm text-slate-400">
          A look into my background, technical journey, and what drives my work.
        </p>
      </header>

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-[2fr,1.2fr] gap-10">
        
        {/* BIO */}
        <div className="space-y-4 text-sm text-slate-200 leading-relaxed">
          <p>
            I’m an IT Application Developer at{" "}
            <span className="font-medium text-sky-300">
              Saint George University of Beirut (SGUB)
            </span>
            , building systems that support academic operations and 
            digital transformation across the university.
          </p>

          <p>
            My engineering work spans full-stack development, backend APIs,
            database modeling, automation, cloud deployment, and AI-driven tools.
            I focus on creating systems that are efficient, secure, and scalable.
          </p>

          <p>
            I explore applied machine learning including trading models,
            prediction systems, and medical imaging — merging practical software
            engineering with intelligent automation.
          </p>

          <p>
            Outside work, I enjoy researching new technologies, refining user
            experiences, and contributing to impactful projects.
          </p>
        </div>

        {/* SKILLS */}
        <div className="rounded-2xl bg-surface border border-slate-800/80 p-6 shadow-soft">
          <h2 className="text-sm font-semibold text-white mb-4">Skills Snapshot</h2>

          <div className="space-y-4 text-xs">
            <div>
              <p className="text-slate-400 mb-1">Backend & API Development</p>
              <p className="text-slate-200">
                ASP.NET Core · C# · EF · Node.js · Express
              </p>
            </div>
            <div>
              <p className="text-slate-400 mb-1">Databases & Modeling</p>
              <p className="text-slate-200">
                SQL Server · Stored Procs · MongoDB · Optimization
              </p>
            </div>
            <div>
              <p className="text-slate-400 mb-1">Frontend</p>
              <p className="text-slate-200">
                React · JavaScript/TS · Tailwind · Razor Views
              </p>
            </div>
            <div>
              <p className="text-slate-400 mb-1">AI & ML</p>
              <p className="text-slate-200">
                Python · Pandas · Scikit-learn · TensorFlow/PyTorch basics
              </p>
            </div>
            <div>
              <p className="text-slate-400 mb-1">Cloud & DevOps</p>
              <p className="text-slate-200">
                AWS · IIS · GitHub Actions · Docker (Basics)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TIMELINE */}
      <div className="flex justify-center -mt-6">
        <RadialTimeline />
      </div>
    </section>
  );
}
