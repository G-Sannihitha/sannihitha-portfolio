import React from "react";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-neutral-500 dark:text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Sannihitha Gudimalla</p>
        <p>Built with ❤️ using React & Tailwind</p>
      </div>
    </footer>
  );
}
