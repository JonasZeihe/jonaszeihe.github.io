import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import App from './App'
import MeshGradientBackground from './components/layout/MeshGradientBackground'
import { ThemeContextProvider } from './components/context/ThemeContext'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <GlobalStyles />
      <MeshGradientBackground />
      <Router>
        <App />
      </Router>
    </ThemeContextProvider>
  </React.StrictMode>
)
