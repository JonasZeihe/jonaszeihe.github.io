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
import SkryperLogo from '../../../../assets/images/Projects/skryper_logo.png'

export default function SkryperDetails() {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const features = [
    {
      id: 'feature-1',
      content: (
        <>
          📂 <HighlightText>Rekursive Verzeichnisscans:</HighlightText> Skryper
          analysiert komplette Projektverzeichnisse und erzeugt transparente
          Baumstrukturen.
        </>
      ),
    },
    {
      id: 'feature-2',
      content: (
        <>
          🔍 <HighlightText>.gitignore-Compliance:</HighlightText> Ignorierte
          Dateien und Verzeichnisse werden automatisch ausgeschlossen, um die
          Übersichtlichkeit zu maximieren.
        </>
      ),
    },
    {
      id: 'feature-3',
      content: (
        <>
          🛠️ <HighlightText>Anpassbare Regeln:</HighlightText> Erstelle
          benutzerdefinierte Filter, um spezifische Verzeichnisse ein- oder
          auszuschließen.
        </>
      ),
    },
    {
      id: 'feature-4',
      content: (
        <>
          📋 <HighlightText>Klare Textausgaben:</HighlightText> Erstelle lesbare
          und detaillierte Baumstrukturen, ideal für Dokumentationen und
          Refactorings.
        </>
      ),
    },
    {
      id: 'feature-5',
      content: (
        <>
          🚀 <HighlightText>Hohe Testabdeckung:</HighlightText> Zuverlässigkeit
          durch rigoroses Test-Driven Development und sauberen, wartbaren Code.
        </>
      ),
    },
    {
      id: 'feature-6',
      content: (
        <>
          ⚙️ <HighlightText>Modularität und Erweiterbarkeit:</HighlightText>{' '}
          Einfach anpassbar für neue Dateiformate und komplexere Strukturen.
        </>
      ),
    },
  ]

  const badges = [
    'python',
    'gitignore-support',
    'modular-design',
    'cli-tool',
    'clean-code',
  ]

  return (
    <>
      <HeroWrapper gradient="primaryToSecondary">
        <Typography variant="h1" align="center" color="neutral.ultraLight">
          📂 <HighlightText>Skryper</HighlightText> – Projektstrukturen im Fokus
        </Typography>
      </HeroWrapper>

      <SectionWrapper backgroundColor="secondary.darkest" elevated>
        <Typography variant="h2" align="center" color="neutral.ultraLight">
          Warum <HighlightText>Skryper</HighlightText>?
        </Typography>
        <Typography variant="body" align="left" color="neutral.ultraLight">
          Softwareprojekte wachsen schnell, und mit ihnen auch ihre
          Verzeichnisstrukturen. Skryper analysiert diese rekursiv,
          berücksichtigt `.gitignore`-Regeln und erstellt klare, lesbare
          Baumstrukturen. Entwickler profitieren von höherer Effizienz, besserer
          Dokumentation und einem Werkzeug, das speziell für die Bedürfnisse
          moderner Projekte entwickelt wurde.
        </Typography>
        <MediaDisplay
          media={[{ type: 'image', src: SkryperLogo, alt: 'Skryper Logo' }]}
          onClick={() => setLightboxOpen(true)}
          variant="medium"
        />
      </SectionWrapper>

      <SectionWrapper backgroundColor="secondary.darkest" elevated>
        <Typography variant="h3" align="center" color="neutral.ultraLight">
          🚦 Aktueller Stand
        </Typography>
        <Typography variant="body" align="center" color="neutral.ultraLight">
          <HighlightText>Status:</HighlightText> Stabil und einsatzbereit mit
          allen Kernfunktionen.
        </Typography>
      </SectionWrapper>

      <SectionWrapper backgroundColor="secondary.darkest">
        <Typography variant="h3" align="center" color="neutral.ultraLight">
          🔮 Zukunft von <HighlightText>Skryper</HighlightText>
        </Typography>
        <Typography variant="body" align="center" color="neutral.ultraLight">
          Geplante Features umfassen plattformübergreifende Unterstützung für
          Linux und macOS, erweiterte Logging-Funktionen und
          Performance-Optimierungen für große Verzeichnisse.
        </Typography>
      </SectionWrapper>

      <SectionWrapper backgroundColor="secondary.dark" elevated>
        <Typography variant="h2" align="center" color="neutral.ultraLight">
          🔧 Funktionen von <HighlightText>Skryper</HighlightText>
        </Typography>
        <ListComponent items={features} />
      </SectionWrapper>

      <SectionWrapper backgroundColor="secondary.darkest">
        <Typography variant="h2" align="center" color="neutral.ultraLight">
          🚀 Technologien hinter <HighlightText>Skryper</HighlightText>
        </Typography>
        <BadgeGrid badges={badges} />
      </SectionWrapper>

      <SectionWrapper backgroundColor="secondary.darkest">
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
              window.open('https://github.com/jonaszeihe/skryper', '_blank')
            }
          >
            GitHub Repository
          </Button>
          <Button
            variant="success"
            onClick={() =>
              window.open(
                'https://github.com/JonasZeihe/skryper/releases',
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
          media={[{ type: 'image', src: SkryperLogo, alt: 'Skryper Logo' }]}
          currentIndex={0}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  )
}
