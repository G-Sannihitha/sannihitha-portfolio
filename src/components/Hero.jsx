import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Sannihitha Gudimalla
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 font-semibold">
            Full Stack Developer & AI Enthusiast
          </p>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting scalable cloud applications and AI-driven solutions with modern technologies. 
            Passionate about building innovative digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </a>
            <a
              href="/Sannihitha_Gudimalla_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-slate-900 text-slate-900 dark:text-white dark:border-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900"
            >
              View My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;