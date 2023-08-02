import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function useTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  const CheckTheme = () => {
    const savedTheme = window.localStorage.getItem('Theme')
    if (savedTheme) setTheme(savedTheme)
    else setTheme('Dark')
  }

  useEffect(() => {
    CheckTheme();
  },[])
  
  const toogleTheme = () => {
    const newTheme = theme === 'Dark' ? 'Light' : 'Dark';
    window.localStorage.setItem('Theme', newTheme)
    setTheme(newTheme)
  }

  return {
    theme,
    toogleTheme
  };
}