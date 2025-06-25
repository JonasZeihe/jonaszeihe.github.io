// src/pages/01_uxui/UxUiIntroduction.js
import React from 'react'
import {
  HeroWrapper,
  SectionWrapper,
  ContentWrapper,
  Typography,
  HighlightText,
} from '../../utils/sharedComponents'

export default function UxUiIntroduction() {
  return (
    <>
      <HeroWrapper intensity="medium" fullHeight>
        <Typography variant="h1" align="center" color="primary.main">
          UX/UI Projekte
        </Typography>
      </HeroWrapper>

      <SectionWrapper backgroundColor="surface.card">
        <ContentWrapper>
          <Typography variant="h2" align="center" color="primary.main">
            Von <HighlightText>Problemverständnis</HighlightText> bis zu{' '}
            <HighlightText>klickbaren Prototypen</HighlightText>
          </Typography>

          <Typography variant="body" align="center" color="depth.dark">
            Gute Interfaces entstehen nicht im Editor, sondern im Dialog. Ich
            kombiniere strukturierte Nutzerforschung mit iterativem Prototyping
            – damit aus Anforderungen echte Erlebnisse werden. Hier zeige ich,
            wie{' '}
            <HighlightText>
              Usability, Design Thinking, Barrierefreiheit und Designsysteme
            </HighlightText>{' '}
            in meinen Projekten zur Anwendung kommen.
          </Typography>
        </ContentWrapper>
      </SectionWrapper>
    </>
  )
}
