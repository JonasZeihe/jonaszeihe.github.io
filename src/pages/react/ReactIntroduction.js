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

export default function ReactIntroduction() {
  const badges = [
    { label: 'React', icon: 'FaReact', variant: 'primary' },
    { label: 'Styled Components', icon: 'FaPalette', variant: 'success' },
    { label: 'Component Reusability', icon: 'FaCubes', variant: 'accent' },
    { label: 'State Management', icon: 'FaTasks', variant: 'secondary' },
    { label: 'Dynamic UIs', icon: 'FaCode', variant: 'primary' },
    { label: 'API Integration', icon: 'FaPlug', variant: 'success' },
  ];

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
        <Typography variant="h2" align="center" color="primary.dark">
          <HighlightText>React</HighlightText> ist das Herzstück moderner
          Webentwicklung. Mit seiner Flexibilität und Performance ermöglicht es{' '}
          <HighlightText>
            interaktive und dynamische Benutzererfahrungen
          </HighlightText>
          . In Projekten wie <HighlightText>colorPal</HighlightText> und{' '}
          <HighlightText>Shizen</HighlightText> sowie in meinen{' '}
          <HighlightText>UX/UI Case Studies</HighlightText> setze ich auf React,
          um herausragende Anwendungen zu entwickeln.
        </Typography>
        <ContentWrapper>
          <Typography variant="h3" align="center" color="accent.dark">
            React bildet die Basis sowohl für datenintensive Visualisierungen
            als auch für benutzerzentrierte Plattformen. Meine Expertise
            erstreckt sich von modularen Komponentenbibliotheken bis hin zu
            nahtlosen Fullstack-Integrationen.
          </Typography>
        </ContentWrapper>
      </SectionWrapper>

      {/* Technologien */}
      <SectionWrapper backgroundColor="secondary.lightest">
        <Typography variant="h2" align="center" color="primary.dark">
          🚀 Technologien hinter meinen React-Projekten
        </Typography>
        <ContentWrapper>
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
