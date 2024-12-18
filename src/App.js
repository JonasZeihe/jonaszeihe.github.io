import React from 'react';
import styled from 'styled-components';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Introduction from './pages/1_Introduction';
import TestPage from './pages/2_testpage';
import UXUIPage from './pages/02_Uxui';
import PythonPage from './pages/03_Python';
import JavaFullstackPage from './pages/04_JavaFullstack';

const Main = styled.main`
  padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(1)};
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
`;

export default function App() {
  return (
    <>
      <Header />
      <Main>
        <Section id="introduction">
          <Introduction />
        </Section>
        <Section id="testPage">
          <TestPage />
        </Section>
        <Section id="uxui">
          <UXUIPage />
        </Section>
        <Section id="python">
          <PythonPage />
        </Section>
        <Section id="java">
          <JavaFullstackPage />
        </Section>
      </Main>
      <Footer />
    </>
  );
}

const Section = styled.div`
  scroll-margin-top: 80px; /* Verhindert, dass der Header den Inhalt überlappt */
`;
