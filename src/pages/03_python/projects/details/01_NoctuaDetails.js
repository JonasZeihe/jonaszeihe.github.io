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
          📂 <HighlightText>Kurzübersicht & Tiefenanalyse</HighlightText>:
          Reports reichen von kompakten Steckbriefen bis zu technischen
          Detailberichten – auf Knopfdruck.
        </>
      ),
    },
    {
      id: 'nt2',
      content: (
        <>
          🖱️ <HighlightText>Checkbox-Navigation</HighlightText>: Selektive
          Datenwahl per GUI – nutzerfreundlich, flexibel, präzise.
        </>
      ),
    },
    {
      id: 'nt3',
      content: (
        <>
          📝 <HighlightText>Markdown-Export</HighlightText>: Klar strukturierte,
          direkt nutzbare Berichte – editierbar, druckbar, versendbar.
        </>
      ),
    },
    {
      id: 'nt4',
      content: (
        <>
          🧱 <HighlightText>Modularer Aufbau</HighlightText>: Architekturbasis
          für Skalierung und gezielte Feature-Erweiterung.
        </>
      ),
    },
    {
      id: 'nt5',
      content: (
        <>
          🚀 <HighlightText>NoctuaLight</HighlightText>: Die minimalistische
          Variante – portabel, reduziert, sofort einsatzbereit.
        </>
      ),
    },
  ]

  const badges = [
    'python',
    'gui',
    'markdown-export',
    'tdd',
    'modular-design',
    'system-reporting',
  ]

  return (
    <>
      <HeroWrapper>
        <Typography variant="h1" align="center">
          🛠 Noctua – Systeminfos, strukturiert & verständlich
        </Typography>
      </HeroWrapper>

      <SectionWrapper>
        <Typography variant="body" align="left">
          <HighlightText>Noctua</HighlightText> entstand aus einer Lücke im
          Alltag: Wer Hardware sauber dokumentieren will – sei es für Verkauf,
          Diagnose oder Inventur – bekommt entweder unleserliche Datenmengen
          oder zu wenig Substanz. Noctua setzt genau da an.
          <br />
          <br />
          Entwickelt als persönlicher Einstieg in Python, verbindet Noctua klare
          Datenstruktur mit gezielter Nutzerführung – und bildet gleichzeitig
          das Fundament für spätere Tools wie{' '}
          <HighlightText>Skryper</HighlightText> und{' '}
          <HighlightText>Structra</HighlightText>. Vollständig getestet, modular
          aufgebaut, bereit zur Weiterentwicklung.
        </Typography>

        <MediaDisplay
          media={[{ type: 'image', src: NoctuaLogo, alt: 'Noctua Logo' }]}
          onClick={() => setLightboxOpen(true)}
          variant="medium"
        />
      </SectionWrapper>

      <SectionWrapper>
        <Typography variant="h2" align="center">
          🚀 Was steckt drin?
        </Typography>
        <ListComponent items={features} />
      </SectionWrapper>

      <SectionWrapper>
        <Typography variant="h2" align="center">
          ⚙️ Technologien & Konzepte
        </Typography>
        <BadgeGrid badges={badges} />
      </SectionWrapper>

      <SectionWrapper>
        <Typography variant="h3" align="center">
          📈 Stand & Perspektive
        </Typography>
        <Typography variant="body" align="center" color="primary.lightest">
          <HighlightText>NoctuaLight</HighlightText> ist veröffentlicht. Die
          Vollversion wird modularisiert erweitert – Ziel: erweiterbare Reports,
          Nutzerrollen und potenzielle Monetarisierung.
        </Typography>
      </SectionWrapper>

      <SectionWrapper>
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
          <Button
            variant="success"
            onClick={() =>
              window.open(
                'https://github.com/jonaszeihe/noctuaLight/releases',
                '_blank'
              )
            }
          >
            Download (Windows)
          </Button>
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
