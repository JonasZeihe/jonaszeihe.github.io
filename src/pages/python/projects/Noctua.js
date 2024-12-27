import React, { useState } from 'react';
import {
  SectionWrapper,
  ListComponent,
  HighlightText,
  Badge,
  Typography,
  Lightbox,
  MediaDisplay,
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
    <SectionWrapper backgroundColor="neutral.lightest" elevated>
      {/* Medienbereich */}
      <MediaDisplay
        media={[{ type: 'image', src: NoctuaLogo, alt: 'Noctua Logo' }]}
      />

      {/* Hauptbeschreibung */}
      <Typography variant="h1" color="primary.dark" align="center">
        🔧 Noctua – Systeminformationen mit Struktur
      </Typography>

      <Typography variant="body" color="neutral.main" align="center">
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
          justifyContent: 'center',
          gap: '1rem',
          marginTop: '1rem',
        }}
      >
        {badges.map(({ label, icon, variant }) => (
          <Badge key={label} label={label} icon={icon} variant={variant} />
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          media={[{ type: 'image', src: NoctuaLogo, alt: 'Noctua Logo' }]}
          currentIndex={0}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </SectionWrapper>
  );
}
