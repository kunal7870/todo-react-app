import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-slate-600 dark:bg-zinc-800 text-white dark:text-violet-200 transition-all">
      <div className="logo text-2xl font-bold">iTask</div>
      <ul className="flex gap-6 items-center">

        <li>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-violet-500 hover:bg-violet-600 px-3 py-1 rounded-md transition-transform transform hover:scale-105"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
