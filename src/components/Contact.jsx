import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">Contact</h2>
      <p className="text-neutral-600 dark:text-neutral-400">
        Based in Chicago, IL • Open to Software Engineering .
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <a href="mailto:gudimallasannihitha@gmail.com" className="inline-flex items-center rounded-lg bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5">Email me</a>
        <a href="https://www.linkedin.com/in/sannihitha-gudimalla-80459015b" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-lg border border-neutral-300 dark:border-neutral-700 px-5 py-2.5 hover:bg-neutral-50 dark:hover:bg-neutral-900">LinkedIn</a>
        <a href="https://github.com/G-Sannihitha" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-lg border border-neutral-300 dark:border-neutral-700 px-5 py-2.5 hover:bg-neutral-50 dark:hover:bg-neutral-900">GitHub</a>
        <a href="/Sannihitha_Gudimalla_Resume.pdf" className="inline-flex items-center rounded-lg border border-neutral-300 dark:border-neutral-700 px-5 py-2.5 hover:bg-neutral-50 dark:hover:bg-neutral-900">Resume</a>
      </div>
    </section>
  );
}
