import React, { useState } from 'react';
import {
  HeroWrapper,
  SectionWrapper,
  MediaDisplay,
  Typography,
  HighlightText,
  ListComponent,
  Badge,
  Button,
  Lightbox,
} from '../../../../utils/sharedComponents';
import NoctuaLogo from '../../../../assets/images/Projects/noctua_logo.png';

export default function NoctuaDetails() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Features von Noctua
  const features = [
    {
      id: 'feature-1',
      content: (
        <>
          🛠️ <HighlightText>Flexibilität:</HighlightText> Erfasse gezielt CPU-,
          GPU-, BIOS-Daten oder mehr.
        </>
      ),
    },
    {
      id: 'feature-2',
      content: (
        <>
          📄 <HighlightText>Klarheit:</HighlightText> Markdown-Export für
          übersichtliche und editierbare Berichte.
        </>
      ),
    },
    {
      id: 'feature-3',
      content: (
        <>
          💡 <HighlightText>Bedienfreundlich:</HighlightText> Intuitive
          Oberfläche mit Checkboxen für maßgeschneiderte Berichte.
        </>
      ),
    },
    {
      id: 'feature-4',
      content: (
        <>
          🔌 <HighlightText>Modularität:</HighlightText> Erweiterbar für neue
          Hardware und zukünftige Anforderungen.
        </>
      ),
    },
    {
      id: 'feature-5',
      content: (
        <>
          🚀 <HighlightText>NoctuaLight:</HighlightText> Reduzierte Version für
          schnelle und kompakte Hardwareübersichten.
        </>
      ),
    },
  ];

  // Badges für Noctua
  const badges = [
    { label: 'Python 3.10+', icon: 'FaPython', variant: 'primary' },
    { label: 'TDD', icon: 'FaBug', variant: 'success' },
    {
      label: 'Domain Driven Design',
      icon: 'FaProjectDiagram',
      variant: 'accent',
    },
    {
      label: 'Benutzerfreundliche GUI',
      icon: 'FaMousePointer',
      variant: 'secondary',
    },
    { label: 'Markdown-Export', icon: 'FaFileAlt', variant: 'warning' },
  ];

  return (
    <>
      {/* Hero-Bereich */}
      <HeroWrapper gradient="primaryToSecondary">
        <Typography variant="h1" align="center">
          🔧 <HighlightText>Noctua</HighlightText> – Systeminformationen mit
          Struktur
        </Typography>
        <MediaDisplay
          media={[{ type: 'image', src: NoctuaLogo, alt: 'Noctua Logo' }]}
          onClick={() => setLightboxOpen(true)}
        />
        <Typography
          variant="body"
          align="center"
          color="neutral.lightest"
          style={{ marginTop: '1rem' }}
        >
          Erfasse und dokumentiere deine Hardwareinformationen schnell, präzise
          und übersichtlich. Mit <HighlightText>Noctua</HighlightText> wird
          Hardwaredokumentation zum Kinderspiel.
        </Typography>
      </HeroWrapper>

      {/* Einführung */}
      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        <Typography variant="h2" align="center" color="primary.dark">
          Warum <HighlightText>Noctua</HighlightText>?
        </Typography>
        <Typography variant="body" align="center" color="neutral.main">
          Hardwaredokumentation kann zeitaufwendig und kompliziert sein – doch
          nicht mit <HighlightText>Noctua</HighlightText>. Egal ob Kurzübersicht
          oder detaillierter Bericht, Noctua bietet dir alle relevanten
          Informationen, kompakt oder tiefgehend, mit nur wenigen Klicks.
        </Typography>
        <Typography variant="body" align="center" style={{ marginTop: '1rem' }}>
          Die reduzierte Version <HighlightText>NoctuaLight</HighlightText>{' '}
          eignet sich perfekt für schnelle, kompakte Hardwareübersichten und
          ergänzt die volle Version für tiefgehende Berichte.
        </Typography>
      </SectionWrapper>

      {/* Vision */}
      <SectionWrapper backgroundColor="neutral.light">
        <Typography variant="h3" align="center" color="accent.dark">
          🌍 Visionen hinter <HighlightText>Noctua</HighlightText>
        </Typography>
        <Typography variant="body" align="center">
          <HighlightText>Präzision und Einfachheit:</HighlightText> Dokumentiere
          Hardwareinformationen effizient und klar, mit flexiblen
          Berichtsoptionen.
        </Typography>
        <Typography
          variant="body"
          align="center"
          style={{ marginTop: '0.5rem' }}
        >
          <HighlightText>Erweiterbarkeit:</HighlightText> Modulare Architektur,
          die leicht an neue Hardwareanforderungen angepasst werden kann.
        </Typography>
        <Typography
          variant="body"
          align="center"
          style={{ marginTop: '0.5rem' }}
        >
          <HighlightText>Pro-Features:</HighlightText> Zukünftige Integration
          erweiterter GUI-Optionen und detaillierter Berichtsmodelle für
          Business-Nutzer.
        </Typography>
      </SectionWrapper>

      {/* Aktueller Stand */}
      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        <Typography variant="h3" align="center" color="primary.dark">
          🚦 Aktueller Stand
        </Typography>
        <Typography variant="body" align="center">
          <HighlightText>Status:</HighlightText> In aktiver Entwicklung.{' '}
          <HighlightText>NoctuaLight</HighlightText> ist bereits verfügbar.
        </Typography>
        <Typography
          variant="body"
          align="center"
          style={{ marginTop: '0.5rem' }}
        >
          <HighlightText>Funktionalitäten:</HighlightText> Grundlegende
          Berichtsoptionen für Hardwareübersichten, Markdown-Export und
          Checkbox-basierte GUI.
        </Typography>
      </SectionWrapper>

      {/* Zukunftsaussichten */}
      <SectionWrapper backgroundColor="neutral.light">
        <Typography variant="h3" align="center" color="neutral.dark">
          🔮 Zukunftsaussichten
        </Typography>
        <Typography variant="body" align="center">
          Geplante Features umfassen eine erweiterte GUI, Unterstützung für
          zusätzliche Hardwarekomponenten und die Einführung eines Lizenzmodells
          für Pro- und Business-Features.
        </Typography>
      </SectionWrapper>

      {/* Features */}
      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        <Typography variant="h2" align="center" color="neutral.main">
          🔧 Funktionen von <HighlightText>Noctua</HighlightText>
        </Typography>
        <ListComponent items={features} />
      </SectionWrapper>

      {/* Badges */}
      <SectionWrapper backgroundColor="neutral.light">
        <Typography variant="h2" align="center" color="neutral.dark">
          🚀 Technologien hinter <HighlightText>Noctua</HighlightText>
        </Typography>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '1rem',
          }}
        >
          {badges.map(({ label, icon, variant }) => (
            <Badge key={label} label={label} icon={icon} variant={variant} />
          ))}
        </div>
      </SectionWrapper>

      {/* Call-to-Actions */}
      <SectionWrapper backgroundColor="neutral.light">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            marginTop: '2rem',
          }}
        >
          <Button
            variant="primary"
            onClick={() =>
              window.open('https://github.com/jonaszeihe/noctua', '_blank')
            }
          >
            GitHub Repository
          </Button>
          <Button variant="success">Download</Button>
        </div>
      </SectionWrapper>

      {/* Lightbox (nur für das Logo) */}
      {lightboxOpen && (
        <Lightbox
          media={[{ type: 'image', src: NoctuaLogo, alt: 'Noctua Logo' }]}
          currentIndex={0}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
