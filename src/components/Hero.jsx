import React from "react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-200 rounded-full mb-8 dark:bg-blue-900/20 dark:border-blue-800">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-blue-700 text-sm font-medium dark:text-blue-300">
              Available for new opportunities
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight dark:text-white">
            Sannihitha
            <br />
            <span className="text-blue-600 dark:text-blue-400">Gudimalla</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 font-light mb-8 dark:text-gray-300">
            Software Engineer & AI Specialist
          </p>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto dark:text-gray-400">
            Building AI-powered full-stack applications that solve real problems. Ex-NCR Software Engineer. Currently pursuing MSCS at IIT Chicago - actively seeking Software Engineer roles.
          </p>

          {/* CTA Buttons - Same color and style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            {[
              {
                text: "View My Projects",
                href: "#projects",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                ),
              },
              {
                text: "View My Resume",
                href: "/Sannihitha_resume.pdf",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                ),
              },
              {
                text: "Get In Touch",
                href: "#contact",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                ),
              },
            ].map((btn, index) => (
              <a
                key={index}
                href={btn.href}
                target={btn.text === "View My Resume" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                <span>{btn.text}</span>
                {btn.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
