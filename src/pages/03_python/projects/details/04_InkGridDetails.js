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
import InkGridLogo from '../../../../assets/images/Projects/inkgrid_logo.png'

export default function InkGridDetails() {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const features = [
    {
      id: 'feature-1',
      content: (
        <>
          🌈 <HighlightText>Automatisierte SVG-Erstellung:</HighlightText>{' '}
          Generiere klare, strukturierte Farbpaletten mit Gruppierungen und
          Ebenen.
        </>
      ),
    },
    {
      id: 'feature-2',
      content: (
        <>
          🖌️ <HighlightText>Flexible Vorlagen:</HighlightText> Passe Farben,
          Gruppen und Hierarchien individuell an.
        </>
      ),
    },
    {
      id: 'feature-3',
      content: (
        <>
          🌗 <HighlightText>Light/Dark-Modus:</HighlightText> Automatisierte
          Anpassung für verschiedene Themes.
        </>
      ),
    },
    {
      id: 'feature-4',
      content: (
        <>
          🚀 <HighlightText>Drag-and-Drop-Unterstützung:</HighlightText>{' '}
          Importiere Textdateien mit Farbpaletten im Handumdrehen.
        </>
      ),
    },
    {
      id: 'feature-5',
      content: (
        <>
          📜 <HighlightText>Strukturierte Ausgabe:</HighlightText> SVG-Dateien,
          die sofort in Tools wie Figma oder AdobeXD verwendbar sind.
        </>
      ),
    },
  ]

  const badges = [
    'svg-optimization',
    'light-dark-mode',
    'design-system',
    'drag-and-drop',
    'windows-first',
  ]

  return (
    <>
      <HeroWrapper gradient="warmBold">
        <Typography variant="h1" align="center" color="highlight.lightest">
          🎨 InkGrid – Farben mit Struktur
        </Typography>
      </HeroWrapper>

      <SectionWrapper backgroundColor="secondaryHighlight.light" elevated>
        <Typography variant="h2" align="center" color="depth.darkest">
          Warum <HighlightText>InkGrid</HighlightText>?
        </Typography>
        <Typography variant="body" align="left" color="depth.darkest">
          Farbpaletten sind essenziell für jedes Design. Mit{' '}
          <HighlightText>InkGrid</HighlightText> wird der Prozess der Erstellung
          und Organisation revolutioniert. Importiere Farbpaletten aus
          Textdateien, passe sie an und exportiere perfekte SVG-Dateien – bereit
          für Tools wie Figma oder AdobeXD. Mit automatisierter Unterstützung
          für Light- und Dark-Modi sowie flexiblen Vorlagen bietet{' '}
          <HighlightText>InkGrid</HighlightText> Designern und Entwicklern eine
          unverzichtbare Lösung.
        </Typography>
        <MediaDisplay
          media={[{ type: 'image', src: InkGridLogo, alt: 'InkGrid Logo' }]}
          onClick={() => setLightboxOpen(true)}
          variant="medium"
        />
      </SectionWrapper>

      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        <Typography variant="h3" align="center" color="depth.dark">
          🚦 Aktueller Stand
        </Typography>
        <Typography variant="body" align="center" color="depth.dark">
          <HighlightText>Status:</HighlightText> Aktive Entwicklung.
          Grundfunktionen sind stabil, zusätzliche Features folgen.
        </Typography>
      </SectionWrapper>

      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        <Typography variant="h2" align="center" color="depth.dark">
          🔧 Funktionen von <HighlightText>InkGrid</HighlightText>
        </Typography>
        <ListComponent items={features} />
      </SectionWrapper>

      <SectionWrapper backgroundColor="depth.lightest">
        <Typography variant="h2" align="center" color="neutral.black">
          🚀 Technologien hinter <HighlightText>InkGrid</HighlightText>
        </Typography>
        <BadgeGrid badges={badges} />
      </SectionWrapper>

      <SectionWrapper backgroundColor="neutral.lightest">
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
              window.open('https://github.com/jonaszeihe/inkgrid', '_blank')
            }
          >
            GitHub Repository
          </Button>
          <Button
            variant="success"
            onClick={() =>
              window.open(
                'https://github.com/jonaszeihe/inkgrid/releases',
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
          media={[{ type: 'image', src: InkGridLogo, alt: 'InkGrid Logo' }]}
          currentIndex={0}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  )
}
