import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">Experience</h2>

      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white dark:bg-neutral-900 shadow-card">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-semibold">Software Engineer I — NCR Corporation (NCR Voyix)</h3>
          <span className="text-sm text-neutral-500">2022 – 2023</span>
        </div>

        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Contributed to the enterprise <strong>Promotion & Loyalty Platform</strong>, building and optimizing backend microservices used by global retailers.
        </p>

        <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
          <li>Developed microservices in <strong>Java (Spring Boot)</strong> and <strong>C++</strong> improving API reliability and throughput.</li>
          <li>Optimized SQL and service flows, reducing transaction latency by <strong>~20%</strong>.</li>
          <li>Built <strong>CI/CD</strong> pipelines with Jenkins; improved release cadence and automated testing.</li>
          <li>Collaborated across teams in Agile sprints; deployed services on <strong>AWS</strong>.</li>
        </ul>

        <div className="mt-3 text-xs text-neutral-500">
          Tech: Java • C++ • Spring Boot • MySQL • AWS • Jenkins • REST APIs
        </div>
      </div>
    </section>
  );
}
