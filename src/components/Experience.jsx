import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Software Engineer I",
      company: "NCR Voyix",
      location: "Hyderabad, India",
      period: "Jan 2022 – Dec 2023",
      description: [
        "Contributed to NCR Customer Loyalty Solution, a large-scale platform powering loyalty programs for global retailers",
        "Designed and developed core microservices for Promotion Engine using Java Spring Boot and C++",
        "Reduced average transaction time by 20% and supported millions of daily transactions",
        "Built REST APIs enhancing POS and e-commerce system interoperability with 15% accuracy improvement",
        "Optimized complex SQL queries and backend services, significantly improving data retrieval speeds",
        "Diagnosed and resolved complex multi-threaded concurrency issues, increasing system stability by 15%"
      ],
      technologies: ["Java", "Spring Boot", "C++", "SQL", "GCP", "Jenkins", "Microservices"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            My professional journey and contributions to scalable software solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className="glass-card rounded-2xl p-8 mb-8 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    {exp.role}
                  </h3>
                  <div className="text-xl text-accent-color font-semibold mb-2">
                    {exp.company}
                  </div>
                  <div className="text-text-secondary">{exp.location}</div>
                </div>
                <div className="mt-4 md:mt-0 md:text-right">
                  <div className="glass-card inline-block px-4 py-2 rounded-full text-text-primary font-semibold">
                    {exp.period}
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start text-text-secondary leading-relaxed">
                    <span className="text-accent-color mr-3 mt-1">▸</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-accent-color/10 text-accent-color rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;