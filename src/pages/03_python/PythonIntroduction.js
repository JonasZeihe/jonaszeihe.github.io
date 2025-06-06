import React from 'react'
import {
  HeroWrapper,
  Typography,
  HighlightText,
} from '../../utils/sharedComponents'
import BadgeGrid from '../../components/common/BadgeGrid'

export default function PythonIntroduction() {
  const coreFeatures = [
    'structured-development',
    'efficiency',
    'scalability',
    'ai-support',
    'flexibility',
  ]

  return (
    <>
      <HeroWrapper gradient="depthDramatic">
        <Typography variant="h1" align="center" color="neutral.ultraLight">
          🐍 Python-Projekte
        </Typography>
      </HeroWrapper>

      <Typography variant="h3" align="left" color="depth.dark">
        Ich nutze Python für{' '}
        <HighlightText>strukturierte Datenverarbeitung</HighlightText>,
        <HighlightText>skalierbare Anwendungen</HighlightText> und zur
        Entwicklung von Tools, die technische Prozesse vereinfachen und
        beschleunigen. In Projekten wie{' '}
        <HighlightText>Skryper & Structra</HighlightText> stehen Klarheit,
        Automatisierung und plattformübergreifende Umsetzung im Fokus.
      </Typography>

      <BadgeGrid badges={coreFeatures} />
    </>
  )
}
