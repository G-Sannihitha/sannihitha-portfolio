import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-glass-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-text-secondary mb-4 md:mb-0">
            © {currentYear} Sannihitha Gudimalla. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/G-Sannihitha" 
              className="text-text-secondary hover:text-accent-color transition-colors text-lg"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://linkedin.com/in/sannihitha-gudimalla-80459015b" 
              className="text-text-secondary hover:text-accent-color transition-colors text-lg"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="mailto:gudimallasannihitha@gmail.com" 
              className="text-text-secondary hover:text-accent-color transition-colors text-lg"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;