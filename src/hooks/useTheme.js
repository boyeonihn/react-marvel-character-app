import { useCallback, useState } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = useCallback(() => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [theme, setTheme]);
  return { theme, toggleTheme };
};
