import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TailwindCSS", level: 80 },
        { name: "HTML/CSS", level: 90 }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Python", level: 88 },
        { name: "Java", level: 85 },
        { name: "FastAPI", level: 82 },
        { name: "Spring Boot", level: 80 }
      ]
    },
    {
      category: "AI & Cloud",
      skills: [
        { name: "OpenAI GPT", level: 85 },
        { name: "AWS", level: 75 },
        { name: "GCP", level: 80 },
        { name: "Docker", level: 78 }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 75 },
        { name: "Firebase", level: 82 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-transparent to-blue-50/50 dark:to-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={category.category}
              className="glass-card rounded-2xl p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-text-primary font-medium">{skill.name}</span>
                      <span className="text-accent-color font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-accent-color to-accent-hover h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;