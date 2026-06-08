"use client";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React.js", "Next.js 14", "TypeScript", "Tailwind CSS", "Redux Toolkit", "HTML5 / CSS3"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST API Design", "JWT Auth", "Mongoose", "MongoDB"],
  },
  {
    category: "Tools & Others",
    skills: ["Git & GitHub", "Postman", "VS Code", "Vite", "Vercel", "Figma (basics)"],
  },
  {
    category: "CS Fundamentals",
    skills: ["DSA (300+ LC)", "OOP Concepts", "OS Basics", "DBMS", "System Design (basics)"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-display text-xs text-white/20 tracking-[0.3em] uppercase">02</span>
          <span className="h-px flex-1 max-w-[40px] bg-white/10" />
          <span className="font-display text-xs text-white/20 tracking-[0.3em] uppercase">Skills</span>
        </div>

        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-16">
          Tools I work with
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {skillGroups.map((group) => (
            <div key={group.category} className="bg-[#0a0a0a] p-8 group">
              <h3 className="font-display text-xs text-white/25 tracking-widest uppercase mb-6">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-white/50 hover:text-white/90 transition-colors duration-200 cursor-default"
                  >
                    <span className="h-px w-3 bg-white/20 group-hover:bg-white/40 transition-colors" />
                    <span className="text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
