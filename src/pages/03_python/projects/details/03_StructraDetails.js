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
import StructraLogo from '../../../../assets/images/Projects/structra_logo.png'

export default function StructraDetails() {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const features = [
    {
      id: 'f1',
      content: (
        <>
          ⚙️ <HighlightText>Automatisierte Struktur-Generierung:</HighlightText>{' '}
          Wandelt textbasierte Baumvorlagen in echte Verzeichnisse und Dateien
          um.
        </>
      ),
    },
    {
      id: 'f2',
      content: (
        <>
          🖱️ <HighlightText>Drag-and-Drop:</HighlightText> Bedienung über ein
          visuelles Interface – ohne Konsole, ohne Umwege.
        </>
      ),
    },
    {
      id: 'f3',
      content: (
        <>
          📁 <HighlightText>Projektvorlagen:</HighlightText> Reproduzierbare,
          konsistente Startpunkte für neue Projekte.
        </>
      ),
    },
    {
      id: 'f4',
      content: (
        <>
          ✅ <HighlightText>Hohe Testabdeckung:</HighlightText> Verlässliche
          Ergebnisse durch solide Testarchitektur.
        </>
      ),
    },
    {
      id: 'f5',
      content: (
        <>
          🌐 <HighlightText>Plattformstrategie:</HighlightText> Architektur
          vorbereitet für Windows, Linux & macOS.
        </>
      ),
    },
  ]

  const badges = [
    'python',
    'automation',
    'drag-and-drop',
    'project-templates',
    'skryper-integration',
  ]

  return (
    <>
      <HeroWrapper gradient="warmDynamic">
        <Typography variant="h1" align="center" color="neutral.lightest">
          🏗️ Structra – Von Strukturvorlage zu System
        </Typography>
      </HeroWrapper>

      <SectionWrapper backgroundColor="secondaryHighlight.lightest" elevated>
        <Typography variant="body" align="left" color="primary.darkest">
          <HighlightText>Structra</HighlightText> automatisiert den Aufbau
          komplexer Verzeichnis- und Dateistrukturen. In Verbindung mit{' '}
          <HighlightText>Skryper</HighlightText> entsteht ein Kreislauf: Skryper
          analysiert, Structra rekonstruiert – schneller, konsistenter,
          fehlertolerant.
        </Typography>
        <MediaDisplay
          media={[{ type: 'image', src: StructraLogo, alt: 'Structra Logo' }]}
          onClick={() => setLightboxOpen(true)}
          variant="medium"
        />
      </SectionWrapper>

      <SectionWrapper backgroundColor="secondaryHighlight.lightest">
        <Typography variant="h2" align="center" color="primary.dark">
          🛠 Funktionen von Structra
        </Typography>
        <ListComponent items={features} />
      </SectionWrapper>

      <SectionWrapper backgroundColor="secondaryHighlight.lightest" elevated>
        <Typography variant="h3" align="center" color="accent.main">
          📦 Status & Roadmap
        </Typography>
        <Typography variant="body" align="center" color="primary.dark">
          <HighlightText>Status:</HighlightText> Einsatzbereit auf Windows.
          <br />
          <HighlightText>Ausblick:</HighlightText> Erweiterte
          Drag-and-Drop-Funktionalität, zusätzliche Dateiformate (.dockerignore
          etc.), Plattformunabhängigkeit.
        </Typography>
      </SectionWrapper>

      <SectionWrapper backgroundColor="secondaryHighlight.lightest">
        <Typography variant="h2" align="center" color="primary.dark">
          🔧 Technologien & Konzepte
        </Typography>
        <BadgeGrid badges={badges} />
      </SectionWrapper>

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
