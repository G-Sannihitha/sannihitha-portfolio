import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Recipe Genie – AI Cooking Assistant",
    description: "An AI-powered cooking companion that generates personalized recipes through natural conversation. Features a ChatGPT-style interface with real-time chat-based recipe generation, step-by-step cooking guidance, and smart culinary suggestions powered by OpenAI GPT-4o. Includes Google/email authentication, chat history management, and theme customization in a fully responsive full-stack application.",
    technologies: ["React", "FastAPI", "Firebase", "OpenAI GPT-4o", "TailwindCSS", "Firestore"],
    category: "ai",
    hasDemo: true,
    liveDemo: "https://recipe-genie-frontend.onrender.com/",
    github: "https://github.com/G-Sannihitha/Recipe-Genie",
    image: "https://github.com/user-attachments/assets/6a0f3810-ef80-4c15-9e28-2c79a32ea25a"
  },
  {
    id: 2,
    title: "NCR Customer Loyalty Platform",
    description: "Enterprise-grade microservices platform powering AI-driven loyalty solutions including predictive offer personalization, intelligent promotion engine, and customer behavior analytics. Leveraged machine learning models for real-time recommendation systems, fraud detection, and customer segmentation across 50M+ daily transactions. Deployed on GCP with omnichannel capabilities for global retailers.",
    technologies: ["Java", "Spring Boot", "GCP", "Microservices", "SQL", "Jenkins", "Machine Learning", "Python", "Data Analytics"],
    category: "backend",
    professional: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlAxVsnf5295qZzPPX-PzGLKwdbmCKbz413w&s"
  },
  {
    id: 3,
    title: "Search Engine – Information Retrieval",
    description: "A full-featured custom search engine implementing a complete information retrieval pipeline. Features a Scrapy-based web crawler for content acquisition, TF-IDF vectorization using Scikit-learn for document indexing, and cosine similarity ranking for relevant document retrieval. Built with Flask for query processing and result presentation.",
    technologies: ["Python", "Flask", "Scikit-learn", "TF-IDF", "Cosine Similarity", "Scrapy"],
    category: "ai",
    github: "https://github.com/G-Sannihitha/SearchEngine_InformationRetrieval.git",
    image: "/SearchEngine.png"
  },
  {
    id: 4,
    title: "Data Analysis on Trending YouTube Videos",
    description: "Comprehensive analysis of 40,000+ trending YouTube videos across 10 countries, identifying key success patterns through advanced clustering and NLP techniques. Uncovered optimal publishing times, title length impact, and engagement drivers using K-means clustering and sentiment analysis. Delivered actionable insights for content strategy optimization, revealing correlations between metadata features and video performance metrics.",
    technologies: ["Python", "Pandas", "Scikit-learn", "NLP", "K-means", "Data Visualization", "Matplotlib", "Seaborn"],
    category: "data-science",
    github: "https://github.com/G-Sannihitha/Exploratory-Data-Analysis-on-Trending-YouTube-Videos.git",
    image: "/Exploratory data analysis.png"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 scroll-mt-24 lg:scroll-mt-32">
      <div className="container mx-auto px-6 align-items-center">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-blue-600 dark:text-blue-400">Featured</span>{" "}
            <span className="text-gray-900 dark:text-white">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-semibold">
            Showcasing my work in AI, backend systems, and data analytics
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 h-full flex flex-col">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-600 animate-pulse"></div>
        )}
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full transition-all duration-700 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } ${
            project.professional 
              ? 'object-contain p-4'
              : 'object-contain group-hover:scale-105'
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        
        {/* Professional Badge */}
        {project.professional && (
          <div className="absolute top-4 left-4">
            <span className="bg-emerald-600 text-white text-xs px-3 py-1.5 rounded-full font-medium">
              Professional
            </span>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-black/70 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
            {project.category === 'ai' ? 'AI/ML' : 
             project.category === 'data-science' ? 'Data Science' : 'Backend'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          {project.hasDemo && project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2.5 px-4 rounded-lg font-medium transition-colors duration-300"
            >
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-center py-2.5 px-4 rounded-lg font-medium transition-colors duration-300"
            >
              View Code
            </a>
          )}
          {project.professional && !project.github && (
            <span className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 text-center py-2.5 px-4 rounded-lg font-medium">
              Proprietary
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;