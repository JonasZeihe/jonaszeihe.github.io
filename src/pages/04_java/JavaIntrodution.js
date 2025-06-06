import React from 'react'
import {
  HeroWrapper,
  Typography,
  HighlightText,
} from '../../utils/sharedComponents'
import BadgeGrid from '../../components/common/BadgeGrid'

export default function JavaIntroduction() {
  const badges = [
    'java',
    'spring-boot',
    'mongodb',
    'rest-api',
    'jwt-auth',
    'docker',
    'react',
  ]

  return (
    <>
      <HeroWrapper gradient="primaryToSecondary">
        <Typography variant="h1" color="depth.dark" align="center">
          Java / React / Fullstack-Projekte
        </Typography>
      </HeroWrapper>

      <Typography variant="h3" align="left" color="depth.dark">
        In Projekten wie <HighlightText>Shizen</HighlightText> nutze ich Java
        und React nicht nur als Stack, sondern als Architekturprinzip. Es geht
        mir darum, <HighlightText> strukturierte Datenflüsse</HighlightText>,
        <HighlightText>authentifizierte APIs</HighlightText> und
        <HighlightText> modulare Frontends</HighlightText> so zu verbinden, dass
        Systeme verständlich bleiben – für Nutzer wie für Entwickler.
      </Typography>

      <BadgeGrid badges={badges} />
    </>
  )
}
