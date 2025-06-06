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
      id: 's1',
      content: (
        <>
          📂 <HighlightText>Rekursive Verzeichnisscans:</HighlightText> Skryper
          analysiert komplette Projektverzeichnisse und erzeugt transparente
          Baumstrukturen.
        </>
      ),
    },
    {
      id: 's2',
      content: (
        <>
          🔍 <HighlightText>.gitignore-Compliance:</HighlightText> Ignorierte
          Dateien und Verzeichnisse werden automatisch ausgeschlossen, um die
          Übersichtlichkeit zu maximieren.
        </>
      ),
    },
    {
      id: 's3',
      content: (
        <>
          ⚙️ <HighlightText>Individuelle Regeln</HighlightText> – per Filter
          selektive Pfadein- und -ausschlüsse.
        </>
      ),
    },
    {
      id: 's4',
      content: (
        <>
          📜 <HighlightText>Formatierte Textausgabe</HighlightText> – ideal für
          Dokumentationen, Reviews und Refactorings.
        </>
      ),
    },
    {
      id: 's5',
      content: (
        <>
          ✅ <HighlightText>TDD-abgesichert</HighlightText> – solide
          Architektur, hohe Testabdeckung, wartbarer Code.
        </>
      ),
    },
    {
      id: 's6',
      content: (
        <>
          🧩 <HighlightText>Modular & erweiterbar</HighlightText> – bereit für
          komplexere Projekte und zusätzliche Features.
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
          🧭 Skryper – Projektstruktur sichtbar machen
        </Typography>
      </HeroWrapper>

      <SectionWrapper backgroundColor="secondary.darkest">
        <Typography variant="body" align="left" color="neutral.ultraLight">
          <HighlightText>Skryper</HighlightText> hilft dir, gewachsene Codebasen
          schnell zu verstehen. Ob als Tool für Architektur-Reviews,
          Refactorings oder Dokumentation – Skryper liefert dir den klaren
          Überblick über jede Projektstruktur.
        </Typography>
        <MediaDisplay
          media={[{ type: 'image', src: SkryperLogo, alt: 'Skryper Logo' }]}
          onClick={() => setLightboxOpen(true)}
          variant="medium"
        />
      </SectionWrapper>

      <SectionWrapper backgroundColor="secondary.dark" elevated>
        <Typography variant="h2" align="center" color="neutral.ultraLight">
          🛠 Features im Überblick
        </Typography>
        <ListComponent items={features} />
      </SectionWrapper>

      <SectionWrapper backgroundColor="secondary.darkest">
        <Typography variant="h2" align="center" color="neutral.ultraLight">
          🔧 Technologien & Konzepte
        </Typography>
        <BadgeGrid badges={badges} />
      </SectionWrapper>

      <SectionWrapper backgroundColor="secondary.darkest" elevated>
        <Typography variant="h3" align="center" color="neutral.ultraLight">
          📦 Status & Ausblick
        </Typography>
        <Typography variant="body" align="center" color="neutral.ultraLight">
          <HighlightText>Status:</HighlightText> Stabil, produktionsbereit und
          aktiv gepflegt.
          <br />
          <HighlightText>Nächste Schritte:</HighlightText>{' '}
          Plattformunabhängigkeit (Linux/macOS), visuelles Output-Modul,
          Performance-Tuning.
        </Typography>
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
