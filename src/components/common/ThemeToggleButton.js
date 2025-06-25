import React from 'react'
import styled from 'styled-components'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useThemeContext } from '../context/ThemeContext'

export default function ThemeToggleButton() {
  const { isDarkMode, toggleTheme } = useThemeContext()

  return (
    <ToggleButton
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      $isDarkMode={isDarkMode}
    >
      {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
    </ToggleButton>
  )
}

const ToggleButton = styled.button`
  background: ${({ theme, $isDarkMode }) =>
    $isDarkMode ? theme.colors.depth.dark : theme.colors.neutral.lightest};
  color: ${({ theme, $isDarkMode }) =>
    $isDarkMode ? theme.colors.neutral.ultraLight : theme.colors.depth.dark};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.boxShadow.light};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.neutral.ultraLight};
  }
`
