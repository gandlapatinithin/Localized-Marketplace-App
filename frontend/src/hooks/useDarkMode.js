import { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return [theme, toggleTheme];
}