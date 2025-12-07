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
    <header className="fixed top-0 inset-x-0 z-40 bg-black/30 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">

        {/* Logo + Name */}
        <Link to="/" className="flex items-center gap-3">
          
          {/* CN Logo */}
          <img
            src="/logo.png"
            alt="CN Logo"
            className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(0,255,255,0.45)]"
          />

          {/* Name & Title */}
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-white">
              Charbel Nasr
            </span>
            <span className="text-[11px] text-slate-400">
              IT Application Developer · SGUB
            </span>
          </div>

        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-200"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Toggle menu</span>
          ☰
        </button>

        {/* Desktop Links */}
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

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/40 backdrop-blur">
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
