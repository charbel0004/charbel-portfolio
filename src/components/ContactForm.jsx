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
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="space-y-4 max-w-xl w-full"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full rounded-xl bg-slate-900/60 border border-slate-700 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full rounded-xl bg-slate-900/60 border border-slate-700 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-300 mb-1">
          Message
        </label>
        <textarea
          name="message"
          required
          rows="5"
          className="w-full rounded-xl bg-slate-900/60 border border-slate-700 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-sm text-white shadow-soft transition"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-xs text-emerald-400 mt-1">
          Thank you! Your message has been sent.
        </p>
      )}
      {status === "error" && (
        <p className="text-xs text-red-400 mt-1">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
