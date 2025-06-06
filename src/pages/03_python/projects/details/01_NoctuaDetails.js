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
import NoctuaLogo from '../../../../assets/images/Projects/noctua_logo.png'

export default function NoctuaDetails() {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const features = [
    {
      id: 'nt1',
      content: (
        <>
          🛠️ <HighlightText>Flexibilität:</HighlightText> Erfasse gezielt CPU-,
          GPU-, BIOS-Daten oder mehr.
        </>
      ),
    },
    {
      id: 'nt2',
      content: (
        <>
          💾 <HighlightText>Markdown-Export</HighlightText>: Ausgabe klarer
          Systemreports – direkt editierbar.
        </>
      ),
    },
    {
      id: 'nt3',
      content: (
        <>
          ✅ <HighlightText>Checkbox-GUI</HighlightText>: Intuitive Filter für
          selektive Hardwareinformationen.
        </>
      ),
    },
    {
      id: 'nt4',
      content: (
        <>
          🔧 <HighlightText>Detailtiefe nach Bedarf</HighlightText>: Von
          Kurzübersicht bis Tiefenanalyse.
        </>
      ),
    },
    {
      id: 'nt5',
      content: (
        <>
          🚀 <HighlightText>NoctuaLight</HighlightText>: Kompakte Version für
          schnelle Reports unterwegs.
        </>
      ),
    },
  ]

  const badges = [
    'python',
    'tdd',
    'domain-driven-design',
    'user-friendly-gui',
    'markdown-export',
  ]

  return (
    <>
      <HeroWrapper gradient="secondaryBold">
        <Typography variant="h1" align="center" color="primary.lightest">
          🛠 Noctua – Systeminfos, einfach verständlich
        </Typography>
      </HeroWrapper>

      <SectionWrapper backgroundColor="depth.dark">
        <Typography variant="body" align="left" color="primary.lightest">
          <HighlightText>Noctua</HighlightText> bringt Ordnung in komplexe
          Hardwaredaten. Ob IT-Admin, Entwickler oder Power User – mit Noctua
          generierst du klare Reports, exakt auf deinen Bedarf zugeschnitten.
        </Typography>

        <MediaDisplay
          media={[{ type: 'image', src: NoctuaLogo, alt: 'Noctua Logo' }]}
          onClick={() => setLightboxOpen(true)}
          variant="medium"
        />
      </SectionWrapper>

      <SectionWrapper backgroundColor="depth.darkest" elevated>
        <Typography variant="h2" align="center" color="primary.lightest">
          🔍 Features im Überblick
        </Typography>
        <ListComponent items={features} />
      </SectionWrapper>

      <SectionWrapper backgroundColor="depth.dark">
        <Typography variant="h2" align="center" color="primary.lightest">
          ⚙️ Technologien & Konzepte
        </Typography>
        <BadgeGrid badges={badges} />
      </SectionWrapper>

      <SectionWrapper backgroundColor="depth.dark" elevated>
        <Typography variant="h3" align="center" color="accent.main">
          🧪 Status & Ausblick
        </Typography>
        <Typography variant="body" align="center" color="primary.lightest">
          <HighlightText>NoctuaLight</HighlightText> ist stabil und
          einsatzbereit. Die Vollversion wird modularisiert, dokumentiert und
          durch Benutzerrollen erweitert.
        </Typography>
      </SectionWrapper>

      <SectionWrapper backgroundColor="depth.dark">
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
              window.open('https://github.com/jonaszeihe/noctuaLight', '_blank')
            }
          >
            GitHub Repository
          </Button>
          <Button variant="success">Download (Windows)</Button>
        </div>
      </SectionWrapper>

      {lightboxOpen && (
        <Lightbox
          media={[{ type: 'image', src: NoctuaLogo, alt: 'Noctua Logo' }]}
          currentIndex={0}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  )
}
