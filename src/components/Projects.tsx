"use client";

const projects = [
  {
    num: "01",
    title: "ERP School Aura",
    desc: "A full-scale school management system built at Insoftlink Software. Handles student records, attendance, fee management, and admin dashboards for multiple schools.",
    tags: ["React.js", "Node.js", "Express", "MongoDB"],
    type: "Professional",
    link: null,
  },
  {
    num: "02",
    title: "E-Commerce-SSR",
    desc: "A server-side rendered e-commerce site built with Next.js. Features product listing, dynamic routing, and a sleek UI. An assessment project showcasing my frontend skills.",
    tags: ["Next.js", "JavaScript", "TailwindCSS","Redux",],
    type: "Assessment",
    link: "e-commerce-ssr-96ss.vercel.app/",
  },
  {
    num: "03",
    title: "MyResto — Food Ordering App",
    desc: "Full-stack food ordering app with a C# backend. Built the complete frontend — auth with sessionStorage, food cards, carousel, cart flow, and an orange-themed UI.",
    tags: ["React", "C# Backend", "SQL Server", "sessionStorage"],
    type: "Collaborative",
    link: "https://github.com/ganeshmod",
  },
  {
    num: "04",
    title: "Personal Portfolio",
    desc: "This portfolio — built with Next.js 14, TypeScript, and Tailwind CSS. Dark minimal aesthetic, animated hero, and smooth section transitions.",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS"],
    type: "Personal",
    link: "https://github.com/ganeshmod",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-display text-xs text-white/20 tracking-[0.3em] uppercase">03</span>
          <span className="h-px flex-1 max-w-[40px] bg-white/10" />
          <span className="font-display text-xs text-white/20 tracking-[0.3em] uppercase">Projects</span>
        </div>

        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-16">
          Things I&apos;ve built
        </h2>

        <div className="space-y-px bg-white/5">
          {projects.map((p) => (
            <div
              key={p.num}
              className="bg-[#0a0a0a] p-8 md:p-10 group card-glow border border-transparent hover:border-white/5 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-display text-xs text-white/15 tracking-widest">{p.num}</span>
                    <span className="font-display text-xs text-white/25 tracking-widest uppercase border border-white/10 px-2 py-0.5">
                      {p.type}
                    </span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-white/40 leading-relaxed max-w-2xl mb-6">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-display text-xs text-white/30 tracking-widest uppercase"
                      >
                        {tag}
                        <span className="text-white/10 ml-2">·</span>
                      </span>
                    ))}
                  </div>
                </div>

                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="font-display text-xs text-white/20 hover:text-white tracking-widest uppercase transition-colors flex items-center gap-2 shrink-0"
                  >
                    View ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
