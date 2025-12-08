export default function Experience() {
  const items = [
    {
      date: "2024 — Present",
      role: "IT Application Developer",
      org: "Saint George University of Beirut (SGUB)",
      desc: "Building enterprise systems including Admissions, PGME workflows, recommendation systems, automation, and cloud deployments."
    },
    {
      date: "2023 — Present",
      role: "AI & Software Developer (Freelance)",
      org: "Independent",
      desc: "Developing AI trading models, full-stack platforms, cloud pipelines, and automation tooling."
    }
  ];

  return (
    <section className="mt-20">
      <h2 className="text-xl font-semibold text-white mb-6">Experience</h2>

      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.role} className="border-l-2 border-blue-500/50 pl-4">
            <div className="text-blue-400 text-xs mb-1">{item.date}</div>
            <div className="text-white font-medium">{item.role}</div>
            <div className="text-slate-400 text-sm mb-2">{item.org}</div>
            <p className="text-slate-300 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
