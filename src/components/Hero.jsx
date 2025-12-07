import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-[2fr,1.4fr] gap-10 items-center">

      {/* LEFT SIDE */}
      <div>
        {/* Logo */}
        <img
          src="/logo.png"
          alt="CN Logo"
          className="w-20 h-20 mb-6 opacity-90 drop-shadow-[0_0_12px_rgba(0,255,255,0.4)]"
        />

        <p className="text-xs uppercase tracking-[0.25em] text-blue-400 mb-4">
          IT · AI · Cloud · Backend
        </p>

        <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-4 leading-tight">
          Building intelligent,
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">
            production-grade systems.
          </span>
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-xl mb-6">
          I’m an IT Application Developer at Saint George University of Beirut,
          crafting end-to-end solutions – from ASP.NET & SQL Server backends, to
          modern frontends, AI-powered services, and cloud deployments.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="px-5 py-2.5 text-sm rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-soft transition"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-5 py-2.5 text-sm rounded-full border border-slate-700 text-slate-200 hover:border-blue-500 hover:text-blue-200 transition"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative">
        {/* Glow behind the card */}
        <div className="absolute -inset-6 bg-gradient-to-tr from-blue-500/10 via-indigo-500/10 to-cyan-400/5 blur-3xl" />

        {/* Card */}
        <div className="relative rounded-3xl bg-surface border border-slate-800/80 p-6 shadow-soft">
          <div className="text-xs font-semibold text-slate-400 mb-4">
            Current Focus
          </div>
          <ul className="space-y-3 text-sm text-slate-200">
            <li>• SGUB Admissions & PGME Application Systems</li>
            <li>• UNISHELF e-commerce platform for construction materials</li>
            <li>• AI-powered trading & medical imaging models</li>
            <li>• Cloud hosting, CI/CD, and automation</li>
          </ul>
          <div className="mt-6 text-[11px] text-slate-500 border-t border-slate-800 pt-3">
            Available for collaborations & consulting.
          </div>
        </div>
      </div>

    </section>
  );
}
