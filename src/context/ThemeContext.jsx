import { createContext, useState } from "react";

//1. Crear el context
export const ThemeContext = createContext()

//2. Crear el provider para proveer el context
export function ThemeProvider({ children }) {

  const [theme, setTheme] = useState(null)
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}