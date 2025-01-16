import React from 'react';
import styled from 'styled-components';
import {
  HeroWrapper,
  SectionWrapper,
  Typography,
  HighlightText,
  Badge,
} from '../../utils/sharedComponents';

const BadgeContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap;
`;

export default function JavaIntroduction() {
  const badges = [
    { label: 'Java', icon: 'FaJava', variant: 'primary' },
    { label: 'Spring Boot', icon: 'FaLeaf', variant: 'success' },
    { label: 'MongoDB', icon: 'FaDatabase', variant: 'accent' },
    { label: 'REST APIs', icon: 'FaNetworkWired', variant: 'secondary' },
    { label: 'JWT Auth', icon: 'FaKey', variant: 'warning' },
    { label: 'Docker', icon: 'FaDocker', variant: 'success' },
    { label: 'React', icon: 'FaReact', variant: 'primary' },
  ];

  return (
    <>
      {/* Hero-Bereich */}
      <HeroWrapper gradient="primaryToSecondary">
        <Typography variant="h1" color="depth.dark" align="center">
          Java/React/Fullstack Projekte
        </Typography>
      </HeroWrapper>

      {/* Einleitung */}
      <SectionWrapper backgroundColor="neutral.ultraLight" elevated>
        <Typography variant="h3" align="center" color="depth.dark">
          Meine Java/React-Projekte stehen für ein Zusammenspiel aus robuster
          Backend-Entwicklung und modernen, interaktiven Frontend-Lösungen. Mit
          Technologien wie <HighlightText>Spring Boot</HighlightText>,{' '}
          <HighlightText>MongoDB</HighlightText> und{' '}
          <HighlightText>React</HighlightText> entwickle ich skalierbare,
          sichere und zukunftsweisende Anwendungen.
        </Typography>
      </SectionWrapper>

      {/* Kernmerkmale */}
      <SectionWrapper backgroundColor="neutral.ultraLight">
        <Typography variant="h2" align="center" color="primary.dark">
          🚀 Kernmerkmale meiner Java-Projekte
        </Typography>

        <BadgeContainer>
          {badges.map(({ label, icon, variant }) => (
            <Badge key={label} label={label} icon={icon} variant={variant} />
          ))}
        </BadgeContainer>
      </SectionWrapper>
    </>
  );
}
