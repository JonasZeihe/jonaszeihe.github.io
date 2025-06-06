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
import KimImage from '../../../../assets/images/Projects/kim_logo.png'

export default function KIMDetails() {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const features = [
    {
      id: 'f1',
      content: (
        <>
          🤖 <HighlightText>Persönlichkeitsanalyse per KI</HighlightText>:
          Nutzerantworten erzeugen Profile für smartes Gruppenmatching.
        </>
      ),
    },
    {
      id: 'f2',
      content: (
        <>
          👫 <HighlightText>Kompatibilitäts-Scores</HighlightText>: Präzise
          Vorschläge für Gruppenzusammenstellungen mit sozialem Mehrwert.
        </>
      ),
    },
    {
      id: 'f3',
      content: (
        <>
          🧊 <HighlightText>Automatisierte Icebreaker</HighlightText>: Spielbare
          Einstiege für bessere Gruppendynamik.
        </>
      ),
    },
    {
      id: 'f4',
      content: (
        <>
          🎯 <HighlightText>Designsystem</HighlightText>: Skalierbar,
          WCAG-konform, konsistent im Look & Feel.
        </>
      ),
    },
  ]

  const badges = [
    'ux-ui-design',
    'figma',
    'user-centered-design',
    'accessibility',
    'prototyping',
  ]

  return (
    <>
      <HeroWrapper gradient="secondaryWarm">
        <Typography variant="h1" align="center" color="depth.dark">
          🌟 KIM – Your Friend to Meet New Friends
        </Typography>
      </HeroWrapper>

      <Typography variant="body" align="center" color="neutral.deep">
        <HighlightText>KIM</HighlightText> ist eine Matching-App, die mit Hilfe
        von KI und barrierefreiem Design echte soziale Begegnungen fördert.
        Entwickelt als Capstone-Projekt, zeigt sie, wie durchdachte
        Persönlichkeitsanalyse, smarte Gruppenvorschläge und klare UX ein
        starkes digitales Erlebnis schaffen können.
      </Typography>

      <MediaDisplay
        media={[{ type: 'image', src: KimImage, alt: 'KIM Project' }]}
        onClick={() => setLightboxOpen(true)}
        variant="medium"
      />

      <Typography variant="h2" align="center" color="depth.dark">
        Features
      </Typography>
      <ListComponent items={features} />

      <Typography variant="h2" align="center" color="depth.dark">
        Technologien
      </Typography>
      <BadgeGrid badges={badges} />

      <Typography variant="h2" align="center" color="depth.dark">
        Stand & Vision
      </Typography>
      <Typography variant="body" align="center" color="neutral.deep">
        Der High-Fidelity-Prototyp wurde im Rahmen des Bootcamps erfolgreich
        getestet. Nächster Schritt: Validierung durch User Tests und erste
        Entwicklungsetappen.
      </Typography>

      <Typography variant="body" align="center" color="accent.dark">
        <HighlightText>Vision:</HighlightText> Eine produktionsreife App mit
        Echtzeit-Matching, erweiterbaren Profiltypen und interaktiver
        Feedbacklogik.
      </Typography>

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
            variant="casestudy"
            onClick={() =>
              window.open(
                'https://jonaszeihe.github.io/case-study-KIM/',
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
                'https://www.figma.com/proto/zOqkBn4RzZ9vU8yIWpjbwx/capstone_Gruppe4_designsystem?page-id=1%3A2&node-id=1269-9613&viewport=6473%2C-426%2C0.65&t=glC7uXK0AhmNVLGg-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1184%3A20281',
                '_blank'
              )
            }
          >
            Prototyp ansehen
          </Button>
        </div>
      </SectionWrapper>

      {lightboxOpen && (
        <Lightbox
          media={[{ type: 'image', src: KimImage, alt: 'KIM Project' }]}
          currentIndex={0}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  )
}
