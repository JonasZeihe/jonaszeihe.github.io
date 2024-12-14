// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Router importieren
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import App from './App';
import MeshGradientBackground from './components/layout/MeshGradientBackground'; // Import der neuen Komponente

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MeshGradientBackground /> {/* Der Mesh Gradient Hintergrund */}
      <Router>
        {' '}
        {/* Router umschließt die gesamte App */}
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
