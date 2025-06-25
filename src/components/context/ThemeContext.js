// src/components/context/ThemeContext.js
import React, { createContext, useContext, useMemo, useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../../styles/theme'

const ThemeContext = createContext()

export const useThemeContext = () => useContext(ThemeContext)

export function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState('light')

  const theme = useMemo(
    () => (mode === 'dark' ? { ...darkTheme, mode } : { ...lightTheme, mode }),
    [mode]
  )

  const toggleTheme = () =>
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))

  const value = useMemo(
    () => ({
      mode,
      isDarkMode: mode === 'dark',
      toggleTheme,
      theme,
    }),
    [mode, theme]
  )

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  )
}
