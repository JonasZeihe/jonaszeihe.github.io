import React from 'react'
import {
  HeroWrapper,
  SectionWrapper,
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
      {/* Hero-Bereich */}
      <HeroWrapper gradient="depthDramatic">
        <Typography variant="h1" align="center" color="neutral.ultraLight">
          🐍 Python-Projekte
        </Typography>
      </HeroWrapper>

      {/* Einleitung */}
      <SectionWrapper backgroundColor="depth.dark">
        <Typography variant="h3" align="left" color="neutral.ultraLight">
          Hier findest du <HighlightText>innovative</HighlightText> und{' '}
          <HighlightText>effiziente</HighlightText> Lösungen, die mit Liebe zum
          Detail und einem klaren Fokus auf Skalierbarkeit entwickelt wurden.
          Python ermöglicht es mir, komplexe Probleme mit klaren, innovativen
          Lösungen zu lösen. Mein Ziel ist es, Werkzeuge zu schaffen, die
          <HighlightText> technische Exzellenz</HighlightText> und
          <HighlightText> Benutzerfreundlichkeit</HighlightText> vereinen,
          während sie gleichzeitig Prozesse optimieren und die Kreativität
          fördern.
        </Typography>
        <BadgeGrid badges={coreFeatures} />
      </SectionWrapper>
    </>
  )
}
