import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.sendForm(
        "service_o9ob5a4",
        "template_mjhkmyb",
        formRef.current,
        "L0HRVYHcbrnwzYxMT"
      );

      setStatus("success");
      formRef.current.reset();

      setTimeout(() => setStatus(null), 4000); // auto hide message

    } catch (err) {
      console.error(err);
      setStatus("error");

      setTimeout(() => setStatus(null), 4000);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="w-full max-w-xl space-y-6"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-slate-800">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            required
            placeholder="John Doe"
            className="w-full rounded-xl border border-[#201a16]/10 bg-[#f8f4ee] px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-[#215f5b] focus:outline-none focus:ring-2 focus:ring-[#215f5b]/15"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-slate-800">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            required
            placeholder="john@example.com"
            className="w-full rounded-xl border border-[#201a16]/10 bg-[#f8f4ee] px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-[#215f5b] focus:outline-none focus:ring-2 focus:ring-[#215f5b]/15"
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-semibold text-slate-800">
          Message
        </label>
        <textarea
          name="message"
          required
          rows="6"
          placeholder="Write your message here..."
          className="w-full resize-none rounded-xl border border-[#201a16]/10 bg-[#f8f4ee] px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-[#215f5b] focus:outline-none focus:ring-2 focus:ring-[#215f5b]/15"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center rounded-full bg-[#111827] px-6 py-3 text-sm font-medium text-[#f8f4ee] transition-all duration-200 hover:bg-[#1f2937] disabled:opacity-50 sm:w-auto"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="mt-1 text-sm text-emerald-600 animate-fadeIn">
          Message sent successfully. I will get back to you shortly.
        </p>
      )}

      {status === "error" && (
        <p className="mt-1 text-sm text-red-600 animate-fadeIn">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
