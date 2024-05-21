import { useEffect, useState } from "react";

const ThemeManager = () => {
    const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');
  
    const darkTheme = () => {
      setThemeMode('dark');
    };
  
    const lightTheme = () => {
      setThemeMode('light');
    };
  
    useEffect(() => {
      document.documentElement.classList.remove('dark', 'light');
      document.documentElement.classList.add(themeMode);
    }, [themeMode]);
  
    return { lightTheme, darkTheme, themeMode };
  };
  
  export default ThemeManager;