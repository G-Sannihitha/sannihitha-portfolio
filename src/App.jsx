import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [dark, setDark] = useState(() =>
    window.matchMedia?.("(prefers-color-scheme: dark)").matches
  );
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="w-full min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-200">
      <Navbar dark={dark} setDark={setDark} />
      <main className="w-full">
        <div className="max-w-6xl mx-auto">
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
