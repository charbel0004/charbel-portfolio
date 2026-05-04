export default function Experience() {
  const items = [
    {
      date: "2024 — Present",
      role: "Application Developer",
      org: "Saint George University of Beirut (SGUB)",
      desc: "Building and maintaining admissions platforms, PGME workflows, recommendation systems, scoring support, and production application services used by academic and administrative teams."
    },
    {
      date: "2023 — 2024",
      role: "IT Support and Junior Development",
      org: "Saint George University of Beirut (SGUB)",
      desc: "Supported faculty and staff operations while contributing to testing, documentation, and early application maintenance inside a production environment."
    },
    {
      date: "2024 — Present",
      role: "Independent Product and Client Delivery",
      org: "Mission-Driven and Commercial Projects",
      desc: "Delivered full-stack applications and operational tools for Lebanese Red Cross work, commerce platforms, automation products, and AI-oriented side projects."
    }
  ];

  return (
    <section className="mt-20">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
          Experience
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-950">
          The environments where I have been shipping real work
        </h2>
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.role}
            className="rounded-[1.5rem] border border-[#201a16]/10 bg-white/75 p-5 shadow-[0_18px_42px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="text-xs uppercase tracking-[0.24em] text-[#7a5b2b]">
              {item.date}
            </div>
            <div className="mt-2 text-lg font-semibold text-slate-950">{item.role}</div>
            <div className="mt-1 text-sm text-slate-500">{item.org}</div>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
