import React, { useState } from 'react'
import {
  HeroWrapper,
  SectionWrapper,
  MediaDisplay,
  Typography,
  HighlightText,
  ListComponent,
  Button,
  Lightbox,
} from '../../../../utils/sharedComponents'
import BadgeGrid from '../../../../components/common/BadgeGrid'
import NoctuaLogo from '../../../../assets/images/Projects/noctua_logo.png'

export default function NoctuaDetails() {
  const [lightboxOpen, setLightboxOpen] = useState(false)

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

  const badges = [
    'python',
    'tdd',
    'domain-driven-design',
    'user-friendly-gui',
    'markdown-export',
  ]

  return (
    <>
      <HeroWrapper gradient="secondaryBold">
        <Typography variant="h1" align="center" color="primary.lightest">
          🔧 <HighlightText>Noctua</HighlightText> – Systeminformationen mit
          Struktur
        </Typography>
      </HeroWrapper>

      <SectionWrapper backgroundColor="depth.dark">
        <Typography variant="h2" align="center" color="accent.main">
          Warum <HighlightText>Noctua</HighlightText>?
        </Typography>
        <Typography variant="body" align="left" color="primary.lightest">
          Hardwaredokumentation kann zeitaufwendig und kompliziert sein – doch
          nicht mit <HighlightText>Noctua</HighlightText>. Egal ob Kurzübersicht
          oder detaillierter Bericht, Noctua bietet dir alle relevanten
          Informationen, kompakt oder tiefgehend, mit nur wenigen Klicks.
        </Typography>
        <MediaDisplay
          media={[{ type: 'image', src: NoctuaLogo, alt: 'Noctua Logo' }]}
          onClick={() => setLightboxOpen(true)}
          variant="medium"
        />
      </SectionWrapper>

      <SectionWrapper backgroundColor="depth.darkest" elevated>
        <Typography variant="h2" align="center" color="primary.lightest">
          🔧 Funktionen von <HighlightText>Noctua</HighlightText>
        </Typography>
        <ListComponent items={features} />
      </SectionWrapper>

      <SectionWrapper backgroundColor="depth.dark">
        <Typography variant="h2" align="center" color="primary.lightest">
          🚀 Technologien hinter <HighlightText>Noctua</HighlightText>
        </Typography>
        <BadgeGrid badges={badges} />
      </SectionWrapper>

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
              window.open('https://github.com/jonaszeihe/noctuaLight', '_blank')
            }
          >
            GitHub Repository
          </Button>
          <Button variant="success">Download (Windows)</Button>
        </div>
      </SectionWrapper>

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
