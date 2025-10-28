import React from "react";

export default function Hero() {
  return (
    <section className="section pt-28 sm:pt-32 text-center bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-500/10 text-brand-600 ring-1 ring-brand-500/20 mb-5">
        Open to SDE / Full-Stack Internships
      </span>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
        Building scalable, intelligent apps<br className="hidden sm:block"/>
        <span className="bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">
          with Cloud & AI
        </span>
      </h1>

      <p className="mt-4 max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400 text-base sm:text-lg">
        I’m a Software Engineer and M.S. CS student at IIT Chicago. I love crafting
        thoughtful user experiences and robust backends. Highlights include <strong>Recipe Genie</strong> - an AI chef assistant - and backend engineering at <strong>NCR</strong>.
      </p>

      <div className="mt-6 flex justify-center gap-3">
        <a href="#projects" className="inline-flex items-center rounded-lg bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 shadow-card">
          View Projects
        </a>
        <a href="/Sannihitha_Gudimalla_Resume.pdf" className="inline-flex items-center rounded-lg border border-neutral-300 dark:border-neutral-700 px-5 py-2.5 hover:bg-neutral-50 dark:hover:bg-neutral-900">
          View Resume
        </a>
      </div>
    </section>
  );
}
