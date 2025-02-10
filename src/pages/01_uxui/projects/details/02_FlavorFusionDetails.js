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
import FlavorFusionImage from '../../../../assets/images/Projects/flavorfusion_logo.png'

export default function FlavorFusionDetails() {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const features = [
    {
      id: 'feature-1',
      content: (
        <>
          🎨 <HighlightText>Visuelles Storytelling:</HighlightText> Individuelle
          Farbpaletten und kulturelle Karten, die die Vielfalt der Weltküchen
          betonen.
        </>
      ),
    },
    {
      id: 'feature-2',
      content: (
        <>
          🧩 <HighlightText>User-Centered Design:</HighlightText> Intuitive
          Navigation und klar strukturierte Inhalte für eine optimale
          Benutzererfahrung.
        </>
      ),
    },
    {
      id: 'feature-3',
      content: (
        <>
          ✏️ <HighlightText>High-Fidelity Prototyping:</HighlightText>{' '}
          Realistischer und animierter Prototyp, der in Figma entwickelt wurde.
        </>
      ),
    },
    {
      id: 'feature-4',
      content: (
        <>
          🚀 <HighlightText>Interaktive Call-to-Actions:</HighlightText>{' '}
          Animierte Buttons und Download-Optionen, die Nutzer zur App führen.
        </>
      ),
    },
  ]

  const badges = ['figma', 'figjam', 'notion', 'chatgpt']

  return (
    <>
      <HeroWrapper gradient="accentSoft">
        <MediaDisplay
          media={[
            {
              type: 'image',
              src: FlavorFusionImage,
              alt: 'FlavorFusion Project Image',
            },
          ]}
          onClick={() => setLightboxOpen(true)}
        />
        <Typography variant="h1" align="center" color="neutral.black">
          🍴 FlavorFusion – Die Welt in deiner Küche
        </Typography>
      </HeroWrapper>

      <SectionWrapper backgroundColor="accent.lightest" elevated>
        <Typography
          variant="body"
          align="center"
          color="depth.darkest"
          style={{ marginTop: '1rem' }}
        >
          <HighlightText>FlavorFusion</HighlightText> ist eine interaktive
          Landing Page, die Nutzer dazu inspiriert, die Vielfalt der Weltküchen
          zu entdecken. Mit einem Fokus auf{' '}
          <HighlightText>visuelles Storytelling</HighlightText> und{' '}
          <HighlightText>intuitive Navigation</HighlightText> ist FlavorFusion
          nicht nur funktional, sondern auch eine emotionale Erfahrung, die Lust
          auf neue Rezepte macht.
        </Typography>
      </SectionWrapper>

      <SectionWrapper backgroundColor="secondary.lightest">
        <Typography variant="h2" align="center" color="accent.dark">
          🚀 Highlights von <HighlightText>FlavorFusion</HighlightText>
        </Typography>
        <ListComponent items={features} />
      </SectionWrapper>

      <SectionWrapper backgroundColor="accent.lightest" elevated>
        <Typography variant="h2" align="center" color="depth.darkest">
          🛠️ Tools und Technologien
        </Typography>
        <BadgeGrid badges={badges} />
      </SectionWrapper>

      <SectionWrapper backgroundColor="secondary.lightest">
        <Typography variant="h2" align="center" color="accent.dark">
          🚦 Aktueller Stand
        </Typography>
        <Typography variant="body" align="center" color="depth.darkest">
          <HighlightText>Status:</HighlightText> Der High-Fidelity-Prototyp ist
          abgeschlossen und als klickbare Case Study in React verfügbar.
        </Typography>
      </SectionWrapper>

      <SectionWrapper backgroundColor="accent.lightest">
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
              window.open('https://jonaszeihe.github.io/casestudyFlavorFusion/')
            }
          >
            Case Study
          </Button>
          <Button
            variant="success"
            onClick={() =>
              window.open(
                'https://www.figma.com/proto/Gy9acaVeAmKcpYY2qLSE24/Projekt4_FIGMA_JONAS?page-id=606%3A5597&node-id=4114-3680&viewport=3715%2C1765%2C0.4&t=9FZnOndSTJA4elsZ-1&scaling=scale-down&content-scaling=fixed'
              )
            }
          >
            Prototyp ansehen
          </Button>
        </div>
      </SectionWrapper>

      {lightboxOpen && (
        <Lightbox
          media={[
            {
              type: 'image',
              src: FlavorFusionImage,
              alt: 'FlavorFusion Project Image',
            },
          ]}
          currentIndex={0}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  )
}
