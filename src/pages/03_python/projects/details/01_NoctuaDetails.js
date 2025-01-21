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
import NoctuaLogo from '../../../../assets/images/Projects/noctua_logo.png'

export default function NoctuaDetails() {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  // Features von Noctua
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
          übersichtliche und editierbare Berichte.
        </>
      ),
    },
    {
      id: 'feature-3',
      content: (
        <>
          💡 <HighlightText>Bedienfreundlich:</HighlightText> Intuitive
          Oberfläche mit Checkboxen für maßgeschneiderte Berichte.
        </>
      ),
    },
    {
      id: 'feature-4',
      content: (
        <>
          🔌 <HighlightText>Modularität:</HighlightText> Erweiterbar für neue
          Hardware und zukünftige Anforderungen.
        </>
      ),
    },
    {
      id: 'feature-5',
      content: (
        <>
          🚀 <HighlightText>NoctuaLight:</HighlightText> Reduzierte Version für
          schnelle und kompakte Hardwareübersichten.
        </>
      ),
    },
  ]

  // Badges für Noctua
  const badges = [
    { label: 'Python 3.10+', icon: 'FaPython', variant: 'primary' },
    { label: 'TDD', icon: 'FaBug', variant: 'success' },
    {
      label: 'Domain Driven Design',
      icon: 'FaProjectDiagram',
      variant: 'accent',
    },
    {
      label: 'Benutzerfreundliche GUI',
      icon: 'FaMousePointer',
      variant: 'secondary',
    },
    { label: 'Markdown-Export', icon: 'FaFileAlt', variant: 'warning' },
  ]

  return (
    <>
      {/* Hero-Bereich */}
      <HeroWrapper gradient="secondaryBold">
        <MediaDisplay
          media={[{ type: 'image', src: NoctuaLogo, alt: 'Noctua Logo' }]}
          onClick={() => setLightboxOpen(true)}
        />
        <Typography variant="h1" align="center" color="primary.lightest">
          🔧 <HighlightText>Noctua</HighlightText> – Systeminformationen mit
          Struktur
        </Typography>
      </HeroWrapper>

      {/* Einführung */}
      <SectionWrapper backgroundColor="primary.lightest" elevated>
        <SectionWrapper backgroundColor="depth.dark" elevated>
          <Typography variant="h2" align="center" color="accent.main">
            Warum <HighlightText>Noctua</HighlightText>?
          </Typography>
          <Typography variant="body" align="center" color="primary.lightest">
            Hardwaredokumentation kann zeitaufwendig und kompliziert sein – doch
            nicht mit <HighlightText>Noctua</HighlightText>. Egal ob
            Kurzübersicht oder detaillierter Bericht, Noctua bietet dir alle
            relevanten Informationen, kompakt oder tiefgehend, mit nur wenigen
            Klicks.
          </Typography>
        </SectionWrapper>

        {/* Aktueller Stand */}
        <SectionWrapper backgroundColor="depth.dark" elevated>
          <Typography variant="h3" align="center" color="accent.main">
            🚦 Aktueller Stand
          </Typography>
          <Typography variant="body" align="center" color="primary.lightest">
            <HighlightText>Status:</HighlightText> In aktiver Entwicklung.{' '}
            <HighlightText>NoctuaLight</HighlightText> ist bereits verfügbar.
          </Typography>
          <Typography
            variant="body"
            align="center"
            style={{ marginTop: '0.5rem' }}
            color="primary.lightest"
          >
            <HighlightText>Funktionalitäten:</HighlightText> Grundlegende
            Berichtsoptionen für Hardwareübersichten, Markdown-Export und
            Checkbox-basierte GUI.
          </Typography>
        </SectionWrapper>

        {/* Features */}
        <SectionWrapper backgroundColor="depth.dark" elevated>
          <Typography variant="h2" align="center" color="primary.lightest">
            🔧 Funktionen von <HighlightText>Noctua</HighlightText>
          </Typography>
          <ListComponent items={features} />
        </SectionWrapper>

        {/* Badges */}
        <SectionWrapper backgroundColor="depth.dark">
          <Typography variant="h2" align="center" color="primary.lightest">
            🚀 Technologien hinter <HighlightText>Noctua</HighlightText>
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
        <SectionWrapper backgroundColor="depth.dark">
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
                window.open('https://github.com/jonaszeihe/noctua', '_blank')
              }
            >
              GitHub Repository
            </Button>
            <Button variant="success">Download (Windows)</Button>
          </div>
        </SectionWrapper>
      </SectionWrapper>

      {/* Lightbox (nur für das Logo) */}
      {lightboxOpen && (
        <Lightbox
          media={[{ type: 'image', src: NoctuaLogo, alt: 'Noctua Logo' }]}
          currentIndex={0}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  )
}
