"use client";

export default function About() {
  return (
    <section id="about" className="py-32 max-w-6xl mx-auto px-6">
      <div className="flex items-center gap-4 mb-16">
        <span className="font-display text-xs text-white/20 tracking-[0.3em] uppercase">01</span>
        <span className="h-px flex-1 max-w-[40px] bg-white/10" />
        <span className="font-display text-xs text-white/20 tracking-[0.3em] uppercase">About</span>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-8">
            I build things for the web — and care about every detail.
          </h2>
          <div className="space-y-4 text-white/50 leading-relaxed">
            <p>
              I&apos;m a B.Tech IT graduate (2025) from Inderprastha Engineering College, Ghaziabad,
              currently based in <span className="text-white/80">Bengaluru</span>. I&apos;ve worked
              professionally at Insoftlink Software, New Delhi, where I built modules for{" "}
              <span className="text-white/80">ERP School Aura</span> — a full-scale school management system.
            </p>
            <p>
              My stack revolves around the{" "}
              <span className="text-white/80">MERN ecosystem</span> — React, Next.js, Node.js,
              Express, and MongoDB. I&apos;ve solved <span className="text-white/80">300+ LeetCode</span>{" "}
              problems and enjoy thinking through both UI and system design.
            </p>
            <p>
              Right now I&apos;m actively looking for{" "}
              <span className="text-white/80">frontend or full-stack roles</span> at startups
              in Bengaluru — places where I can move fast, own features, and grow.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-px bg-white/5">
          {[
            { num: "1+", label: "Year of experience" },
            { num: "300+", label: "LeetCode problems" },
            { num: "5+", label: "Projects shipped" },
            { num: "MERN", label: "Primary stack" },
          ].map((s) => (
            <div key={s.label} className="bg-[#0a0a0a] p-8">
              <div className="font-display text-3xl font-bold text-white mb-2">{s.num}</div>
              <div className="font-display text-xs text-white/30 tracking-widest uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
