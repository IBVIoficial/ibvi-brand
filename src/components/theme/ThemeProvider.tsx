'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { applyTheme, toggleDarkMode } from '@/lib/theme';
import { darkTheme, lightTheme } from '@/app/theme';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: 'dark' | 'light' | 'system';
};

type ThemeProviderState = {
  theme: 'dark' | 'light' | 'system';
  setTheme: (theme: 'dark' | 'light' | 'system') => void;
};

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'system',
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<'dark' | 'light' | 'system'>(defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      
      root.classList.add(systemTheme);
      toggleDarkMode(systemTheme === 'dark');
      applyTheme(systemTheme === 'dark' ? darkTheme : lightTheme);
    } else {
      root.classList.add(theme);
      toggleDarkMode(theme === 'dark');
      applyTheme(theme === 'dark' ? darkTheme : lightTheme);
    }
  }, [theme]);

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
