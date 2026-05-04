import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/resume", label: "Resume" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[#201a16]/10 bg-[#f4efe7]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-[1380px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo-mark.png"
            alt="Charbel Nasr logo"
            className="h-11 w-11 rounded-[1rem] border border-[#201a16]/10 object-contain shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
          />

          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-slate-950">Charbel Nasr</span>
            <span className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
              Application Developer
            </span>
          </div>
        </Link>

        <button
          className="rounded-full border border-[#201a16]/10 px-3 py-1 text-slate-700 md:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <span className="sr-only">Toggle menu</span>
          Menu
        </button>

        <div className="hidden items-center gap-2 rounded-full border border-[#201a16]/10 bg-white/80 p-1 shadow-[0_16px_40px_rgba(15,23,42,0.06)] md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm transition ${
                  isActive
                    ? "bg-[#111827] text-[#f8f4ee]"
                    : "text-slate-600 hover:bg-[#111827]/5 hover:text-slate-950"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {open && (
        <div className="border-t border-[#201a16]/10 bg-[#f8f4ee] md:hidden">
          <div className="mx-auto w-full max-w-[1380px] space-y-2 px-4 py-3 text-sm sm:px-6">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-xl px-3 py-2 ${
                    isActive
                      ? "bg-[#111827] text-[#f8f4ee]"
                      : "text-slate-700 hover:bg-[#111827]/5 hover:text-slate-950"
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
