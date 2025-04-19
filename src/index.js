import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import theme from './styles/theme'
import App from './App'
import MeshGradientBackground from './components/layout/MeshGradientBackground'
import { ThemeContextProvider } from './components/context/ThemeContext'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      {' '}
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MeshGradientBackground
          gradient1="highlightSoft"
          gradient2="highlightSoft"
        />
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </ThemeContextProvider>
  </React.StrictMode>
)
