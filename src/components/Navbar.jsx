import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // ✅ Dark mode toggle
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

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
      <div className="container mx-auto px-6 flex items-center">
        
        {/* Left Side - Name */}
        <div className="text-xl font-bold text-gray-900 dark:text-white">
          Sannihitha
        </div>

        {/* ✅ Nav items now right-aligned */}
        <div className="hidden md:flex space-x-8 ml-auto">
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

        {/* ✅ Dark Mode Toggle - stays to far right */}
        <button
          onClick={() => setDarkMode(prev => !prev)}
          className="ml-6 w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md"
        >
          {darkMode ? '🌞' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
