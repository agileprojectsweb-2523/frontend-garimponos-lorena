'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark'); // Padrão começa Dark

  // Verifica se o usuário já tem preferência salva ou do sistema
  useEffect(() => {
    const savedTheme = localStorage.getItem('streetvibe-theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Atualiza o atributo no HTML quando o tema muda
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('streetvibe-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}