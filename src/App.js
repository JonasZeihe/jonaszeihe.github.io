import React, { useMemo } from 'react'
import styled from 'styled-components'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import Introduction from './pages/01_Introduction'
import UxUiPage from './pages/01_uxui/UxUiPage'
import ReactPage from './pages/02_react/ReactPage'
import PythonPage from './pages/03_python/PythonPage'
import JavaPage from './pages/04_java/JavaPage'

const Main = styled.main`
  padding: ${({ theme }) => theme.spacing(7)} ${({ theme }) => theme.spacing(1)};
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: auto;
`

export default function App() {
  const navSections = useMemo(
    () => [
      { id: 'Introduction', label: 'Einführung' },
      {
        id: 'UxUiPage',
        label: 'UX/UI Design',
        children: [
          { id: '01_KIM', label: 'KIM' },
          { id: '02_FlavorFusion', label: 'FlavorFusion' },
        ],
      },
      {
        id: 'ReactPage',
        label: 'React',
        children: [{ id: '01_ColorPal', label: 'ColorPal' }],
      },
      {
        id: 'PythonPage',
        label: 'Python',
        children: [
          { id: '01_Noctua', label: 'Noctua' },
          { id: '02_Skryper', label: 'Skryper' },
          { id: '03_Structra', label: 'Structra' },
          { id: '04_InkGrid', label: 'InkGrid' },
        ],
      },
      {
        id: 'JavaPage',
        label: 'Java',
        children: [{ id: '01_Shizen', label: 'Shizen' }],
      },
    ],
    []
  )

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
        <Section id="ReactPage">
          <ReactPage />
        </Section>
        <Section id="PythonPage">
          <PythonPage />
        </Section>
        <Section id="JavaPage">
          <JavaPage />
        </Section>
      </Main>
      <Footer />
    </>
  )
}

const Section = styled.div`
  scroll-margin-top: ${({ theme }) => theme.spacing(7)};
`
