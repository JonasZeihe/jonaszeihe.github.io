import React from 'react';
import {
  PageWrapper,
  HeroWrapper,
  SectionWrapper,
  Typography,
  HighlightText,
  ListComponent,
} from '../../utils/sharedComponents';

export default function PythonIntroduction() {
  const coreFeatures = [
    {
      id: 'feature-1',
      content: (
        <>
          📂 <HighlightText>Strukturierte Entwicklung:</HighlightText> Klare
          Projektstrukturen und sauber dokumentierter Code.
        </>
      ),
    },
    {
      id: 'feature-2',
      content: (
        <>
          ⚡ <HighlightText>Effizienz:</HighlightText> Prozesse beschleunigen
          und repetitive Aufgaben minimieren.
        </>
      ),
    },
    {
      id: 'feature-3',
      content: (
        <>
          📈 <HighlightText>Skalierbarkeit:</HighlightText> Vom kleinen Skript
          bis zur unternehmensweiten Anwendung.
        </>
      ),
    },
    {
      id: 'feature-4',
      content: (
        <>
          🤖 <HighlightText>AI-Unterstützung:</HighlightText> Fortschrittliche
          Ansätze für optimierte Entwicklung.
        </>
      ),
    },
    {
      id: 'feature-5',
      content: (
        <>
          🔧 <HighlightText>Flexibilität:</HighlightText> Anpassbar an
          verschiedene Plattformen und Anforderungen.
        </>
      ),
    },
  ];

  const projects = [
    {
      id: 'project-1',
      content: (
        <>
          📂 <HighlightText>Skryper:</HighlightText> Analyse und Dokumentation
          von Verzeichnisstrukturen für komplexe Projekte.
        </>
      ),
    },
    {
      id: 'project-2',
      content: (
        <>
          🏭 <HighlightText>Structra:</HighlightText> Automatisierte Erstellung
          von Ordner- und Dateistrukturen aus Baumdarstellungen.
        </>
      ),
    },
    {
      id: 'project-3',
      content: (
        <>
          🔧 <HighlightText>Noctua:</HighlightText> Flexible Hardwareanalyse und
          Berichterstellung mit Markdown-Export.
        </>
      ),
    },
    {
      id: 'project-4',
      content: (
        <>
          🎨 <HighlightText>InkGrid:</HighlightText> Organisation von
          Farbpaletten und strukturierte SVG-Erstellung für Design-Tools.
        </>
      ),
    },
  ];

  return (
    <>
      {/* Hero-Bereich */}
      <PageWrapper backgroundColor="neutral.lightest" elevated>
        <HeroWrapper gradient="primaryLightest">
          <Typography variant="h1" align="center">
            🐍 Python-Projekte – Klarheit und Präzision
          </Typography>
        </HeroWrapper>

        {/* Einleitung */}
        <SectionWrapper backgroundColor="neutral.lightest">
          <Typography variant="h3">
            Hier findest du <HighlightText>innovative</HighlightText> und{' '}
            <HighlightText>effiziente</HighlightText> Lösungen, die mit Liebe
            zum Detail und einem klaren Fokus auf Skalierbarkeit entwickelt
            wurden.
          </Typography>

          {/* Kernmerkmale */}
          <ListComponent items={coreFeatures} />

          {/* Projekte */}
          <Typography variant="h2" align="center" color="accent.dark">
            🛠️ Meine Python-Projekte
          </Typography>
          <ListComponent items={projects} />

          {/* Vision */}
          <Typography variant="h2" align="center" color="primary.dark">
            🔮 Meine Vision für Python-Projekte
          </Typography>
          <Typography variant="body" color="neutral.main">
            Python ermöglicht es mir, komplexe Probleme mit klaren, innovativen
            Lösungen zu lösen. Mein Ziel ist es, Werkzeuge zu schaffen, die
            technische Exzellenz und Benutzerfreundlichkeit vereinen, während
            sie gleichzeitig Prozesse optimieren und die Kreativität fördern.
          </Typography>
        </SectionWrapper>
      </PageWrapper>
    </>
  );
}
