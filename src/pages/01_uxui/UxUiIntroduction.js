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
      <HeroWrapper gradient="highlightSoft">
        <Typography variant="h1" align="center" color="neutral.ultraLight">
          UX/UI Projekte
        </Typography>
      </HeroWrapper>

      <SectionWrapper backgroundColor="surface.backdrop">
        <ContentWrapper>
          <Typography variant="h2" align="center" color="primary.main">
            Von <HighlightText>Problemverständnis</HighlightText> bis zu{' '}
            <HighlightText>klickbaren Prototypen</HighlightText>
          </Typography>

          <Typography variant="h3" align="center" color="depth.dark">
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
