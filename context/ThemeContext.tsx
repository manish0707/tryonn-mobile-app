import React, {createContext, useContext, useState} from 'react';
import {DarkThemeColors, LightThemeColors} from '../theme/colors';

type ThemeMode = 'light' | 'dark';

interface IThemeContext {
  colors: typeof DarkThemeColors;
  theme: ThemeMode;
  setTheme: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<IThemeContext>({
  colors: LightThemeColors,
  theme: 'light',
  setTheme: () => {},
});

export default function ThemeProvider({children}: {children: React.ReactNode}) {
  const [theme, setTheme] = useState<ThemeMode>('light');

  const colors = theme === 'dark' ? DarkThemeColors : LightThemeColors;

  return (
    <ThemeContext.Provider value={{colors, setTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider');
  }

  return context;
};
