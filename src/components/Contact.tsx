"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const res = await fetch('https://formspree.io/f/YOUR_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    // Replace with your preferred form service (Formspree, EmailJS, etc.)
    // For now, simulating a send
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-display text-xs text-white/20 tracking-[0.3em] uppercase">05</span>
          <span className="h-px flex-1 max-w-[40px] bg-white/10" />
          <span className="font-display text-xs text-white/20 tracking-[0.3em] uppercase">Contact</span>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Let&apos;s build something together.
            </h2>
            <p className="text-white/40 leading-relaxed mb-10">
              I&apos;m currently open to frontend and full-stack roles at startups in Bengaluru.
              If you have a role, a project, or just want to connect — reach out.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:ganeshmodanwal@gmail.com"
                className="flex items-center gap-3 text-white/40 hover:text-white transition-colors group"
              >
                <span className="font-display text-xs tracking-widest uppercase text-white/20 group-hover:text-white/40 w-20">
                  Email
                </span>
                <span className="text-sm">ganeshmodanwal@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ganesh-kumar-modanwal-01a287251/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-white/40 hover:text-white transition-colors group"
              >
                <span className="font-display text-xs tracking-widest uppercase text-white/20 group-hover:text-white/40 w-20">
                  LinkedIn
                </span>
                <span className="text-sm">ganesh-kumar-modanwal ↗</span>
              </a>
              <a
                href="https://github.com/ganeshmod"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-white/40 hover:text-white transition-colors group"
              >
                <span className="font-display text-xs tracking-widest uppercase text-white/20 group-hover:text-white/40 w-20">
                  GitHub
                </span>
                <span className="text-sm">ganeshmod ↗</span>
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {status === "sent" ? (
              <div className="border border-white/10 p-10 flex flex-col items-start gap-4">
                <span className="font-display text-xs text-white/30 tracking-widest uppercase">Message sent</span>
                <p className="text-white/60">Thanks for reaching out! I&apos;ll get back to you soon.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="font-display text-xs text-white/30 hover:text-white tracking-widest uppercase transition-colors mt-4"
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-display text-xs text-white/25 tracking-widest uppercase block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border border-white/10 text-white/70 placeholder:text-white/20 px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="font-display text-xs text-white/25 tracking-widest uppercase block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border border-white/10 text-white/70 placeholder:text-white/20 px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="font-display text-xs text-white/25 tracking-widest uppercase block mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border border-white/10 text-white/70 placeholder:text-white/20 px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors resize-none"
                    placeholder="Tell me about the role or project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="font-display text-xs tracking-widest uppercase px-8 py-3 bg-white text-black hover:bg-white/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 w-full"
                >
                  {status === "sending" ? "Sending..." : "Send message →"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-xs text-white/15 tracking-widest uppercase">
            © 2025 Ganesh Kumar Modanwal
          </span>
          <span className="font-display text-xs text-white/15 tracking-widest uppercase">
            Built with Next.js · Tailwind CSS
          </span>
        </div>
      </div>
    </section>
  );
}
