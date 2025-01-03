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
} from '../../../utils/sharedComponents';
import ColorPalImage from '../../../assets/images/Projects/colorpal_logo.png';

export default function ColorPal() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

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
          colorPal – Transform Data Into Art 🎨
        </Typography>
        <MediaDisplay
          media={[
            {
              type: 'image',
              src: ColorPalImage,
              alt: 'ColorPal Logo',
            },
          ]}
          onClick={() => setLightboxOpen(true)}
        />
      </HeroWrapper>

      {/* Inhaltsbereich */}
      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        <Typography variant="h2" align="center" color="primary.dark">
          Entdecke die Möglichkeiten von <HighlightText>colorPal</HighlightText>{' '}
          🚀
        </Typography>

        <Typography variant="body" align="center" color="neutral.main">
          Mit <HighlightText>colorPal</HighlightText> werden langweilige Daten
          zu lebendigen Kunstwerken. Durch intuitive Styling-Optionen und
          flexible Exportmöglichkeiten hilft colorPal, kreative Visualisierungen
          für jede Gelegenheit zu erstellen.
        </Typography>

        {/* Feature-Liste */}
        <ListComponent items={features} />

        {/* Badges */}
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

        {/* Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '2rem',
          }}
        >
          <Button variant="primary" onClick={() => {}}>
            Mehr erfahren
          </Button>
          <Button variant="success" onClick={() => {}}>
            Prototyp ansehen
          </Button>
        </div>
      </SectionWrapper>

      {/* Lightbox */}
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
