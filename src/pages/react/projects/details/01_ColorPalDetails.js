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
      <HeroWrapper gradient="accentPlayful">
        <MediaDisplay
          media={[{ type: 'image', src: ColorPalImage, alt: 'ColorPal Logo' }]}
          onClick={() => setLightboxOpen(true)}
        />
        <Typography variant="h1" align="center" color="accent.lightest">
          🎨 <HighlightText>colorPal</HighlightText> – Transform Data Into Art
        </Typography>
      </HeroWrapper>

      {/* Einführung */}
      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        <Typography variant="h2" align="center" color="accent.dark">
          Warum <HighlightText>colorPal</HighlightText>?
        </Typography>

        <Typography variant="body" align="center" color="accent.dark">
          Daten müssen nicht langweilig sein. Mit{' '}
          <HighlightText>colorPal</HighlightText> lassen sich Diagramme in
          Echtzeit gestalten, dynamisch anpassen und als hochwertige SVG- oder
          PNG-Dateien exportieren. Es ist die perfekte Lösung für alle, die
          Daten auf eine kreative und intuitive Weise präsentieren möchten.
        </Typography>

        {/* Features */}
        <SectionWrapper backgroundColor="neutral.lightest" elevated>
          <Typography variant="h2" align="center" color="accent.dark">
            🚀 Features von <HighlightText>colorPal</HighlightText>
          </Typography>
          <ListComponent items={features} />
        </SectionWrapper>

        {/* Badges */}
        <SectionWrapper backgroundColor="neutral.lightest">
          <Typography variant="h2" align="center" color="highlight.dark">
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
          <Typography variant="h3" align="center" color="highlight.dark">
            🚦 Aktueller Stand
          </Typography>
          <Typography variant="body" align="center" color="accent.dark">
            <HighlightText>Status:</HighlightText> Solide Grundlage mit
            funktionierenden Diagrammtypen und JSON-Handling. Weitere
            Styling-Optionen und eine optimierte Benutzeroberfläche befinden
            sich in Entwicklung.
          </Typography>
        </SectionWrapper>

        {/* Call-to-Actions */}
        <SectionWrapper backgroundColor="depth.main">
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
            <Button
              variant="success"
              onClick={() =>
                window.open('https://jonaszeihe.github.io/colorPal/', '_blank')
              }
            >
              Website
            </Button>
          </div>
        </SectionWrapper>
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
