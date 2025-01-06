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
import InkGridLogo from '../../../../assets/images/Projects/inkgrid_logo.png';

export default function InkGridDetails() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Features von InkGrid
  const features = [
    {
      id: 'feature-1',
      content: (
        <>
          🌈 <HighlightText>Automatisierte SVG-Erstellung:</HighlightText>{' '}
          Generiere klare, strukturierte Farbpaletten mit Gruppierungen und
          Ebenen.
        </>
      ),
    },
    {
      id: 'feature-2',
      content: (
        <>
          🖌️ <HighlightText>Flexible Vorlagen:</HighlightText> Passe Farben,
          Gruppen und Hierarchien individuell an.
        </>
      ),
    },
    {
      id: 'feature-3',
      content: (
        <>
          🌗 <HighlightText>Light/Dark-Modus:</HighlightText> Automatisierte
          Anpassung für verschiedene Themes.
        </>
      ),
    },
    {
      id: 'feature-4',
      content: (
        <>
          🚀 <HighlightText>Drag-and-Drop-Unterstützung:</HighlightText>{' '}
          Importiere Textdateien mit Farbpaletten im Handumdrehen.
        </>
      ),
    },
    {
      id: 'feature-5',
      content: (
        <>
          📜 <HighlightText>Strukturierte Ausgabe:</HighlightText> SVG-Dateien,
          die sofort in Tools wie Figma oder AdobeXD verwendbar sind.
        </>
      ),
    },
  ];

  // Badges für InkGrid
  const badges = [
    { label: 'SVG-Optimierung', icon: 'FaShapes', variant: 'primary' },
    { label: 'Light/Dark-Modus', icon: 'FaMoon', variant: 'accent' },
    {
      label: 'Design-System-Kompatibilität',
      icon: 'FaPaintBrush',
      variant: 'success',
    },
    { label: 'Drag and Drop', icon: 'FaMousePointer', variant: 'warning' },
    { label: 'Windows-First', icon: 'FaWindows', variant: 'secondary' },
  ];

  return (
    <>
      {/* Hero-Bereich */}
      <HeroWrapper gradient="neutralSoft">
        <Typography variant="h1" align="center">
          🎨 <HighlightText>InkGrid</HighlightText> – Farben mit Struktur
        </Typography>
        <MediaDisplay
          media={[{ type: 'image', src: InkGridLogo, alt: 'InkGrid Logo' }]}
          onClick={() => setLightboxOpen(true)}
        />
        <Typography
          variant="body"
          align="center"
          color="neutral.lightest"
          style={{ marginTop: '1rem' }}
        >
          Organisiere Farbpaletten und generiere strukturierte SVG-Dateien mit{' '}
          <HighlightText>InkGrid</HighlightText>. Automatisierung trifft
          Design-Perfektion.
        </Typography>
      </HeroWrapper>

      {/* Einführung */}
      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        <Typography variant="h2" align="center" color="primary.dark">
          Warum <HighlightText>InkGrid</HighlightText>?
        </Typography>
        <Typography variant="body" align="center" color="neutral.main">
          Farbpaletten sind essenziell für jedes Design. Mit{' '}
          <HighlightText>InkGrid</HighlightText> wird der Prozess der Erstellung
          und Organisation revolutioniert. Importiere Farbpaletten aus
          Textdateien, passe sie an und exportiere perfekte SVG-Dateien – bereit
          für Tools wie Figma oder AdobeXD.
        </Typography>
        <Typography variant="body" align="center" style={{ marginTop: '1rem' }}>
          Mit automatisierter Unterstützung für Light- und Dark-Modi sowie
          flexiblen Vorlagen bietet <HighlightText>InkGrid</HighlightText>{' '}
          Designern und Entwicklern eine unverzichtbare Lösung.
        </Typography>
      </SectionWrapper>

      {/* Vision */}
      <SectionWrapper backgroundColor="neutral.light">
        <Typography variant="h3" align="center" color="accent.dark">
          🌍 Visionen hinter <HighlightText>InkGrid</HighlightText>
        </Typography>
        <Typography variant="body" align="center">
          <HighlightText>Automatisierung:</HighlightText> Effiziente
          Farborganisation und SVG-Generierung ohne manuellen Aufwand.
        </Typography>
        <Typography
          variant="body"
          align="center"
          style={{ marginTop: '0.5rem' }}
        >
          <HighlightText>Flexibilität:</HighlightText> Unterstützt individuelle
          Anpassungen und Light/Dark-Modi.
        </Typography>
        <Typography
          variant="body"
          align="center"
          style={{ marginTop: '0.5rem' }}
        >
          <HighlightText>Plattformunabhängigkeit:</HighlightText> Zukünftige
          Updates bringen Unterstützung für macOS und Linux.
        </Typography>
      </SectionWrapper>

      {/* Aktueller Stand */}
      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        <Typography variant="h3" align="center" color="primary.dark">
          🚦 Aktueller Stand
        </Typography>
        <Typography variant="body" align="center">
          <HighlightText>Status:</HighlightText> Aktive Entwicklung.
          Grundfunktionen sind stabil, zusätzliche Features folgen.
        </Typography>
        <Typography
          variant="body"
          align="center"
          style={{ marginTop: '0.5rem' }}
        >
          <HighlightText>Funktionalitäten:</HighlightText> Drag-and-Drop,
          automatisierte SVG-Erstellung, dynamische Farbgruppenerkennung.
        </Typography>
      </SectionWrapper>

      {/* Zukunftsaussichten */}
      <SectionWrapper backgroundColor="neutral.light">
        <Typography variant="h3" align="center" color="neutral.dark">
          🔮 Zukunftsaussichten
        </Typography>
        <Typography variant="body" align="center">
          Erweiterung auf weitere Plattformen, API-Integration für Designsysteme
          und verbesserte Farbmodifikations-Features.
        </Typography>
      </SectionWrapper>

      {/* Features */}
      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        <Typography variant="h2" align="center" color="neutral.main">
          🔧 Funktionen von <HighlightText>InkGrid</HighlightText>
        </Typography>
        <ListComponent items={features} />
      </SectionWrapper>

      {/* Badges */}
      <SectionWrapper backgroundColor="neutral.light">
        <Typography variant="h2" align="center" color="neutral.dark">
          🚀 Technologien hinter <HighlightText>InkGrid</HighlightText>
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
              window.open('https://github.com/jonaszeihe/inkgrid', '_blank')
            }
          >
            GitHub Repository
          </Button>
          <Button variant="success">Design-Tool öffnen</Button>
        </div>
      </SectionWrapper>

      {/* Lightbox (nur für das Logo) */}
      {lightboxOpen && (
        <Lightbox
          media={[{ type: 'image', src: InkGridLogo, alt: 'InkGrid Logo' }]}
          currentIndex={0}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
