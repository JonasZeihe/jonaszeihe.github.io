import React from 'react'
import {
  HeroWrapper,
  Typography,
  HighlightText,
} from '../../utils/sharedComponents'
import BadgeGrid from '../../components/common/BadgeGrid'

export default function ReactIntroduction() {
  const badges = [
    'react',
    'styled-components',
    'component-reusability',
    'state-management',
    'dynamic-uis',
    'api-integration',
  ]

  return (
    <>
      <HeroWrapper gradient="secondaryDynamic">
        <Typography variant="h1" color="primary.dark" align="center">
          React Projekte
        </Typography>
      </HeroWrapper>

      <Typography variant="h2" align="left" color="primary.dark">
        In <HighlightText>colorPal</HighlightText>,{' '}
        <HighlightText>Shizen</HighlightText> und weiteren Anwendungen zeige
        ich, wie React mehr sein kann als ein Framework: nämlich eine Grundlage
        für
        <HighlightText>
          {' '}
          klare Strukturen und konsistente Nutzererlebnisse
        </HighlightText>
        .
      </Typography>

      <Typography variant="h3" align="left" color="accent.dark">
        Vom Aufbau modularer Komponenten über komplexes State-Management bis zur
        API-Integration: Ich nutze React, um funktionale Tiefe mit intuitiver
        Bedienung zu verbinden.
      </Typography>

      <BadgeGrid badges={badges} />
    </>
  )
}
