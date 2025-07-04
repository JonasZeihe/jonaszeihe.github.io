import React, { useState } from 'react'
import {
  HeroWrapper,
  SectionWrapper,
  MediaDisplay,
  Typography,
  HighlightText,
  ListComponent,
  Button,
  ButtonGrid,
  Lightbox,
} from '../../../../utils/sharedComponents'
import BadgeGrid from '../../../../components/common/BadgeGrid'
import SkryperLogo from '../../../../assets/images/Projects/skryper_structra_logo.png'

export default function SkryperDetails() {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const features = [
    {
      id: 'f1',
      content: (
        <>
          📂 <HighlightText>Projektstrukturen analysieren:</HighlightText>{' '}
          Skryper erstellt rekursive, `.gitignore`-sensitive Verzeichnisbäume –
          als Klartext, lesbar, dokumentierbar. Für Übersicht und sauberes
          Refactoring.
        </>
      ),
    },
    {
      id: 'f2',
      content: (
        <>
          🧱 <HighlightText>Projektstrukturen generieren:</HighlightText>{' '}
          Structra wandelt Templates in reale Ordner- und Dateistrukturen um.
          Schnell, konsistent, wiederverwendbar.
        </>
      ),
    },
    {
      id: 'f3',
      content: (
        <>
          🔄 <HighlightText>Gemeinsamer Kreislauf:</HighlightText> Skryper
          analysiert Bestehendes. Structra bildet Neues.
        </>
      ),
    },
    {
      id: 'f4',
      content: (
        <>
          🧪 <HighlightText>Solide Architektur:</HighlightText> Getestet,
          dokumentiert, modular aufgebaut, MIT-lizenziert. Lauffähig auf Windows
          und macOS.
        </>
      ),
    },
  ]

  const badges = [
    'python',
    'projektstruktur',
    'cli-tool',
    'template-generator',
    'clean-code',
    'test-coverage',
  ]

  return (
    <>
      <HeroWrapper variant="none">
        <Typography variant="h1" align="center">
          Stromlinienförmige Projektstrukturbäume – lesbar & wiederverwendbar
        </Typography>
      </HeroWrapper>

      <SectionWrapper variant="none">
        <MediaDisplay
          media={[
            {
              type: 'image',
              src: SkryperLogo,
              alt: 'Skryper and Structra Logo',
            },
          ]}
          onClick={() => setLightboxOpen(true)}
          variant="medium"
        />

        <Typography variant="body" align="left">
          Skryper entstand aus einem Problem: Ich wollte ein Projekt
          überarbeiten – hatte aber keinen klaren Überblick. Ich suchte ein
          Tool, das mir die Ordnerstruktur zeigt – `.gitignore`-konform, lesbar,
          strukturiert. Es gab keins.
          <br />
          <br />
          Als ich mit Skryper bestehende Projekte analysieren konnte, entstand
          die nächste Idee: Warum nicht diese Strukturen direkt als Vorlage
          nutzen? Structra war die Antwort. Aus Text wird Struktur –
          automatisch, konsistent, formbar.
          <br />
          <br />
          Ich nutze beide Tools bei fast jedem Projektstart – ob Software, CLI
          oder sogar für Notizen – echte Werkzeuge, gebaut aus Notwendigkeit.
        </Typography>

        <Typography variant="h2" align="center">
          Features
        </Typography>
        <ListComponent items={features} />

        <Typography variant="h2" align="center">
          🔧 Technologien & Konzepte
        </Typography>
        <BadgeGrid badges={badges} />

        <ButtonGrid>
          <Button
            variant="github"
            onClick={() =>
              window.open('https://github.com/jonaszeihe/skryper', '_blank')
            }
          >
            Zu Skryper auf GitHub
          </Button>
          <Button
            variant="github"
            onClick={() =>
              window.open('https://github.com/jonaszeihe/structra', '_blank')
            }
          >
            Zu Structra auf GitHub
          </Button>
        </ButtonGrid>
      </SectionWrapper>

      {lightboxOpen && (
        <Lightbox
          media={[
            {
              type: 'image',
              src: SkryperLogo,
              alt: 'Skryper and Structra Logo',
            },
          ]}
          currentIndex={0}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  )
}
