/**
 * Theme creation utility for IBVI brand
 * Used to create consistent theme objects for light and dark mode
 */

export interface Theme {
  name: string;
  colors: Record<string, string>;
}

/**
 * Creates a theme object with the specified name and colors
 * @param theme The theme configuration
 * @returns A theme object
 */
export function createTheme(theme: Theme): Theme {
  return theme;
}

/**
 * Applies a theme to the document by setting CSS variables
 * @param theme The theme to apply
 */
export function applyTheme(theme: Theme): void {
  const root = document.documentElement;
  
  // Apply each color as a CSS variable
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });
}

/**
 * Toggles between light and dark mode
 * @param isDark Whether to enable dark mode
 */
export function toggleDarkMode(isDark: boolean): void {
  const root = document.documentElement;
  
  if (isDark) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
}
