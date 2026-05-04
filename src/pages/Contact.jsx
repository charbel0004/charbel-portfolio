import ContactForm from "../components/ContactForm.jsx";

export default function Contact() {
  return (
    <section className="space-y-8">
      <header className="max-w-4xl space-y-3">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
          Contact
        </p>
        <h1 className="text-3xl font-semibold text-slate-950 sm:text-4xl">
          Reach out for opportunities, collaborations, or project discussions
        </h1>
        <p className="max-w-2xl text-sm leading-7 text-slate-600">
          If you are hiring for application development, full-stack product
          work, or backend-heavy delivery with real workflow complexity, this
          page is the easiest way to contact me.
        </p>
      </header>

      <div className="grid gap-6 xl:grid-cols-[0.85fr,1.15fr]">
        <aside className="rounded-[1.8rem] border border-[#201a16]/10 bg-[#111827] p-6">
          <p className="text-xs uppercase tracking-[0.24em] text-[#d8c29c]">
            Contact Snapshot
          </p>
          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
            <p>
              Based in Beirut, Lebanon and open to conversations around
              application development, product delivery, and operational
              software roles.
            </p>
            <p>
              Strongest background: ASP.NET Core, SQL Server, React, internal
              systems, SGUB workflows, and mission-driven delivery.
            </p>
            <p>
              Use the form if you want to discuss a role, project, or
              collaboration.
            </p>
          </div>
        </aside>

        <div className="rounded-[1.8rem] border border-[#201a16]/10 bg-white/80 p-6 shadow-[0_18px_42px_rgba(15,23,42,0.05)]">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
