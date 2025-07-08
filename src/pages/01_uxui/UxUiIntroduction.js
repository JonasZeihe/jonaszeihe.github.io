// src/pages/01_uxui/UxUiIntroduction.js
import React from 'react'
import {
  HeroWrapper,
  SectionWrapper,
  Typography,
  HighlightText,
} from '../../utils/sharedComponents'

export default function UxUiIntroduction() {
  return (
    <>
      <HeroWrapper variant="intense">
        <Typography variant="h1" align="center">
          UX/UI Projekte
        </Typography>
      </HeroWrapper>

      <SectionWrapper>
        <Typography variant="h2" align="center">
          Von <HighlightText>Problemverständnis</HighlightText> bis zu{' '}
          <HighlightText>klickbaren Prototypen</HighlightText>
        </Typography>

        <Typography variant="h3" align="center">
          Gute Interfaces entstehen nicht im Editor, sondern im Dialog. Ich
          kombiniere strukturierte Nutzerforschung mit iterativem Prototyping –
          damit aus Anforderungen echte Erlebnisse werden. Hier zeige ich, wie{' '}
          <HighlightText>
            Usability, Design Thinking, Barrierefreiheit und Designsysteme
          </HighlightText>{' '}
          in meinen Projekten zur Anwendung kommen.
        </Typography>
      </SectionWrapper>
    </>
  )
}
