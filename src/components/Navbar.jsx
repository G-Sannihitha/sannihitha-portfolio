import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo/Name - Left side */}
          <div className="text-xl font-bold text-gray-900 dark:text-white">
            Sannihitha
          </div>
          
          {/* Navigation Items - Center */}
          <div className="hidden md:flex space-x-8 mr-16"> {/* Added margin-right to make space for theme toggle */}
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`transition-all duration-300 font-medium ${
                  activeSection === item.name.toLowerCase() 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Spacer for mobile - keeps layout balanced */}
          <div className="md:hidden w-12"></div>

          {/* Mobile menu button */}
          <button className="md:hidden bg-white dark:bg-gray-800 p-2 rounded-lg shadow">
            <i className="fas fa-bars text-gray-600 dark:text-gray-300"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;