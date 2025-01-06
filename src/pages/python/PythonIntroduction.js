import React from 'react';
import {
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
      {/* Hero-Bereich mit Zitat */}
      <HeroWrapper gradient="primaryToSecondary" style={{ padding: '3rem 0' }}>
        <Typography variant="h1" align="center" color="neutral.lightest">
          🐍 Python-Projekte – Klarheit und Präzision
        </Typography>
        <Typography
          variant="body"
          align="center"
          color="neutral.lightest"
          style={{ marginTop: '1rem' }}
        >
          „Python-Projekte stehen für Struktur, Innovation und kompromisslose
          Qualität.“ – Jonas Zeihe
        </Typography>
      </HeroWrapper>

      {/* Einleitung */}
      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        <Typography variant="h1" align="center" color="accent.dark">
          Willkommen in der Welt der Python-Projekte
        </Typography>
        <Typography
          variant="body"
          align="center"
          color="neutral.main"
          style={{ marginTop: '1rem' }}
        >
          Hier findest du <HighlightText>innovative</HighlightText> und{' '}
          <HighlightText>effiziente</HighlightText> Lösungen, die mit Liebe zum
          Detail und einem klaren Fokus auf Skalierbarkeit entwickelt wurden.
        </Typography>
      </SectionWrapper>

      {/* Kernmerkmale */}
      <SectionWrapper backgroundColor="neutral.light">
        <Typography variant="h2" align="center" color="primary.dark">
          🚀 Kernmerkmale meiner Python-Projekte
        </Typography>
        <ListComponent items={coreFeatures} />
      </SectionWrapper>

      {/* Projekte */}
      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        <Typography variant="h2" align="center" color="accent.dark">
          🛠️ Meine Python-Projekte
        </Typography>
        <ListComponent items={projects} />
      </SectionWrapper>

      {/* Vision */}
      <SectionWrapper backgroundColor="neutral.light">
        <Typography variant="h2" align="center" color="primary.dark">
          🔮 Meine Vision für Python-Projekte
        </Typography>
        <Typography variant="body" align="center" color="neutral.main">
          Python ermöglicht es mir, komplexe Probleme mit klaren, innovativen
          Lösungen zu lösen. Mein Ziel ist es, Werkzeuge zu schaffen, die
          technische Exzellenz und Benutzerfreundlichkeit vereinen, während sie
          gleichzeitig Prozesse optimieren und die Kreativität fördern.
        </Typography>
        <Typography
          variant="body"
          align="center"
          color="neutral.main"
          style={{ marginTop: '1rem' }}
        >
          Zukünftig möchte ich meine Projekte auf weitere Plattformen ausweiten
          und eng mit der Entwickler-Community zusammenarbeiten, um
          Open-Source-Innovationen voranzutreiben.
        </Typography>
      </SectionWrapper>
    </>
  );
}
