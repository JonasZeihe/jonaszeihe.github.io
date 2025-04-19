import React, { createContext, useContext, useState, useMemo } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../../styles/theme'

const ThemeContext = createContext()

export const useThemeContext = () => useContext(ThemeContext)

export function ThemeContextProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleTheme = () => setIsDarkMode((prev) => !prev)

  const theme = useMemo(
    () => (isDarkMode ? darkTheme : lightTheme),
    [isDarkMode]
  )

  const contextValue = useMemo(
    () => ({ isDarkMode, toggleTheme }),
    [isDarkMode]
  )

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
