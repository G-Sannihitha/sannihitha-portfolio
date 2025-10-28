import React from "react";

const groups = [
  { title: "Languages", items: ["Python", "Java", "C++", "JavaScript/TypeScript", "SQL"] },
  { title: "Frontend",  items: ["React", "Vite", "TailwindCSS"] },
  { title: "Backend",   items: ["FastAPI", "Node.js", "REST APIs"] },
  { title: "Cloud & DB",items: ["Firebase", "MySQL", "AWS", "Render"] },
  { title: "AI/Other",  items: ["OpenAI API", "Git", "Jenkins", "Docker (basics)"] },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">Skills</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g) => (
          <div key={g.title} className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white dark:bg-neutral-900">
            <h3 className="font-semibold">{g.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800">
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
