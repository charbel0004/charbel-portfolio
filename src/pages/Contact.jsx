import ContactForm from "../components/ContactForm.jsx";

export default function Contact() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-white mb-2">Contact</h1>
        <p className="text-sm text-slate-400 max-w-xl">
          For collaboration, consulting, or any questions about my work, feel
          free to reach out. The form below will send me an email directly.
        </p>
      </header>

      <ContactForm />
    </section>
  );
}
