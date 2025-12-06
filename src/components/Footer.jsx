export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-bg/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-xs flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-500">
        <span>© {new Date().getFullYear()} Charbel Nasr. All rights reserved.</span>
        <span className="text-[11px]">
          Built with React, TailwindCSS & a lot of coffee.
        </span>
      </div>
    </footer>
  );
}
