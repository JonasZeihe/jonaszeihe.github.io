import React from 'react';
import styled from 'styled-components';
import {
  HeroWrapper,
  SectionWrapper,
  Typography,
  HighlightText,
  Badge,
} from '../../utils/sharedComponents';

const ContentWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing(4)};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.spacing(3)};
`;

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
      <HeroWrapper gradient="secondaryToAccent">
        <Typography variant="h1" color="accent.dark" align="center">
          Java/React/Fullstack Projekte
        </Typography>
      </HeroWrapper>

      {/* Einleitung */}
      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        <Typography
          variant="body"
          align="center"
          color="neutral.main"
          style={{ marginTop: '1rem' }}
        >
          Meine Java/React-Projekte stehen für ein Zusammenspiel aus robuster
          Backend-Entwicklung und modernen, interaktiven Frontend-Lösungen. Mit
          Technologien wie <HighlightText>Spring Boot</HighlightText>,{' '}
          <HighlightText>MongoDB</HighlightText> und{' '}
          <HighlightText>React</HighlightText> entwickle ich skalierbare,
          sichere und zukunftsweisende Anwendungen.
        </Typography>
      </SectionWrapper>

      {/* Kernmerkmale */}
      <SectionWrapper backgroundColor="neutral.lightest">
        <Typography variant="h2" align="center" color="primary.dark">
          🚀 Kernmerkmale meiner Java-Projekte
        </Typography>
        <Typography
          variant="body"
          align="center"
          color="neutral.main"
          style={{ marginTop: '1rem' }}
        >
          Java-Projekte stellen die Grundlage für hochperformante und flexible
          Softwarelösungen dar. Die eingesetzten Technologien und Architekturen
          garantieren Stabilität und Skalierbarkeit:
        </Typography>
        <ContentWrapper>
          <Typography variant="h3" align="center" color="accent.dark">
            Technologien, die den Unterschied machen:
          </Typography>
          <BadgeContainer>
            {badges.map(({ label, icon, variant }) => (
              <Badge key={label} label={label} icon={icon} variant={variant} />
            ))}
          </BadgeContainer>
        </ContentWrapper>
      </SectionWrapper>

      {/* Vision */}
      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        <Typography variant="h2" align="center" color="accent.dark">
          🔮 Vision für Java-Projekte
        </Typography>
        <Typography variant="body" align="center" color="neutral.main">
          Java/React-Projekte bilden das Rückgrat moderner Softwareentwicklung.
          Meine Vision ist es, Anwendungen zu schaffen, die nicht nur stabil und
          sicher sind, sondern auch durch intuitive Benutzererfahrung
          überzeugen.
        </Typography>
        <Typography variant="body" align="center" style={{ marginTop: '1rem' }}>
          Die Projekte sind darauf ausgelegt, durch modulare Architekturen und
          KI-Integration eine Brücke zwischen Backend-Stabilität und
          Frontend-Interaktivität zu schlagen.
        </Typography>
      </SectionWrapper>
    </>
  );
}
