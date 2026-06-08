"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const dots: { x: number; y: number; vx: number; vy: number; opacity: number }[] = [];
    for (let i = 0; i < 60; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.05,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;

        ctx.beginPath();
        ctx.arc(d.x, d.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${d.opacity})`;
        ctx.fill();
      });

      // Draw connections
      dots.forEach((a, i) => {
        dots.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(255,255,255,${0.04 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
      />

      {/* Radial gradient center glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a1a1a_0%,_#0a0a0a_70%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24">
        <div className="animate-fade-up delay-100">
          <span className="font-display text-xs text-white/30 tracking-[0.3em] uppercase">
            — available for work in Bengaluru
          </span>
        </div>

        <h1 className="mt-6 animate-fade-up delay-200">
          <span className="block font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight">
            Ganesh Kumar
          </span>
          <span className="block font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-white/20">
            Modanwal
          </span>
        </h1>

        <div className="mt-8 flex items-center gap-3 animate-fade-up delay-300">
          <span className="h-px w-8 bg-white/20" />
          <p className="font-display text-sm text-white/40 tracking-widest uppercase">
            Frontend / Full Stack Developer
          </p>
        </div>

        <p className="mt-6 max-w-xl text-white/50 text-lg leading-relaxed animate-fade-up delay-400">
          Building fast, clean, and scalable web apps with{" "}
          <span className="text-white/80">React</span>,{" "}
          <span className="text-white/80">Next.js</span>, and{" "}
          <span className="text-white/80">Node.js</span>. I care about both the
          code and the experience.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 animate-fade-up delay-500">
          <a
            href="#projects"
            className="font-display text-xs tracking-widest uppercase px-6 py-3 bg-white text-black hover:bg-white/90 transition-colors duration-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="font-display text-xs tracking-widest uppercase px-6 py-3 border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors duration-200"
          >
            Get in touch
          </a>
        </div>

        {/* Social links */}
        <div className="mt-12 flex items-center gap-6 animate-fade-up delay-600">
          <a
            href="https://github.com/ganeshmod"
            target="_blank"
            rel="noreferrer"
            className="font-display text-xs text-white/25 hover:text-white/70 tracking-widest uppercase transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/ganesh-kumar-modanwal-01a287251/"
            target="_blank"
            rel="noreferrer"
            className="font-display text-xs text-white/25 hover:text-white/70 tracking-widest uppercase transition-colors"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up delay-600">
        <span className="font-display text-xs text-white/20 tracking-widest uppercase">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
