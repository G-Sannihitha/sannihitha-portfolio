import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Recipe Genie - AI Cooking Assistant",
      description: "Full-stack AI application providing personalized recipe generation and real-time cooking guidance using OpenAI GPT-4o.",
      technologies: ["React", "FastAPI", "Firebase", "OpenAI GPT-4o", "TailwindCSS", "Render"],
      category: "ai",
      liveDemo: "https://recipe-genie-fz7c.onrender.com",
      github: "https://github.com/G-Sannihitha/Recipe-Genie",
      images: [
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop", // Cooking
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop", // AI Chat
        "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=600&h=400&fit=crop"  // Recipe
      ],
      hasDemo: true
    },
    {
      id: 2,
      title: "NCR Customer Loyalty Solution",
      description: "Large-scale microservices platform powering loyalty programs for global retailers. Processed millions of daily transactions.",
      technologies: ["Java", "Spring Boot", "C++", "GCP", "Microservices", "SQL", "Jenkins", "REST APIs"],
      category: "backend",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", // Analytics
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop", // Cloud Systems
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"  // Retail Tech
      ],
      features: [
        "Reduced transaction time by 20%",
        "Supported 1M+ daily transactions",
        "Improved accuracy by 15%"
      ],
      professional: true
    },
    {
      id: 3,
      title: "Search Engine - Information Retrieval",
      description: "Comprehensive search engine with web crawling, TF-IDF indexing, and cosine similarity for document retrieval.",
      technologies: ["Python", "Scrapy", "Scikit-Learn", "Flask", "TF-IDF", "Cosine Similarity"],
      category: "ai",
      github: "https://github.com/G-Sannihitha/IR_PROJECT",
      images: [
        "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=600&h=400&fit=crop", // Search
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop", // Web Crawling
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop"  // Data Processing
      ]
    },
    {
      id: 4,
      title: "YouTube Trending Analytics",
      description: "Big data analytics on trending YouTube videos across 10 countries with sentiment analysis and clustering.",
      technologies: ["Python", "Pandas", "Scikit-Learn", "K-means", "YouTube API", "NLP"],
      category: "data-science",
      github: "https://github.com/G-Sannihitha/CSP571DPA_PROJECT",
      images: [
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop", // YouTube Analytics
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", // Data Visualization
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop"  // Machine Learning
      ]
    }
  ];

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'ai', label: 'AI/ML' },
    { key: 'data-science', label: 'Data Science' },
    { key: 'backend', label: 'Backend' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of my work showcasing full-stack development, AI integration, and data analytics
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(filter => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid - Consistent Height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Separate Project Card Component for Carousel
const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col h-full">
      {/* Image Carousel */}
      <div className="relative h-64 overflow-hidden group">
        <img
          src={project.images[currentImageIndex]}
          alt={`${project.title} - Image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-500"
        />
        
        {/* Carousel Controls */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <i className="fas fa-chevron-left text-sm"></i>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <i className="fas fa-chevron-right text-sm"></i>
            </button>
          </>
        )}
        
        {/* Image Indicators */}
        {project.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-white' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        )}
        
        {/* Professional Badge */}
        {project.professional && (
          <div className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Professional Work
          </div>
        )}
      </div>

      {/* Project Content - Consistent Height */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Features List */}
        {project.features && (
          <ul className="mb-4 space-y-1">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map(tech => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full text-xs">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          {project.hasDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded-lg text-center transition-colors font-medium"
            >
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm py-2 px-4 rounded-lg text-center transition-colors font-medium"
            >
              Code
            </a>
          )}
          {project.professional && (
            <span className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 text-sm py-2 px-4 rounded-lg text-center">
              Proprietary
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;