import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'gudimallasannihitha@gmail.com',
      link: 'mailto:gudimallasannihitha@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      label: 'Phone',
      value: '+1 (872) 314-5237',
      link: 'tel:+18723145237'
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: 'Chicago, IL',
      link: '#'
    },
    {
      icon: 'fab fa-linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/sannihitha-gudimalla',
      link: 'https://linkedin.com/in/sannihitha-gudimalla-80459015b'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-transparent to-blue-50/50 dark:to-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-text-primary mb-6">
              Let's Connect
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <a
                  key={method.label}
                  href={method.link}
                  className="glass-card rounded-2xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl text-accent-color mb-3 group-hover:scale-110 transition-transform">
                    <i className={method.icon}></i>
                  </div>
                  <div className="font-semibold text-text-primary mb-1">
                    {method.label}
                  </div>
                  <div className="text-text-secondary text-sm">
                    {method.value}
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass-card rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-text-primary mb-4 text-center">
                Follow Me
              </h4>
              <div className="flex justify-center space-x-6">
                <a href="https://github.com/G-Sannihitha" className="text-2xl text-text-secondary hover:text-accent-color transition-colors">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/sannihitha-gudimalla-80459015b" className="text-2xl text-text-secondary hover:text-accent-color transition-colors">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="mailto:gudimallasannihitha@gmail.com" className="text-2xl text-text-secondary hover:text-accent-color transition-colors">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-text-primary font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-glass-border bg-white/50 dark:bg-gray-800/50 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-color focus:border-transparent transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-text-primary font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-glass-border bg-white/50 dark:bg-gray-800/50 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-color focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-text-primary font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-glass-border bg-white/50 dark:bg-gray-800/50 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-color focus:border-transparent transition-all"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-text-primary font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-glass-border bg-white/50 dark:bg-gray-800/50 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-color focus:border-transparent transition-all resize-vertical"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-accent-color hover:bg-accent-hover text-white py-4 px-8 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;