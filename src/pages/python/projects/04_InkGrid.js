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
import InkGridLogo from '../../../assets/images/Projects/inkgrid_logo.png';

export default function InkGrid() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Features für InkGrid
  const features = [
    {
      id: 'feature-1',
      content: (
        <>
          🌈 <HighlightText>Automatisierte SVG-Erstellung:</HighlightText> Mit
          Gruppierungen und klaren Ebenen.
        </>
      ),
    },
    {
      id: 'feature-2',
      content: (
        <>
          🖌️ <HighlightText>Flexible Vorlagen:</HighlightText> Passen Farben,
          Gruppen und Hierarchien individuell an.
        </>
      ),
    },
    {
      id: 'feature-3',
      content: (
        <>
          🌗 <HighlightText>Light/Dark-Modus:</HighlightText> Automatisierte
          Anpassung für beide Themes.
        </>
      ),
    },
  ];

  // Beispiel-Badges für InkGrid
  const badges = [
    { label: 'SVG', icon: 'FaShapes', variant: 'primary' },
    { label: 'Colors', icon: 'FaPalette', variant: 'accent' },
    { label: 'Design-Tool', icon: 'FaPaintBrush', variant: 'success' },
  ];

  return (
    <>
      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        {/* Hero mit Titel und Logo */}
        <HeroWrapper gradient="neutralSoft">
          <Typography variant="h1" color="primary.dark" align="center">
            🎨 InkGrid – Farben mit Struktur
          </Typography>
          <MediaDisplay
            media={[
              {
                type: 'image',
                src: InkGridLogo,
                alt: 'InkGrid Logo',
              },
            ]}
          />
        </HeroWrapper>

        {/* Beschreibung */}
        <Typography variant="h2" align="center" color="neutral.main">
          <HighlightText>InkGrid</HighlightText> organisiert Farbpaletten und
          generiert strukturierte SVG-Dateien. Perfekt für komplexe Designs und
          automatisierte Farbschemata.
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

        {/* Buttons (Dummy-Aktionen) */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '2rem',
          }}
        >
          <Button
            variant="primary"
            onClick={() => alert('Mehr erfahren geklickt!')}
          >
            Mehr erfahren
          </Button>
          <Button
            variant="success"
            onClick={() => alert('Design-Tool öffnen geklickt!')}
          >
            Design-Tool öffnen
          </Button>
        </div>
      </SectionWrapper>

      {/* Lightbox (falls du das Bild anklickbar machen möchtest) */}
      {lightboxOpen && (
        <Lightbox
          media={[
            {
              type: 'image',
              src: InkGridLogo,
              alt: 'InkGrid Logo',
            },
          ]}
          currentIndex={0}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
