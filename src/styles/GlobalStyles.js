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
    height: 100%;
    background: ${({ theme }) => theme.gradients.pageBackground};
    color-scheme: ${({ theme }) => (theme.mode === 'dark' ? 'dark' : 'light')};
    overflow-x: hidden;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${({ theme }) => theme.typography.fontSize.body};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow-x: hidden;
    color: ${({ theme }) => theme.colors.depth.main};
    background-color: ${({ theme }) => theme.colors.depth.ultraLight};
  }

  button, input, select, textarea {
    font-family: ${({ theme }) => theme.typography.fontFamily.button};
    font-size: ${({ theme }) => theme.typography.fontSize.body};
    background: none;
    border: none;
    outline: none;
    padding: 0;
  }

  button {
    cursor: pointer;

    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.accent.main};
      outline-offset: 2px;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img, svg {
    max-width: 100%;
    display: block;
  }

  ul, ol {
    list-style: none;
  }
`

export default GlobalStyles
