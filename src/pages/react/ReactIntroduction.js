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
      <HeroWrapper gradient="primaryToNeutral">
        <QuoteComponent
          text="React – Die Kunst, Komponenten zu orchestrieren und digitale Erlebnisse zu schaffen."
          author="Jonas Zeihe"
        />
      </HeroWrapper>

      {/* Einleitung */}
      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        <Typography variant="h1" color="primary.dark" align="center">
          React Projekte
        </Typography>
        <Typography variant="h2" align="center">
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
          <Typography variant="body" align="center" color="neutral.main">
            React bildet die Basis sowohl für datenintensive Visualisierungen
            als auch für benutzerzentrierte Plattformen. Meine Expertise
            erstreckt sich von modularen Komponentenbibliotheken bis hin zu
            nahtlosen Fullstack-Integrationen.
          </Typography>
        </ContentWrapper>
      </SectionWrapper>

      {/* Technologien */}
      <SectionWrapper backgroundColor="neutral.light">
        <Typography variant="h2" align="center" color="accent.dark">
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

      {/* Vision */}
      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        <Typography variant="h2" align="center" color="primary.dark">
          🔮 Vision und Zukunft meiner React-Projekte
        </Typography>
        <Typography variant="body" align="center" color="neutral.main">
          React ist mehr als ein Framework – es ist die Grundlage für innovative
          und kreative Webanwendungen. Meine Vision ist es, technische Präzision
          mit visuellem Design zu vereinen, um intuitive und skalierbare
          Lösungen zu schaffen.
        </Typography>
        <Typography variant="body" align="center" style={{ marginTop: '1rem' }}>
          Zukünftige Projekte werden auf serverlosen Architekturen, erweiterten
          Animationen und optimierten Workflows basieren, um Entwicklung und
          Benutzererfahrung gleichermaßen zu verbessern.
        </Typography>
      </SectionWrapper>
    </>
  );
}
