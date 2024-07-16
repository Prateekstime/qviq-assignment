import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.theme || 'light');

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme} className="p-2 bg-yellow-500 text-white">
      Toggle {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  );
};

export default ThemeToggle;
