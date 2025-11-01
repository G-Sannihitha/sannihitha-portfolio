import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: "🎨",
      skills: [
        "React",
        "JavaScript",
        "TailwindCSS",
        "HTML/CSS",
        "TypeScript",
        "Next.js",
      ],
      gradient: "from-blue-400 to-indigo-400",
    },
    {
      category: "Backend Development",
      icon: "⚙️",
      skills: [
        "Python",
        "Java",
        "FastAPI",
        "Spring Boot",
        "Node.js",
        "REST APIs",
      ],
      gradient: "from-green-400 to-emerald-400",
    },
    {
      category: "AI & Cloud",
      icon: "🤖",
      skills: [
        "OpenAI GPT",
        "AWS",
        "GCP",
        "Docker",
        "Machine Learning",
        "Computer Vision",
      ],
      gradient: "from-purple-400 to-pink-400",
    },
    {
      category: "Databases",
      icon: "💾",
      skills: ["MySQL", "MongoDB", "Redis", "Firebase", "PostgreSQL", "SQLite"],
      gradient: "from-orange-400 to-amber-400",
    },
  ];

  const tools = [
    "Git",
    "GitHub",
    "JIRA",
    "Postman",
    "VS Code",
    "IntelliJ",
    "Linux",
    "Agile",
    "Scrum",
    "CI/CD",
    "Microservices",
    "RESTful APIs",
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-white dark:bg-gray-900 scroll-mt-24 lg:scroll-mt-32"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* ✅ Section Title (Matches About Me Style) */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="text-blue-600 dark:text-blue-400">Technical</span> Skills
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
          A refined overview of my expertise across software development, AI, and cloud technologies.
        </p>

        {/* ✅ Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-8 shadow-md border border-gray-100 dark:border-gray-800 bg-white/70 dark:bg-gray-800/40 backdrop-blur-xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex items-center justify-center mb-6">
                <div className={`p-3 rounded-full bg-gradient-to-r ${cat.gradient} text-2xl`}>
                  {cat.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-5">
                {cat.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {cat.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 text-gray-800 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 hover:shadow-md hover:scale-105 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Tools Section */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-10 shadow-inner">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 transition-all duration-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
