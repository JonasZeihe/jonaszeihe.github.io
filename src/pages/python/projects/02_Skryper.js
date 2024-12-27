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
import SkryperLogo from '../../../assets/images/Projects/skryper_logo.png';

export default function Skryper() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Features für Skryper
  const features = [
    {
      id: 'feature-1',
      content: (
        <>
          🔍 <HighlightText>Intelligente Filterung:</HighlightText> Präzise und
          anpassbar für alle Verzeichnisse.
        </>
      ),
    },
    {
      id: 'feature-2',
      content: (
        <>
          ⚙️ <HighlightText>Anpassbare Konfiguration:</HighlightText> Leichte
          Integration und flexible Einstellungen.
        </>
      ),
    },
    {
      id: 'feature-3',
      content: (
        <>
          📋 <HighlightText>Logging:</HighlightText> Verbose, reduziert oder gar
          kein Logging, je nach Bedarf.
        </>
      ),
    },
    {
      id: 'feature-4',
      content: (
        <>
          ✅ <HighlightText>Hohe Testabdeckung:</HighlightText> 94% und
          kontinuierliche Integration.
        </>
      ),
    },
  ];

  // Beispiel-Badges für Skryper
  const badges = [
    { label: 'Python', icon: 'FaPython', variant: 'primary' },
    { label: 'GitHub', icon: 'FaGithub', variant: 'secondary' },
    { label: 'CLI Tool', icon: 'FaTerminal', variant: 'warning' },
  ];

  return (
    <>
      {/* Hauptbereich in einem SectionWrapper */}
      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        {/* Hero mit Titel und Bild */}
        <HeroWrapper gradient="neutralSoft">
          <Typography variant="h1" align="center">
            📂 Skryper – Ordnung im Chaos
          </Typography>
          <MediaDisplay
            media={[
              {
                type: 'image',
                src: SkryperLogo,
                alt: 'Skryper Logo',
              },
            ]}
          />
        </HeroWrapper>

        {/* Beschreibung */}
        <Typography variant="h2" align="center" color="neutral.main">
          <HighlightText>Skryper</HighlightText> analysiert und dokumentiert
          Verzeichnisstrukturen bis ins kleinste Detail. Perfekt, um große
          Projekte oder Server-Strukturen überschaubar zu halten.
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
          <Button variant="primary" onClick={() => {}}>
            Mehr erfahren
          </Button>
          <Button variant="secondary" onClick={() => {}}>
            GitHub
          </Button>
        </div>
      </SectionWrapper>

      {/* Lightbox, falls du das Bild anklickbar machen möchtest */}
      {lightboxOpen && (
        <Lightbox
          media={[
            {
              type: 'image',
              src: SkryperLogo,
              alt: 'Skryper Logo',
            },
          ]}
          currentIndex={0}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
