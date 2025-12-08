export default function TechStack() {
  const stack = [
    { name: "React", icon: "/tech/react.svg" },
    { name: "ASP.NET", icon: "/tech/dotnet.svg" },
    { name: "SQL Server", icon: "/tech/sql.svg" },
    { name: "Tailwind", icon: "/tech/tailwind.svg" },
    { name: "AWS", icon: "/tech/aws.svg" },
    { name: "Docker", icon: "/tech/docker.svg" },
    { name: "Python", icon: "/tech/python.svg" },
    { name: "AI/ML", icon: "/tech/ai.svg" },
  ];

  return (
    <section className="mt-20">
      <h2 className="text-xl font-semibold text-white mb-6">Tech Stack</h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
        {stack.map((tech) => (
          <div
            key={tech.name}
            className="group flex flex-col items-center gap-2 p-4 
                       bg-[#0d111a]/60 rounded-xl border border-slate-800 
                       hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(0,255,255,0.25)]
                       transition"
          >
            <img src={tech.icon} alt="" className="w-10 opacity-90" />
            <span className="text-xs text-slate-300 group-hover:text-cyan-300">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
