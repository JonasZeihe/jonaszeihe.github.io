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
import StructraLogo from '../../../assets/images/Projects/structra_logo.png';

export default function Structra() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Features für Structra
  const features = [
    {
      id: 'feature-1',
      content: (
        <>
          🚀 <HighlightText>Effiziente Generierung:</HighlightText> Kompletter
          Projektstrukturen
        </>
      ),
    },
    {
      id: 'feature-2',
      content: (
        <>
          🎯 <HighlightText>Drag-and-Drop-Unterstützung:</HighlightText> Einfach
          und intuitiv
        </>
      ),
    },
    {
      id: 'feature-3',
      content: (
        <>
          📂 <HighlightText>Projektvorlagen:</HighlightText> Schnelles Aufsetzen
          neuer Projekte
        </>
      ),
    },
    {
      id: 'feature-4',
      content: (
        <>
          ✅ <HighlightText>Hohe Testabdeckung:</HighlightText> 90% für maximale
          Stabilität
        </>
      ),
    },
  ];

  // Beispiel-Badges für Structra
  const badges = [
    { label: 'Fullstack Dev', icon: 'FaCode', variant: 'secondary' },
    { label: 'Drag and Drop', icon: 'FaMousePointer', variant: 'accent' },
    { label: 'Effizienz', icon: 'FaRocket', variant: 'primary' },
  ];

  return (
    <>
      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        {/* Hero mit Titel und Logo */}
        <HeroWrapper gradient="neutralSoft">
          <Typography variant="h1" color="primary.dark" align="center">
            🏭 Structra – Struktur, wie sie sein soll
          </Typography>
          <MediaDisplay
            media={[
              {
                type: 'image',
                src: StructraLogo,
                alt: 'Structra Logo',
              },
            ]}
          />
        </HeroWrapper>

        {/* Beschreibung */}
        <Typography variant="h2" align="center" color="neutral.main">
          <HighlightText>Structra</HighlightText> erstellt Verzeichnisse und
          Dateien exakt nach Vorgabe. Perfekt für skalierbare und
          wiederverwendbare Projektaufbauten.
        </Typography>

        {/* Features-Liste */}
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
          <Button variant="primary" onClick={() => {}}>
            Mehr erfahren
          </Button>
          <Button variant="warning" onClick={() => {}}>
            Video ansehen
          </Button>
        </div>
      </SectionWrapper>

      {/* Lightbox (falls du das Bild anklickbar machen möchtest) */}
      {lightboxOpen && (
        <Lightbox
          media={[
            {
              type: 'image',
              src: StructraLogo,
              alt: 'Structra Logo',
            },
          ]}
          currentIndex={0}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
