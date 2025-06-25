// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    min-height: 100%;
    width: 100vw;
    overflow-x: hidden;
    color-scheme: ${({ theme }) => theme.mode || 'light'};
    /* KEIN background! Sonst liegt es über dem Canvas! */
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${({ theme }) => theme.typography.fontSize.body};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    min-height: 100vh;
    min-width: 100vw;
    color: ${({ theme }) =>
      theme.mode === 'dark'
        ? theme.colors.neutral.black
        : theme.colors.neutral.dark};
    background: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition:
      color 0.23s cubic-bezier(.34,.54,.51,1),
      background-color 0.36s cubic-bezier(.38,.54,.51,1);

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 95%;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 92%;
    }
  }

  button, input, select, textarea {
    font-family: ${({ theme }) => theme.typography.fontFamily.button};
    font-size: ${({ theme }) => theme.typography.fontSize.body};
    background: none;
    border: none;
    outline: none;
    color: inherit;
    transition: color 0.22s;
  }

  button {
    cursor: pointer;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: ${({ theme }) => theme.boxShadow.xs};
    transition: box-shadow 0.19s;
    &:focus-visible {
      outline: 2.5px solid ${({ theme }) => theme.colors.accent.main};
      outline-offset: 2px;
      box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.accent[1]}44;
    }
    &:hover {
      box-shadow: ${({ theme }) => theme.boxShadow.medium};
      filter: brightness(1.05);
    }
    &:active {
      filter: brightness(0.95);
    }
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    transition: color 0.19s;
    &:hover,
    &:focus-visible {
      color: ${({ theme }) => theme.colors.accent.main};
      text-decoration: underline;
    }
  }

  img, svg {
    max-width: 100%;
    display: block;
    user-select: none;
  }

  ul, ol {
    list-style: none;
  }
`

export default GlobalStyles
