import React from 'react';
import styled from 'styled-components';
import {
  HeroWrapper,
  SectionWrapper,
  QuoteComponent,
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
  ];

  return (
    <>
      {/* Hero-Bereich mit Zitat */}
      <HeroWrapper gradient="primaryToSecondary">
        <QuoteComponent
          text="Java-Projekte – Skalierbarkeit und Präzision in moderner Softwareentwicklung."
          author="Jonas Zeihe"
        />
      </HeroWrapper>

      {/* Einleitung */}
      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        <Typography variant="h1" color="accent.dark" align="center">
          Java Projekte
        </Typography>
        <Typography variant="h2" align="center">
          Entdecke meine <HighlightText>skalierbaren</HighlightText> und{' '}
          <HighlightText>effizienten</HighlightText> Softwarelösungen, die mit
          modernsten Technologien wie <HighlightText>Spring Boot</HighlightText>{' '}
          und <HighlightText>MongoDB</HighlightText> umgesetzt wurden.
        </Typography>
      </SectionWrapper>

      {/* Zusätzliche Highlights */}
      <SectionWrapper backgroundColor="neutral.light">
        <ContentWrapper>
          <Typography variant="h2" align="center">
            Technologien, die den Unterschied machen:
          </Typography>
          <BadgeContainer>
            {badges.map(({ label, icon, variant }) => (
              <Badge key={label} label={label} icon={icon} variant={variant} />
            ))}
          </BadgeContainer>
        </ContentWrapper>
      </SectionWrapper>
    </>
  );
}
