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
      className="space-y-6 max-w-xl w-full"
    >
      {/* Row 1: Name + Email */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-slate-200 mb-1.5">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            required
            placeholder="John Doe"
            className="w-full rounded-xl bg-slate-900/70 border border-slate-700 px-4 py-2.5 text-white text-sm 
                       placeholder-slate-500 transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-200 mb-1.5">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            required
            placeholder="john@example.com"
            className="w-full rounded-xl bg-slate-900/70 border border-slate-700 px-4 py-2.5 text-white text-sm 
                       placeholder-slate-500 transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40 focus:outline-none"
          />
        </div>
      </div>

      {/* Message Input */}
      <div>
        <label className="block text-sm font-semibold text-slate-200 mb-1.5">
          Message
        </label>
        <textarea
          name="message"
          required
          rows="6"
          placeholder="Write your message here..."
          className="w-full rounded-xl bg-slate-900/70 border border-slate-700 px-4 py-3 text-white text-sm 
                     placeholder-slate-500 resize-none transition 
                     focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40 focus:outline-none"
        />
      </div>

      {/* Send Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 
                   rounded-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 
                   disabled:opacity-50 text-sm font-medium text-white 
                   shadow-[0_0_20px_rgba(0,120,255,0.25)] transition-all duration-200"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>

      {/* Status Messages */}
      {status === "success" && (
        <p className="text-sm text-emerald-400 mt-1 animate-fadeIn">
          ✓ Message sent successfully. I will get back to you shortly.
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-400 mt-1 animate-fadeIn">
          ⚠ Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
