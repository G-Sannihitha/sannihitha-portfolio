import React from "react";

const projects = [
  {
    title: "Recipe Genie 🧑‍🍳",
    description:
      "AI-powered cooking assistant to discover, generate, and refine recipes through natural conversation. ChatGPT-style interface with saved chat history.",
    bullets: [
      "Built with React, FastAPI, Firebase Auth/Firestore, OpenAI API",
      "Deployed on Render • Responsive light/dark theme",
    ],
    tech: ["React", "FastAPI", "Firebase", "OpenAI", "Render"],
    live: "https://recipe-genie-frontend.onrender.com",
    code: "https://github.com/G-Sannihitha/recipe-genie",
    image:
      "https://images.unsplash.com/photo-1546549039-49ec5d0b8b61?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "NCR Loyalty Platform (Enterprise)",
    description:
      "Promotion & Loyalty Engine microservices powering personalized offers for global retailers.",
    bullets: [
      "Developed microservices in Java (Spring Boot) & C++; improved API reliability",
      "Optimized SQL and service flows; reduced transaction latency by ~20%",
    ],
    tech: ["Java", "C++", "Spring Boot", "MySQL", "AWS", "Jenkins"],
    live: null,
    code: null,
    image:
      "https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">Projects</h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article key={p.title} className="rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-card">
            <img src={p.image} alt="" className="h-44 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400 text-sm">{p.description}</p>

              <ul className="mt-3 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                {p.bullets.map((b) => <li key={b}>• {b}</li>)}
              </ul>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800">{t}</span>
                ))}
              </div>

              <div className="mt-4 flex gap-3">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer"
                    className="text-sm inline-flex items-center rounded-md bg-brand-600 hover:bg-brand-700 text-white px-3.5 py-2">
                    View Live
                  </a>
                )}
                {p.code ? (
                  <a href={p.code} target="_blank" rel="noreferrer"
                    className="text-sm inline-flex items-center rounded-md border border-neutral-300 dark:border-neutral-700 px-3.5 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-800">
                    View Code
                  </a>
                ) : (
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 italic self-center">
                    Proprietary work — details on request
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
