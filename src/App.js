import React, { useMemo } from 'react';
import styled from 'styled-components';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Introduction from './pages/01_Introduction';
import UxUiPage from './pages/uxui/UxUiPage';
import PythonPage from './pages/python/PythonPage';

const Main = styled.main`
  padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(1)};
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 2rem auto;
`;

export default function App() {
  const navSections = useMemo(
    () => [
      { id: 'Introduction', label: 'Einführung' },
      {
        id: 'UxUiPage',
        label: 'UX/UI Design',
        // Hier können später spezifische Projekte verlinkt werden
        children: [
          { id: '01_KIM', label: 'KIM' },
          { id: '02_FlavorFusion', label: 'FlavorFusion' },
        ],
      },
      {
        id: 'PythonPage',
        label: 'Python',
        // Unterpunkte der Python-Projekte
        children: [
          { id: '01_Noctua', label: 'Noctua' },
          { id: '02_Skryper', label: 'Skryper' },
          { id: '03_Structra', label: 'Structra' },
          { id: '04_InkGrid', label: 'InkGrid' },
        ],
      },
    ],
    []
  );

  return (
    <>
      <Header navSections={navSections} />
      <Main>
        <Section id="Introduction">
          <Introduction />
        </Section>
        <Section id="UxUiPage">
          <UxUiPage />
        </Section>
        <Section id="PythonPage">
          <PythonPage />
        </Section>
      </Main>
      <Footer />
    </>
  );
}

const Section = styled.div`
  scroll-margin-top: 80px; /* Verhindert, dass der Header den Inhalt überlappt */
`;
