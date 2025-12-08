import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative grid md:grid-cols-[2fr,1.3fr] gap-12 items-center">

      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Subtle glowing logo */}
        <img
          src="/logo.png"
          alt="CN Logo"
          className="w-20 h-20 mb-6 opacity-90 drop-shadow-[0_0_20px_rgba(0,255,255,0.45)]"
        />

        {/* Tagline */}
        <p className="text-xs uppercase tracking-[0.25em] text-cyan-300 mb-4">
          IT • AI • Cloud • Backend
        </p>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-5 leading-tight">
          Engineering intelligent,
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400">
            production-grade systems.
          </span>
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-xl mb-6">
          IT Application Developer at Saint George University of Beirut.
          I build scalable APIs, cloud deployments, secure platforms, and
          AI-driven applications—from concept to production.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="px-5 py-2.5 text-sm rounded-full bg-blue-600 hover:bg-blue-500 
                     shadow-[0_0_15px_rgba(0,150,255,0.4)] transition text-white"
          >
            View Projects
          </Link>

          <Link
            to="/contact"
            className="px-5 py-2.5 text-sm rounded-full border border-cyan-400/40 
                       text-cyan-200 hover:border-cyan-300 hover:text-cyan-100 transition"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>

      {/* RIGHT SIDE CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        {/* Glow behind card */}
        <div className="absolute -inset-6 bg-gradient-to-tr from-cyan-500/10 
                        via-indigo-500/10 to-blue-400/5 blur-3xl" />

        {/* Card */}
        <div className="relative rounded-3xl bg-[#0b0f17]/80 border border-slate-800/80 p-6 shadow-xl">
          <div className="text-xs font-semibold text-slate-400 mb-4">
            Current Focus
          </div>

          <ul className="space-y-3 text-sm text-slate-200">
            <li>• PGME & Undergraduate Admissions Systems (SGUB)</li>
            <li>• UNISHELF E-Commerce Platform</li>
            <li>• AI Models: Trading, Skin-Cancer Imaging</li>
            <li>• Cloud Deployments, CI/CD, Automation</li>
          </ul>

          <div className="mt-6 text-[12px] text-slate-300 border-t border-slate-700 pt-3">
            Available for collaborations & consulting.
          </div>
        </div>
      </motion.div>

    </section>
  );
}
