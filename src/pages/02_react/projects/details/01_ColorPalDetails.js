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
  ButtonGrid,
} from '../../../../utils/sharedComponents'
import BadgeGrid from '../../../../components/common/BadgeGrid'
import ColorPalImage from '../../../../assets/images/Projects/colorpal_logo.png'

export default function ColorPalDetails() {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const features = [
    {
      id: 'cp1',
      content: (
        <>
          📊 <HighlightText>Interaktive Diagramme</HighlightText>: Unterstützt
          Pie, Donut und RadialBar – live editierbar mit direkter Vorschau.
        </>
      ),
    },
    {
      id: 'cp2',
      content: (
        <>
          🎨 <HighlightText>Styling in Echtzeit</HighlightText>: Schatten,
          Glows, Gradients – alles on the fly anpassbar.
        </>
      ),
    },
    {
      id: 'cp3',
      content: (
        <>
          🔗 <HighlightText>JSON-Schnittstelle</HighlightText>: Import & Export
          komplexer Datensätze für dynamische Visualisierungen.
        </>
      ),
    },
    {
      id: 'cp4',
      content: (
        <>
          🚀 <HighlightText>Exportoptionen</HighlightText>: Hochauflösende
          Ausgabe als PNG oder SVG – ready für Print und Web.
        </>
      ),
    },
  ]

  const badges = [
    'react',
    'styled-components',
    'json-handling',
    'dynamic-styling',
  ]

  return (
    <>
      <HeroWrapper gradient="accentPlayful">
        <Typography variant="h1" align="center" color="accent.lightest">
          colorPal – Diagramme, die gestalten
        </Typography>
      </HeroWrapper>

      <SectionWrapper backgroundColor="neutral.lightest">
        <Typography variant="body" align="left" color="accent.dark">
          <HighlightText>colorPal</HighlightText> ist ein Visualisierungstool,
          das aus trockenen Zahlen visuelle Erlebnisse macht. Entwickelt in
          React, mit Fokus auf dynamisches Styling und präzise
          Datenrepräsentation. Ziel: maximale Ausdruckskraft bei minimalem
          Aufwand.
        </Typography>

        <MediaDisplay
          media={[{ type: 'image', src: ColorPalImage, alt: 'ColorPal Logo' }]}
          onClick={() => setLightboxOpen(true)}
          variant="medium"
        />
      </SectionWrapper>

      <SectionWrapper backgroundColor="neutral.lightest">
        <Typography variant="h2" align="center" color="accent.dark">
          Features
        </Typography>
        <ListComponent items={features} />
      </SectionWrapper>

      <SectionWrapper backgroundColor="neutral.lightest">
        <Typography variant="h2" align="center" color="highlight.dark">
          Technologien & Tools
        </Typography>
        <BadgeGrid badges={badges} />
      </SectionWrapper>

      <SectionWrapper backgroundColor="neutral.lightest">
        <Typography variant="h2" align="center" color="accent.dark">
          Aktueller Stand
        </Typography>
        <Typography variant="body" align="center" color="accent.dark">
          Funktional und live einsetzbar. Erweiterungen in Arbeit:
          Vorlagensystem, Drag & Drop, und visuelles Styling per
          Tastatursteuerung.
        </Typography>
      </SectionWrapper>

      <SectionWrapper backgroundColor="depth.main">
        <ButtonGrid>
          <Button
            variant="primary"
            onClick={() =>
              window.open('https://github.com/jonaszeihe/colorpal', '_blank')
            }
          >
            GitHub Repo
          </Button>
          <Button
            variant="success"
            onClick={() =>
              window.open('https://jonaszeihe.github.io/colorPal/', '_blank')
            }
          >
            Live-Demo
          </Button>
        </ButtonGrid>
      </SectionWrapper>

      {lightboxOpen && (
        <Lightbox
          media={[{ type: 'image', src: ColorPalImage, alt: 'ColorPal Logo' }]}
          currentIndex={0}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  )
}
