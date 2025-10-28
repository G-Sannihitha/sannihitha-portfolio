import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-slate-900 dark:bg-white mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                <p>
                  I'm a passionate Full Stack Developer and AI enthusiast with 2+ years of experience 
                  building scalable cloud applications and AI-driven solutions. Currently pursuing my 
                  Master's in Computer Science at Illinois Institute of Technology.
                </p>
                <p>
                  My expertise spans across modern web technologies, cloud platforms, and AI integration. 
                  I love creating innovative solutions that solve real-world problems and enhance user experiences.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                  or experimenting with AI models for creative applications.
                </p>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">2+</div>
                  <div className="text-slate-600 dark:text-slate-300 text-sm">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">10+</div>
                  <div className="text-slate-600 dark:text-slate-300 text-sm">Projects</div>
                </div>
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">5+</div>
                  <div className="text-slate-600 dark:text-slate-300 text-sm">Technologies</div>
                </div>
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">AI</div>
                  <div className="text-slate-600 dark:text-slate-300 text-sm">Specialization</div>
                </div>
              </div>
            </div>
            
            {/* Profile Image - Professional Design */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Image Container */}
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                  <img 
                    src="/src/assets/profile.jpg" 
                    alt="Sannihitha Gudimalla"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-slate-900 dark:bg-slate-100 rounded-2xl rotate-12 opacity-10"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-slate-900 dark:bg-slate-100 rounded-2xl -rotate-12 opacity-10"></div>
                
                {/* Professional Badge */}
                <div className="absolute -bottom-2 -right-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Open to Work
                </div>
              </div>
            </div>
          </div>

          {/* Signature */}
          <div className="text-center mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
            <p className="text-2xl font-light text-slate-900 dark:text-white italic">
              Sannihitha Gudimalla
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;