import React from 'react';
import {
  HeroWrapper,
  SectionWrapper,
  QuoteComponent,
  Typography,
  HighlightText,
} from '../../utils/sharedComponents';

export default function PythonIntroduction() {
  return (
    <>
      {/* Hero-Bereich mit Zitat */}
      <HeroWrapper gradient="primaryToSecondary" style={{ padding: '3rem 0' }}>
        <QuoteComponent
          text="Python-Projekte – Klarheit und Präzision. 🐍"
          author="Jonas Zeihe"
        />
      </HeroWrapper>

      {/* Kurze Einleitung */}
      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        <Typography variant="h1" color="accent.dark" align="center">
          Python Projekte
        </Typography>
        <Typography variant="h2" align="center">
          Hier findest du <HighlightText>innovative</HighlightText> und{' '}
          <HighlightText>effiziente</HighlightText> Lösungen, die mit viel Liebe
          zum Detail und einem klaren Fokus auf Skalierbarkeit entwickelt
          wurden.
        </Typography>
      </SectionWrapper>
    </>
  );
}
