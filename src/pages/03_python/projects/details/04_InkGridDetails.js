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
import InkGridLogo from '../../../../assets/images/Projects/inkgrid_logo.webp'

export default function InkGridDetails() {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const features = [
    {
      id: 'ink1',
      content: (
        <>
          🧠 <HighlightText>Automatisierte SVG-Erstellung</HighlightText>:
          Farbpaletten als Swatches – mit Layerstruktur, Labeling und dualem
          Hintergrund (Light/Dark) direkt exportierbar.
        </>
      ),
    },
    {
      id: 'ink2',
      content: (
        <>
          🎨 <HighlightText>Designsystem-Export</HighlightText>: JSON-Ausgabe
          für tokenbasierte Integration – nahtlos weiterverwendbar im Plugin
          oder Code.
        </>
      ),
    },
    {
      id: 'ink3',
      content: (
        <>
          📥 <HighlightText>Drag-and-Drop Import</HighlightText>: .txt- und
          .json-Dateien mit Farbcodes einfach reinziehen – der Rest geschieht
          automatisch.
        </>
      ),
    },
    {
      id: 'ink4',
      content: (
        <>
          ⚙️ <HighlightText>Multi-Plattform, Multi-Zweck</HighlightText>: Export
          für Figma, Adobe XD, VSCode – oder jede andere Umgebung mit
          Style-Logik.
        </>
      ),
    },
  ]

  const badges = [
    'svg-swatches',
    'token-export',
    'design-system',
    'drag-and-drop',
  ]

  return (
    <>
      <HeroWrapper variant="none">
        <Typography variant="h1" align="center">
          🎨 InkGrid – Struktur für Farbe
        </Typography>
      </HeroWrapper>

      <SectionWrapper variant="none">
        <Typography variant="body" align="left">
          Wer mit Figma arbeitet und systematisch Farbpaletten anlegt, kennt den
          Aufwand: Swatches zeichnen, Farbcodes vergeben, Ebenen beschriften –
          und das Ganze bei jeder Designsystem-Iteration erneut. Ich habe lange
          nach einem Tool gesucht, das genau das abnimmt. Gab’s nicht. Also:
          gebaut.
          <br />
          <br />
          <HighlightText>InkGrid</HighlightText> nimmt dir das ab – mit
          strukturierter SVG-Erstellung, JSON-Export für Tokens und
          Plugin-Anbindung für den direkten Weg in Figma. Schnell, zuverlässig,
          erweiterbar.
        </Typography>

        <MediaDisplay
          media={[{ type: 'image', src: InkGridLogo, alt: 'InkGrid Logo' }]}
          onClick={() => setLightboxOpen(true)}
          variant="medium"
        />

        <Typography variant="h2" align="center">
          🚀 Was InkGrid kann
        </Typography>
        <ListComponent items={features} />

        <Typography variant="h2" align="center">
          🔧 Technologien & Konzepte
        </Typography>
        <BadgeGrid badges={badges} />

        <Typography variant="h3" align="center">
          📦 Aktueller Stand
        </Typography>
        <Typography variant="body" align="center">
          Fertig kompilierte App für Windows und macOS. Plugin-Support aktiv.
          JSON-Export integriert.
        </Typography>

        <ButtonGrid>
          <Button
            variant="github"
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
        </ButtonGrid>
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
