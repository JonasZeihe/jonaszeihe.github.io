import React, { useState } from 'react'
import {
  HeroWrapper,
  Typography,
  HighlightText,
  ListComponent,
  MediaDisplay,
  Button,
  ButtonGrid,
  Lightbox,
} from '../../../../utils/sharedComponents'
import BadgeGrid from '../../../../components/common/BadgeGrid'
import FlavorFusionImage from '../../../../assets/images/Projects/flavorfusion_logo.png'

export default function FlavorFusionDetails() {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const features = [
    {
      id: 'ff1',
      content: (
        <>
          🎨 <HighlightText>Visuelles Storytelling</HighlightText>: Kulinarische
          Karten und individuelle Paletten, die kulturelle Vielfalt der
          Weltküchen erlebbar machen.
        </>
      ),
    },
    {
      id: 'ff2',
      content: (
        <>
          🧩 <HighlightText>UX durch Struktur</HighlightText>: Reduzierte
          Navigation, klare Inhaltshierarchien, sofortige Orientierung.
        </>
      ),
    },
    {
      id: 'ff3',
      content: (
        <>
          ✏️ <HighlightText>Prototyp mit Tiefe</HighlightText>:
          High-Fidelity-Design in Figma, durchdacht und animiert.
        </>
      ),
    },
    {
      id: 'ff4',
      content: (
        <>
          🚀 <HighlightText>Konversionsstarke UI</HighlightText>: Interaktive
          Call-to-Actions, bewusste Triggerpunkte, klare Handlungsschritte.
        </>
      ),
    },
  ]

  const badges = ['figma', 'figjam', 'notion', 'chatgpt']

  return (
    <>
      <HeroWrapper gradient="accentSoft">
        <Typography variant="h1" align="center" color="neutral.black">
          🍴 FlavorFusion – Die Welt in deiner Küche
        </Typography>
      </HeroWrapper>

      <Typography variant="body" align="left" color="depth.darkest">
        <HighlightText>FlavorFusion</HighlightText> ist eine digitale Bühne für
        interkulturelle Rezeptwelten. Ziel war, nicht nur zu informieren,
        sondern eine <HighlightText>emotionale Design-Erfahrung</HighlightText>{' '}
        zu schaffen. Visuelles Storytelling trifft hier auf klare UX – für
        Nutzer, die sich führen lassen wollen, ohne die Kontrolle zu verlieren.
      </Typography>

      <MediaDisplay
        media={[
          {
            type: 'image',
            src: FlavorFusionImage,
            alt: 'FlavorFusion Project Image',
          },
        ]}
        onClick={() => setLightboxOpen(true)}
        variant="medium"
      />

      <Typography variant="h2" align="center" color="accent.dark">
        Features
      </Typography>
      <ListComponent items={features} />

      <Typography variant="h2" align="center" color="depth.darkest">
        Tools & Methoden
      </Typography>
      <BadgeGrid badges={badges} />

      <Typography variant="h2" align="center" color="accent.dark">
        Aktueller Stand
      </Typography>
      <Typography variant="body" align="center" color="depth.darkest">
        Der Prototyp ist abgeschlossen. Als interaktive Case Study in React
        umgesetzt und bereits mobil getestet.
      </Typography>

      <ButtonGrid>
        <Button
          variant="casestudy"
          onClick={() =>
            window.open(
              'https://jonaszeihe.github.io/casestudyFlavorFusion/',
              '_blank'
            )
          }
        >
          Case Study öffnen
        </Button>
        <Button
          variant="success"
          onClick={() =>
            window.open(
              'https://www.figma.com/proto/Gy9acaVeAmKcpYY2qLSE24/Projekt4_FIGMA_JONAS?page-id=606%3A5597&node-id=4114-3680&viewport=3715%2C1765%2C0.4&t=9FZnOndSTJA4elsZ-1&scaling=scale-down&content-scaling=fixed',
              '_blank'
            )
          }
        >
          Prototyp ansehen
        </Button>
      </ButtonGrid>

      {lightboxOpen && (
        <Lightbox
          media={[
            {
              type: 'image',
              src: FlavorFusionImage,
              alt: 'FlavorFusion Project',
            },
          ]}
          currentIndex={0}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  )
}
