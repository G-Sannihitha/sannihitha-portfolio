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
        "Engineered and optimized microservices for NCR Customer Loyalty Solution, processing 50M+ daily transactions for global retail clients",
        "Developed core Promotion Engine components using Java Spring Boot and C++, reducing average transaction processing time by 20%",
        "Designed and implemented RESTful APIs that improved POS system integration accuracy by 15% and enhanced e-commerce interoperability",
        "Optimized complex SQL queries and database operations, achieving 30% faster data retrieval and improved system responsiveness",
        "Architected scalable backend services handling peak loads of 10,000+ concurrent users with 99.9% uptime",
        "Resolved critical multi-threaded concurrency issues, increasing system stability by 15% and reducing error rates by 25%",
        "Collaborated in Agile teams to deliver 10+ major features, following CI/CD practices with Jenkins and automated testing",
        "Implemented comprehensive unit and integration tests covering 85% of codebase, reducing production bugs by 40%",
        "Conducted code reviews and mentored 2 junior developers, improving team code quality and best practices adoption",
        "Participated in system architecture discussions and contributed to technical design documents for new features"
      ],
      technologies: ["Java", "Spring Boot", "C++", "SQL", "GCP", "Jenkins", "Microservices", "REST APIs", "Docker", "Agile", "CI/CD"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-blue-600 dark:text-blue-400">Work</span>{" "}
            <span className="text-gray-900 dark:text-white">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and contributions to scalable software solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-8 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Header Section */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.role}
                  </h3>
                  <div className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    {exp.company}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">{exp.location}</div>
                </div>
                <div className="mt-4 md:mt-0 md:text-right">
                  <div className="bg-blue-100 dark:bg-blue-900/30 inline-block px-4 py-2 rounded-full text-blue-700 dark:text-blue-300 font-semibold border border-blue-200 dark:border-blue-800">
                    {exp.period}
                  </div>
                </div>
              </div>

              {/* Description Points */}
              <ul className="space-y-4 mb-8">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300 leading-relaxed">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1.5 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Technologies & Skills
                </h4>
                <div className="flex flex-wrap gap-3">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;