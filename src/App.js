import React, { useMemo } from 'react'
import styled from 'styled-components'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import Introduction from './pages/01_Introduction'
import UxUiPage from './pages/01_uxui/UxUiPage'
import PythonPage from './pages/03_python/PythonPage'
import JavaPage from './pages/04_java/JavaPage'
import { PageWrapper } from './utils/sharedComponents'

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
      <MainWrapper as="main">
        <PageWrapper id="Introduction">
          <Introduction />
        </PageWrapper>
        <PageWrapper id="UxUiPage">
          <UxUiPage />
        </PageWrapper>
        <PageWrapper id="PythonPage">
          <PythonPage />
        </PageWrapper>
        <PageWrapper id="JavaPage">
          <JavaPage />
        </PageWrapper>
      </MainWrapper>
      <Footer />
    </>
  )
}

const MainWrapper = styled.main`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  padding-left: ${({ theme }) => theme.spacing(3)};
  padding-right: ${({ theme }) => theme.spacing(3)};
  padding-top: ${({ theme }) => theme.spacing(8)};
  padding-bottom: ${({ theme }) => theme.spacing(8)};

  min-height: 0;
  box-sizing: border-box;
`
