import React, { useState } from 'react'
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
} from '../../../../utils/sharedComponents'
import StructraLogo from '../../../../assets/images/Projects/structra_logo.png'

export default function StructraDetails() {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  // Features von Structra
  const features = [
    {
      id: 'feature-1',
      content: (
        <>
          📂 <HighlightText>Automatisierte Generierung:</HighlightText> Erstellt
          vollständige Verzeichnisse und Dateien aus textbasierten Baumvorlagen.
        </>
      ),
    },
    {
      id: 'feature-2',
      content: (
        <>
          🖱️ <HighlightText>Drag-and-Drop-Unterstützung:</HighlightText>{' '}
          Intuitives Interface für schnelle und einfache Bedienung.
        </>
      ),
    },
    {
      id: 'feature-3',
      content: (
        <>
          🗂️ <HighlightText>Projektvorlagen:</HighlightText> Für
          wiederverwendbare, skalierbare und konsistente Strukturen.
        </>
      ),
    },
    {
      id: 'feature-4',
      content: (
        <>
          ✅ <HighlightText>Hohe Testabdeckung:</HighlightText> 90%
          Testabdeckung für zuverlässige Funktionalität.
        </>
      ),
    },
    {
      id: 'feature-5',
      content: (
        <>
          🌍 <HighlightText>Plattformpotenzial:</HighlightText> Architektur für
          zukünftige Unterstützung von macOS und Linux.
        </>
      ),
    },
  ]

  // Badges für Structra
  const badges = [
    { label: 'Automatisierung', icon: 'FaCogs', variant: 'primary' },
    { label: 'Drag and Drop', icon: 'FaMousePointer', variant: 'accent' },
    { label: 'Projektvorlagen', icon: 'FaFolderOpen', variant: 'success' },
    { label: 'Python 3.10+', icon: 'FaPython', variant: 'primary' },
    { label: 'Skryper-Integration', icon: 'FaPuzzlePiece', variant: 'info' },
  ]

  return (
    <>
      {/* Hero-Bereich */}
      <HeroWrapper gradient="warmDynamic">
        <MediaDisplay
          media={[{ type: 'image', src: StructraLogo, alt: 'Structra Logo' }]}
          onClick={() => setLightboxOpen(true)}
        />
        <Typography variant="h1" align="center" color="neutral.lightest">
          🏭 Structra – Strukturen leicht gemacht
        </Typography>
      </HeroWrapper>

      {/* Einführung */}
      <SectionWrapper backgroundColor="secondaryHighlight.light" elevated>
        <SectionWrapper backgroundColor="secondaryHighlight.lightest" elevated>
          <Typography
            variant="h2"
            align="center"
            color="secondaryHighlight.dark"
          >
            Was ist <HighlightText>Structra</HighlightText>?
          </Typography>
          <Typography variant="body" align="center" color="primary.dark">
            Manuelle Verzeichnis- und Dateierstellungen sind zeitaufwendig und
            fehleranfällig. <HighlightText>Structra</HighlightText>{' '}
            automatisiert diesen Prozess, indem es textbasierte Baumvorlagen in
            reale Verzeichnisse und Dateien umwandelt. Gemeinsam mit{' '}
            <HighlightText>Skryper</HighlightText> bildet Structra ein
            leistungsstarkes Duo: Skryper analysiert bestehende
            Projektstrukturen, während Structra sie effizient wiederherstellt
            oder neue aufbaut.
          </Typography>
        </SectionWrapper>

        {/* Aktueller Stand */}
        <SectionWrapper backgroundColor="secondaryHighlight.lightest" elevated>
          <Typography
            variant="h3"
            align="center"
            color="secondaryHighlight.dark"
          >
            🚦 Aktueller Stand
          </Typography>
          <Typography variant="body" align="center" color="primary.dark">
            <HighlightText>Status:</HighlightText> Stabil und einsatzbereit mit
            Drag-and-Drop-Unterstützung für Windows.
          </Typography>
        </SectionWrapper>

        {/* Zukunftsaussichten */}
        <SectionWrapper backgroundColor="secondaryHighlight.lightest">
          <Typography variant="h3" align="center" color="accent.main">
            🔮 Zukunftsaussichten
          </Typography>
          <Typography variant="body" align="center" color="primary.dark">
            Erweiterung der Plattformunterstützung, Integration zusätzlicher
            Dateiformate wie `.dockerignore` und Optimierung der
            Drag-and-Drop-Funktion.
          </Typography>
        </SectionWrapper>

        {/* Features */}
        <SectionWrapper backgroundColor="secondaryHighlight.lightest" elevated>
          <Typography
            variant="h2"
            align="center"
            color="secondaryHighlight.dark"
          >
            🔧 Funktionen von <HighlightText>Structra</HighlightText>
          </Typography>
          <ListComponent items={features} />
        </SectionWrapper>

        {/* Badges */}
        <SectionWrapper backgroundColor="secondaryHighlight.lightest">
          <Typography variant="h2" align="center" color="primary.dark">
            🚀 Technologien hinter <HighlightText>Structra</HighlightText>
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
        <SectionWrapper backgroundColor="secondaryHighlight.lightest">
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
                window.open('https://github.com/jonaszeihe/structra', '_blank')
              }
            >
              GitHub Repository
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                window.open(
                  'https://github.com/JonasZeihe/structra/releases',
                  '_blank'
                )
              }
            >
              Download
            </Button>
          </div>
        </SectionWrapper>
      </SectionWrapper>

      {/* Lightbox (nur für das Logo) */}
      {lightboxOpen && (
        <Lightbox
          media={[{ type: 'image', src: StructraLogo, alt: 'Structra Logo' }]}
          currentIndex={0}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  )
}
