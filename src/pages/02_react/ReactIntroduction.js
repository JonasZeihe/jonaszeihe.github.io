import React from 'react'
import {
  HeroWrapper,
  SectionWrapper,
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
      {/* Hero-Bereich */}
      <HeroWrapper gradient="secondaryDynamic">
        <Typography variant="h1" color="primary.dark" align="center">
          React Projekte
        </Typography>
      </HeroWrapper>

      {/* Einleitung */}
      <SectionWrapper backgroundColor="secondary.lightest" elevated>
        <Typography variant="h2" align="left" color="primary.dark">
          In Projekten wie <HighlightText>colorPal</HighlightText> und{' '}
          <HighlightText>Shizen</HighlightText> sowie in meinen{' '}
          <HighlightText>UX/UI Case Studies</HighlightText> setze ich auf React,
          um herausragende Anwendungen zu entwickeln.
        </Typography>
        <Typography variant="h3" align="left" color="accent.dark">
          Meine Expertise erstreckt sich von modularen Komponentenbibliotheken
          bis hin zu nahtlosen Fullstack-Integrationen.
        </Typography>
        <BadgeGrid badges={badges} />
      </SectionWrapper>
    </>
  )
}
