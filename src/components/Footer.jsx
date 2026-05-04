export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[#201a16]/10 py-10">
      <div className="mx-auto flex w-full max-w-[1380px] flex-col gap-2 px-4 text-sm text-slate-500 sm:px-6 lg:px-10 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Charbel Nasr. Application Developer.</p>
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
          Beirut, Lebanon · SGUB · Mission-driven delivery
        </p>
      </div>
    </footer>
  );
}
