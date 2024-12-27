import React from 'react';
import {
  HeroWrapper,
  QuoteComponent,
  Typography,
  SectionWrapper,
  HighlightText,
} from '../utils/sharedComponents';

export default function Introduction() {
  return (
    <>
      {/* Hero-Bereich mit Zitat */}
      <HeroWrapper gradient="primaryToSecondary" style={{ padding: '3rem 0' }}>
        <QuoteComponent text="Design trifft Funktion – Willkommen in meinem Portfolio!" />
      </HeroWrapper>

      {/* Intro-Text in SectionWrapper */}
      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        <Typography variant="h2" align="center" color="primary.dark">
          Ich bin ein <HighlightText>Fullstack Designer</HighlightText> mit
          einem Faible für intuitive Designs und skalierbare Lösungen.
          Willkommen in meinem digitalen Schaufenster, das meine Leidenschaft
          für <HighlightText>Entwicklung</HighlightText>
          und <HighlightText>Design</HighlightText> vereint.
        </Typography>
      </SectionWrapper>
    </>
  );
}
