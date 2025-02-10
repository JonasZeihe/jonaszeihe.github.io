import React from 'react'
import {
  HeroWrapper,
  SectionWrapper,
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
          Java / React / Fullstack Projekte
        </Typography>
      </HeroWrapper>

      <SectionWrapper backgroundColor="neutral.ultraLight" elevated>
        <Typography variant="h3" align="left" color="depth.dark">
          Meine <HighlightText>Java-Projekte</HighlightText> stehen für ein
          Zusammenspiel aus robuster Backend-Entwicklung und modernen,
          interaktiven Frontend-Lösungen. Mit Technologien wie{' '}
          <HighlightText>Spring Boot</HighlightText>,{' '}
          <HighlightText>MongoDB</HighlightText> und{' '}
          <HighlightText>React</HighlightText> entwickle ich skalierbare,
          sichere und zukunftsweisende Anwendungen.
        </Typography>

        <BadgeGrid badges={badges} />
      </SectionWrapper>
    </>
  )
}
