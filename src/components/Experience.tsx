"use client";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Insoftlink Software",
    location: "New Delhi, India",
    period: "2024 — 2025",
    desc: "Worked on ERP School Aura — a React/Node.js/Express/MongoDB school management platform. Built and maintained multiple frontend modules including student management, attendance tracking, fee collection, and admin dashboards.",
    highlights: [
      "Developed reusable React components reducing UI build time by 30%",
      "Integrated RESTful APIs for real-time data across modules",
      "Implemented role-based access control (RBAC) for admin/teacher/student views",
      "Collaborated with backend team on Express + MongoDB architecture",
    ],
    stack: ["React.js", "Node.js", "Express", "MongoDB", "REST APIs"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-display text-xs text-white/20 tracking-[0.3em] uppercase">04</span>
          <span className="h-px flex-1 max-w-[40px] bg-white/10" />
          <span className="font-display text-xs text-white/20 tracking-[0.3em] uppercase">Experience</span>
        </div>

        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-16">
          Where I&apos;ve worked
        </h2>

        <div className="space-y-px">
          {experiences.map((exp) => (
            <div key={exp.company} className="border-l border-white/10 pl-8 pb-12">
              {/* Timeline dot */}
              <div className="relative">
                <div className="absolute -left-[2.15rem] top-1.5 w-2 h-2 rounded-full border border-white/30 bg-[#0a0a0a]" />
              </div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-white">{exp.role}</h3>
                  <p className="font-display text-sm text-white/40 tracking-widest mt-1">
                    {exp.company} — {exp.location}
                  </p>
                </div>
                <span className="font-display text-xs text-white/25 tracking-widest uppercase shrink-0">
                  {exp.period}
                </span>
              </div>

              <p className="text-white/40 leading-relaxed mb-6 max-w-2xl">{exp.desc}</p>

              <ul className="space-y-2 mb-6">
                {exp.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-white/35 text-sm">
                    <span className="text-white/20 mt-0.5 shrink-0">→</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.stack.map((s) => (
                  <span
                    key={s}
                    className="font-display text-xs text-white/25 tracking-widest uppercase border border-white/10 px-3 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Open to work */}
          <div className="border-l border-dashed border-white/10 pl-8 pt-2">
            <div className="relative">
              <div className="absolute -left-[2.15rem] top-1.5 w-2 h-2 rounded-full bg-white/40 animate-pulse" />
            </div>
            <p className="font-display text-xs text-white/25 tracking-widest uppercase">
              Now — Open to new opportunities in Bengaluru
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
