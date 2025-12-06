import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-bg/80 backdrop-blur border-b border-slate-800">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-xs font-bold">
            CN
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-white">
              Charbel Nasr
            </span>
            <span className="text-[11px] text-slate-400">
              IT Application Developer · SGUB
            </span>
          </div>
        </Link>

        <button
          className="md:hidden text-slate-200"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Toggle menu</span>
          ☰
        </button>

        <div className="hidden md:flex items-center gap-6 text-sm">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition-colors ${
                  isActive
                    ? "text-white border-b border-blue-500 pb-1"
                    : "text-slate-300 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-800 bg-bg/95 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-2 text-sm">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-1 ${
                    isActive
                      ? "text-white font-medium"
                      : "text-slate-300 hover:text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
