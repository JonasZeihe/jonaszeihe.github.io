import React, { useMemo } from 'react'
import styled from 'styled-components'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import Introduction from './pages/01_Introduction'
import UxUiPage from './pages/01_uxui/UxUiPage'
import PythonPage from './pages/03_python/PythonPage'
import JavaPage from './pages/04_java/JavaPage'

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
      <MainWrapper as="main" fluid centered padding={6} intensity="none">
        <Section id="Introduction">
          <Introduction />
        </Section>
        <Section id="UxUiPage">
          <UxUiPage />
        </Section>
        <Section id="PythonPage">
          <PythonPage />
        </Section>
        <Section id="JavaPage">
          <JavaPage />
        </Section>
      </MainWrapper>
      <Footer />
    </>
  )
}

const MainWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  background: none;
  padding-top: ${({ theme }) => theme.spacing(7)};
  min-height: 100vh;
`

const Section = styled.section`
  scroll-margin-top: ${({ theme }) => theme.spacing(7)};
`
