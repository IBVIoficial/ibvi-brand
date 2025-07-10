import { createTheme } from '@/lib/theme';

// IBVI brand colors in HSL format
export const ibviColors = {
  teal: '191deg 38% 25%',
  gold: '39deg 87% 65%',
  cream: '43deg 90% 96%',
  nocturne: '212deg 58% 6%',
};

// Light theme based on IBVI brand colors
export const lightTheme = createTheme({
  name: 'light',
  colors: {
    background: ibviColors.cream,
    foreground: ibviColors.nocturne,
    
    card: ibviColors.cream,
    'card-foreground': '0deg 0% 11%',
    
    popover: ibviColors.cream,
    'popover-foreground': '0deg 0% 11%',
    
    primary: ibviColors.teal,
    'primary-foreground': ibviColors.cream,
    
    secondary: ibviColors.gold,
    'secondary-foreground': '0deg 0% 11%',
    
    muted: '43deg 20% 95%',
    'muted-foreground': '0deg 0% 40%',
    
    accent: ibviColors.gold,
    'accent-foreground': '0deg 0% 11%',
    
    destructive: '0deg 84% 60%',
    'destructive-foreground': '0deg 0% 98%',
    
    border: '0deg 0% 90%',
    input: '0deg 0% 90%',
    ring: ibviColors.teal,
  },
});

// Dark theme based on IBVI brand colors
export const darkTheme = createTheme({
  name: 'dark',
  colors: {
    background: ibviColors.nocturne,
    foreground: ibviColors.cream,
    
    card: '191deg 38% 15%',
    'card-foreground': ibviColors.cream,
    
    popover: '212deg 58% 10%',
    'popover-foreground': ibviColors.cream,
    
    primary: ibviColors.gold,
    'primary-foreground': '0deg 0% 11%',
    
    secondary: ibviColors.teal,
    'secondary-foreground': ibviColors.cream,
    
    muted: '212deg 58% 15%',
    'muted-foreground': '43deg 40% 80%',
    
    accent: ibviColors.gold,
    'accent-foreground': '0deg 0% 11%',
    
    destructive: '0deg 70% 50%',
    'destructive-foreground': '0deg 0% 98%',
    
    border: '212deg 58% 20%',
    input: '212deg 58% 20%',
    ring: ibviColors.gold,
  },
});
