import { createGlobalStyle } from 'styled-components';

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
    overflow-x: hidden;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
    font-size: ${({ theme }) => theme.typography.fontSize.body};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    display: flex;
    flex-direction: column;
    min-height: 100%;
    overflow-x: hidden;
  }

  button {
    font-family: ${({ theme }) => theme.typography.fontFamily.button};
    font-size: ${({ theme }) => theme.typography.fontSize.body};
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;

    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.accent.main};
      outline-offset: 2px;
    }
  }
`;

export default GlobalStyles;
