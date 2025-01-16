import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import App from './App';
import MeshGradientBackground from './components/layout/MeshGradientBackground';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* MeshGradientBackground mit zwei spezifischen Gradienten */}
      <MeshGradientBackground
        gradient1="depthSubtle"
        gradient2="depthDramatic"
      />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
