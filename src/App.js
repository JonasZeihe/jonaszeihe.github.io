import React from 'react';
import styled from 'styled-components';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Introduction from './pages/01_Introduction';
import Python from './pages/04_Python_Projekte';
import PythonPage from './pages/python/PythonPage';

const Main = styled.main`
  padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(1)};
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 2rem auto;
`;

export default function App() {
  return (
    <>
      <Header />
      <Main>
        <Section id="Introduction">
          <Introduction />
        </Section>
        <Section id="Python">
          <Python />
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
