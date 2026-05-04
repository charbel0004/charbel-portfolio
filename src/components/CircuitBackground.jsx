export default function CircuitBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-30 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(177,138,81,0.16),transparent_24%),radial-gradient(circle_at_78%_10%,rgba(33,95,91,0.16),transparent_18%),linear-gradient(180deg,#f4efe7_0%,#f7f3ec_30%,#f2ede4_100%)]" />
      <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-[#215f5b]/10 blur-3xl" />
      <div className="absolute right-[-5rem] top-[-2rem] h-80 w-80 rounded-full bg-[#b18a51]/12 blur-3xl" />
      <div className="absolute bottom-[-6rem] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#111827]/[0.05] blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b18a51]/30 to-transparent" />
    </div>
  );
}
