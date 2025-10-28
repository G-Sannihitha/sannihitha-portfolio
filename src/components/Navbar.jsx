import React from "react";

export default function Navbar({ dark, setDark }) {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/70 dark:bg-neutral-950/70 backdrop-blur-md border-b border-neutral-200/60 dark:border-neutral-800 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight text-base sm:text-lg">
          <span className="mr-1">👩‍💻</span> Sannihitha Gudimalla
        </a>
        <div className="flex items-center gap-6 text-sm font-medium">
          <a href="#projects" className="hover:text-brand-600">Projects</a>
          <a href="#experience" className="hover:text-brand-600">Experience</a>
          <a href="#skills" className="hover:text-brand-600">Skills</a>
          <a href="#contact" className="hover:text-brand-600">Contact</a>
          <button
            onClick={() => setDark(v => !v)}
            className="rounded-md border border-neutral-300/70 dark:border-neutral-700 px-3 py-1.5 text-xs sm:text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900"
            aria-label="Toggle color scheme"
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </nav>
    </header>
  );
}
