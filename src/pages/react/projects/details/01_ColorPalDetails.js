// src/pages/react/projects/details/01_ColorPalDetails.js
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
import ColorPalImage from '../../../../assets/images/Projects/colorpal_logo.png';

export default function ColorPalDetails() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Features von colorPal
  const features = [
    {
      id: 'feature-1',
      content: (
        <>
          🎨 <HighlightText>Dynamische Diagramme:</HighlightText> Unterstützung
          für verschiedene Typen wie Pie, Donut und Radial Bar.
        </>
      ),
    },
    {
      id: 'feature-2',
      content: (
        <>
          ✏️ <HighlightText>Echtzeit-Styling:</HighlightText> Anpassbare
          Schatten, Glows und Farbverläufe.
        </>
      ),
    },
    {
      id: 'feature-3',
      content: (
        <>
          📊 <HighlightText>JSON-Integration:</HighlightText> Import und Export
          von Daten zur nahtlosen Visualisierung.
        </>
      ),
    },
    {
      id: 'feature-4',
      content: (
        <>
          🚀 <HighlightText>Flexibler Export:</HighlightText> Ausgabe als SVG
          oder PNG für vielseitige Anwendungen.
        </>
      ),
    },
  ];

  // Badges für Technologien
  const badges = [
    { label: 'React', icon: 'FaReact', variant: 'primary' },
    { label: 'Styled Components', icon: 'FaPalette', variant: 'success' },
    { label: 'JSON Handling', icon: 'FaFileCode', variant: 'accent' },
    { label: 'Dynamic Styling', icon: 'FaBrush', variant: 'secondary' },
  ];

  return (
    <>
      {/* Hero-Bereich */}
      <HeroWrapper gradient="neutralToPrimary">
        <Typography variant="h1" align="center">
          🎨 <HighlightText>colorPal</HighlightText> – Transform Data Into Art
        </Typography>
        <MediaDisplay
          media={[{ type: 'image', src: ColorPalImage, alt: 'ColorPal Logo' }]}
          onClick={() => setLightboxOpen(true)}
        />
        <Typography
          variant="body"
          align="center"
          color="neutral.lightest"
          style={{ marginTop: '1rem' }}
        >
          Mit <HighlightText>colorPal</HighlightText> wird jede
          Datenvisualisierung zu einem Kunstwerk. Flexible Styling-Optionen und
          Exportmöglichkeiten machen es zu einem unverzichtbaren Werkzeug für
          Designer und Entwickler.
        </Typography>
      </HeroWrapper>

      {/* Einführung */}
      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        <Typography variant="h2" align="center" color="primary.dark">
          Warum <HighlightText>colorPal</HighlightText>?
        </Typography>
        <Typography variant="body" align="center" color="neutral.main">
          Daten müssen nicht langweilig sein. Mit{' '}
          <HighlightText>colorPal</HighlightText> lassen sich Diagramme in
          Echtzeit gestalten, dynamisch anpassen und als hochwertige SVG- oder
          PNG-Dateien exportieren. Es ist die perfekte Lösung für alle, die
          Daten auf eine kreative und intuitive Weise präsentieren möchten.
        </Typography>
      </SectionWrapper>

      {/* Vision */}
      <SectionWrapper backgroundColor="neutral.light">
        <Typography variant="h3" align="center" color="accent.dark">
          🌍 Visionen hinter <HighlightText>colorPal</HighlightText>
        </Typography>
        <Typography variant="body" align="center">
          <HighlightText>AI Vision:</HighlightText> Eine Plattform, die
          technische Daten mit kreativer Visualisierung vereint und so
          Präsentationen und Designs auf ein neues Level hebt.
        </Typography>
        <Typography
          variant="body"
          align="center"
          style={{ marginTop: '0.5rem' }}
        >
          <HighlightText>Technische Vision:</HighlightText> Durch die Nutzung
          von React und Styled Components werden dynamische Diagrammtypen mit
          flexiblen Styling-Optionen kombiniert.
        </Typography>
        <Typography
          variant="body"
          align="center"
          style={{ marginTop: '0.5rem' }}
        >
          <HighlightText>Benutzerzentrierung:</HighlightText> Ein intuitives
          Interface für Designer, Entwickler und kreative Köpfe, das auf
          einfache Bedienung und nahtlose Integration setzt.
        </Typography>
      </SectionWrapper>

      {/* Features */}
      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        <Typography variant="h2" align="center" color="primary.dark">
          🚀 Features von <HighlightText>colorPal</HighlightText>
        </Typography>
        <ListComponent items={features} />
      </SectionWrapper>

      {/* Badges */}
      <SectionWrapper backgroundColor="neutral.light">
        <Typography variant="h2" align="center" color="accent.dark">
          🛡️ Technologien hinter <HighlightText>colorPal</HighlightText>
        </Typography>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '1.5rem',
          }}
        >
          {badges.map(({ label, icon, variant }) => (
            <Badge key={label} label={label} icon={icon} variant={variant} />
          ))}
        </div>
      </SectionWrapper>

      {/* Aktueller Stand */}
      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        <Typography variant="h3" align="center" color="accent.dark">
          🚦 Aktueller Stand
        </Typography>
        <Typography variant="body" align="center" color="neutral.main">
          <HighlightText>Status:</HighlightText> Solide Grundlage mit
          funktionierenden Diagrammtypen und JSON-Handling. Weitere
          Styling-Optionen und eine optimierte Benutzeroberfläche befinden sich
          in Entwicklung.
        </Typography>
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
              window.open('https://github.com/jonaszeihe/colorpal', '_blank')
            }
          >
            GitHub Repository
          </Button>
          <Button variant="success">Prototyp ansehen</Button>
        </div>
      </SectionWrapper>

      {/* Lightbox nur für Bildvergrößerung */}
      {lightboxOpen && (
        <Lightbox
          media={[{ type: 'image', src: ColorPalImage, alt: 'ColorPal Logo' }]}
          currentIndex={0}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
