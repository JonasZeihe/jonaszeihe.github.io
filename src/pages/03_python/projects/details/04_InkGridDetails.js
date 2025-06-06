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
      id: 'f1',
      content: (
        <>
          🧠 <HighlightText>Automatisierte SVG-Erstellung:</HighlightText>{' '}
          Strukturiere und exportiere komplexe Farbpaletten mit Ebenen, Gruppen
          und Bezeichnungen.
        </>
      ),
    },
    {
      id: 'f2',
      content: (
        <>
          🎨 <HighlightText>Design-System Integration:</HighlightText> Export
          als JSON für nahtlosen Import via eigens entwickeltem Figma Plugin.
        </>
      ),
    },
    {
      id: 'f3',
      content: (
        <>
          🌗 <HighlightText>Light/Dark-Support:</HighlightText> Automatische
          Themenerkennung und Umstellung.
        </>
      ),
    },
    {
      id: 'f4',
      content: (
        <>
          📥 <HighlightText>Drag-and-Drop:</HighlightText> Einfacher Import von
          .txt- oder JSON-Dateien mit Palettendefinitionen.
        </>
      ),
    },
    {
      id: 'f5',
      content: (
        <>
          📦 <HighlightText>Sofort nutzbare Ausgabe:</HighlightText> SVGs & JSON
          für direkte Verwendung in Figma, Adobe XD & Codebases.
        </>
      ),
    },
  ]

  const badges = [
    'svg-automation',
    'json-output',
    'design-system-integration',
    'drag-and-drop',
    'multi-platform',
  ]

  return (
    <>
      <HeroWrapper gradient="warmBold">
        <Typography variant="h1" align="center" color="highlight.lightest">
          🎨 InkGrid – Farben mit Struktur
        </Typography>
      </HeroWrapper>

      <SectionWrapper backgroundColor="secondaryHighlight.light" elevated>
        <Typography variant="body" align="left" color="depth.darkest">
          Mit <HighlightText>InkGrid</HighlightText> gestaltest und exportierst
          du vollständige Farbpaletten für Designsysteme – strukturiert,
          thematisch differenziert und sofort einsatzbereit. Die App unterstützt
          dich beim Aufbau von konsistenten Styles für{' '}
          <HighlightText>Figma</HighlightText>,{' '}
          <HighlightText>AdobeXD</HighlightText> und Code-Workflows.
        </Typography>
        <MediaDisplay
          media={[{ type: 'image', src: InkGridLogo, alt: 'InkGrid Logo' }]}
          onClick={() => setLightboxOpen(true)}
          variant="medium"
        />
      </SectionWrapper>

      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        <Typography variant="h2" align="center" color="depth.dark">
          🚀 Highlights
        </Typography>
        <ListComponent items={features} />
      </SectionWrapper>

      <SectionWrapper backgroundColor="depth.lightest">
        <Typography variant="h2" align="center" color="neutral.black">
          🔧 Technologien & Konzepte
        </Typography>
        <BadgeGrid badges={badges} />
      </SectionWrapper>

      <SectionWrapper backgroundColor="neutral.lightest">
        <Typography variant="h3" align="center" color="depth.dark">
          🚦 Aktueller Stand
        </Typography>
        <Typography variant="body" align="center" color="depth.dark">
          <HighlightText>Status:</HighlightText> Stabil auf Windows & macOS.
          JSON-Schnittstelle für Token-Export integriert.
        </Typography>
        <Typography
          variant="body"
          align="center"
          style={{ marginTop: '0.5rem' }}
          color="depth.dark"
        >
          <HighlightText>Plugin-Support:</HighlightText> Direkter Import in
          Figma über{' '}
          <a
            href="https://github.com/JonasZeihe/InkGrid-Tokens"
            target="_blank"
            rel="noreferrer"
          >
            InkGrid-Tokens
          </a>
        </Typography>
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
          {' '}
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
