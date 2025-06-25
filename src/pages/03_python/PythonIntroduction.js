import React from 'react'
import {
  HeroWrapper,
  SectionWrapper,
  ContentWrapper,
  Typography,
  HighlightText,
} from '../../utils/sharedComponents'

export default function PythonIntroduction() {
  return (
    <>
      <HeroWrapper gradient="depthDramatic">
        <Typography variant="h1" align="center" color="neutral.ultraLight">
          🐍 Python-Projekte
        </Typography>
      </HeroWrapper>

      <SectionWrapper backgroundColor="surface.backdrop">
        <ContentWrapper>
          <Typography variant="h3" align="center" color="depth.dark">
            Ich nutze Python für{' '}
            <HighlightText>strukturierte Datenverarbeitung</HighlightText>,{' '}
            <HighlightText>skalierbare Anwendungen</HighlightText> und zur
            Entwicklung von Tools, die technische Prozesse vereinfachen und
            beschleunigen. In Projekten wie{' '}
            <HighlightText>Skryper & Structra</HighlightText> stehen Klarheit,
            Automatisierung und plattformübergreifende Umsetzung im Fokus.
          </Typography>
        </ContentWrapper>
      </SectionWrapper>
    </>
  )
}
