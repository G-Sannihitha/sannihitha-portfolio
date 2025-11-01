import React from "react";

const About = () => {
  const stats = [
    {
      number: "2+",
      label: "Years Experience",
      sub: "Software Engineer at NCR Voyix",
    },
    {
      number: "AI & ML",
      label: "Specialization",
      sub: "Innovation & Implementation",
    },
    {
      number: "M.S. CS",
      label: "Illinois Tech",
      sub: "Expected Dec 2025",
    },
    {
      number: "5+",
      label: "Projects",
      sub: "Full-Stack & AI Applications",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-[90vh] flex flex-col items-center justify-center bg-white dark:bg-gray-900 scroll-mt-24 lg:scroll-mt-32 mt-24 lg:mt-32"
    >
      {/* ✅ Centered Section Title */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
          <span className="text-blue-600 dark:text-blue-400">About</span> Me
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg mt-3 max-w-2xl mx-auto">
          A quick insight into my background, passions, and professional journey.
        </p>
      </div>

      {/* ✅ Content Area (Text + Image Side by Side) */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-10 gap-10 lg:gap-12">
        {/* Left: Text Section */}
        <div className="flex-1 text-justify space-y-6">
          <div className="space-y-5 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            <p>
              I'm a passionate Software Engineer with a love for turning complex
              problems into elegant solutions. My journey in tech started with
              curiosity and evolved into building scalable applications that
              make a difference.
            </p>
            <p>
              Currently advancing my expertise through a Master's in Computer
              Science at Illinois Institute of Technology, diving deep into
              machine learning, big data technologies, and cutting-edge software
              architecture.
            </p>
            <p>
              What drives me? The thrill of creating something from nothing, the
              challenge of optimizing performance, and the satisfaction of
              seeing users benefit from technology I've helped build. When I'm
              not coding, you'll find me exploring the latest in AI research,
              contributing to open-source, or experimenting with new frameworks.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 pt-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 text-center"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.number}
                </h3>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {stat.label}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="flex-1 flex justify-center lg:justify-end relative">
          <div className="relative w-72 h-72 lg:w-80 lg:h-80 group">
            {/* Soft Glow */}
            <div className="absolute -inset-6 bg-gradient-to-br from-blue-300/30 via-purple-300/30 to-green-300/30 rounded-[2rem] blur-3xl opacity-70 animate-pulse"></div>

            {/* Gradient Frame */}
            <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden shadow-2xl border-[3px] border-transparent bg-gradient-to-tr from-blue-400 via-white to-green-400 dark:from-blue-800 dark:via-gray-900 dark:to-green-700 p-[3px]">
              <div className="rounded-[1.3rem] overflow-hidden h-full">
                <img
                  src="/profile.jpg"
                  alt="Sannihitha Gudimalla"
                  className="w-full h-full object-cover rounded-[1.3rem] transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Decorative Blurs */}
            <div className="absolute -top-8 -right-8 w-20 h-20 bg-blue-300 dark:bg-blue-800 rounded-full blur-xl opacity-40"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-green-300 dark:bg-green-700 rounded-full blur-xl opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
