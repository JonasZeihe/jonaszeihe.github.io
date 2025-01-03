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
      {/* Hero-Bereich mit Zitat */}
      <HeroWrapper gradient="primaryToNeutral">
        <QuoteComponent
          text="React – Die Kunst, Komponenten zu orchestrieren und digitale Erlebnisse zu schaffen."
          author="Jonas Zeihe"
        />
      </HeroWrapper>

      {/* Kurze Einleitung */}
      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        <Typography variant="h1" color="primary.dark" align="center">
          React Projekte
        </Typography>
        <Typography variant="h2" align="center">
          <HighlightText>React</HighlightText> ist das Herzstück moderner
          Webentwicklung. Mit seiner Flexibilität und Performance ermöglicht es
          <HighlightText>
            {' '}
            interaktive und dynamische Benutzererfahrungen
          </HighlightText>
          . Hier sind einige meiner Projekte, die zeigen, wie ich React nutze,
          um digitale Produkte zum Leben zu erwecken.
        </Typography>
        <ContentWrapper>
          <Typography variant="body" align="center" color="neutral.main">
            Meine Expertise reicht von datengetriebenen Anwendungen wie{' '}
            <HighlightText>colorPal</HighlightText> bis hin zu nutzerzentrierten
            Plattformen wie <HighlightText>Shizen LMS</HighlightText>. Jedes
            Projekt spiegelt meine Fähigkeit wider, aus einer Idee ein
            funktionierendes Produkt zu schaffen.
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
