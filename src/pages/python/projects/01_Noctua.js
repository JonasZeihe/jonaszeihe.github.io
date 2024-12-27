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
import NoctuaLogo from '../../../assets/images/Projects/noctua_logo.png';

export default function Noctua() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

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
          übersichtliche Berichte.
        </>
      ),
    },
    {
      id: 'feature-3',
      content: (
        <>
          💡 <HighlightText>Bedienfreundlich:</HighlightText> Intuitive
          Oberfläche mit Checkboxen.
        </>
      ),
    },
    {
      id: 'feature-4',
      content: (
        <>
          🔌 <HighlightText>Modularität:</HighlightText> Erweiterbar für neue
          Hardware.
        </>
      ),
    },
  ];

  const badges = [
    { label: 'Python', icon: 'FaPython', variant: 'primary' },
    { label: 'TDD', icon: 'FaBug', variant: 'success' },
    {
      label: 'Domain Driven Design',
      icon: 'FaProjectDiagram',
      variant: 'accent',
    },
    { label: 'Fullstack Development', icon: 'FaCode', variant: 'secondary' },
  ];

  return (
    <>
      {/* Hero-Bereich für das Bild */}

      {/* Inhalts-Bereich */}

      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        <HeroWrapper gradient="neutralSoft">
          <Typography variant="h1" align="center">
            🔧 Noctua – Systeminformationen mit Struktur
          </Typography>
          <MediaDisplay
            media={[
              {
                type: 'image',
                src: NoctuaLogo,
                alt: 'Noctua Logo',
              },
            ]}
          />
        </HeroWrapper>

        <Typography variant="h2" align="center">
          <HighlightText>Noctua</HighlightText> liefert umfassende
          Hardwareberichte – einfach, flexibel und übersichtlich. Erfasse die
          wichtigsten Daten deines Systems mit nur wenigen Klicks.
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

        {/* Dummy Buttons */}
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
          <Button variant="success" onClick={() => alert('Download geklickt!')}>
            Download
          </Button>
        </div>
      </SectionWrapper>

      {/* Lightbox (falls du das Bild anklickbar machen möchtest) */}
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
