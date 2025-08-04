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
import KimImage from '../../../../assets/images/Projects/kim_logo.webp'

export default function KIMDetails() {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const features = [
    {
      id: 'kim1',
      content: (
        <>
          🤖 <HighlightText>Persönlichkeitsmatching per KI</HighlightText>:
          Nutzerantworten werden zu Profilen, daraus entstehen smarte
          Gruppenvorschläge – nicht oberflächlich, sondern verbindend.
        </>
      ),
    },
    {
      id: 'kim2',
      content: (
        <>
          🧊 <HighlightText>Automatisierte Icebreaker</HighlightText>: Dynamisch
          generierte Fragen erleichtern den Einstieg – spielerisch, intuitiv,
          sozial.
        </>
      ),
    },
    {
      id: 'kim3',
      content: (
        <>
          🎨 <HighlightText>Designsystem mit Haltung</HighlightText>:
          WCAG-konform, konsistent, responsiv – gedacht für reale Nutzung, nicht
          nur fürs Showcase.
        </>
      ),
    },
    {
      id: 'kim4',
      content: (
        <>
          📚 <HighlightText>Vollständiger UX-Prozess</HighlightText>: Von
          Research bis Pitch – inklusive Marktanalyse, Interviews, User Flows,
          Personas, User Journey, High-Fidelity-Prototyp und React-Case-Study.
        </>
      ),
    },
  ]

  const badges = [
    'ux-ui-design',
    'teamarbeit',
    'user-research',
    'accessibility',
    'ki-integration',
    'prototyping',
  ]

  return (
    <>
      <HeroWrapper variant="none">
        <Typography variant="h1" align="center">
          🌟 KIM – Verbindungen, die tragen
        </Typography>
      </HeroWrapper>
      <SectionWrapper variant="none">
        <Typography variant="body" align="left">
          <HighlightText>KIM</HighlightText> war unser Capstone-Projekt – und es
          wollte mehr als nur eine App sein. In vier Wochen entstanden
          Strukturen, Flows, Interfaces und eine Vision: Wie schafft man Räume
          für echte Begegnung – digital, sozial, tragfähig?
          <br />
          <br />
          Was dabei herauskam, ist mehrschichtig. Psychologische Analyse trifft
          Gruppendynamik. Matching-Logik trifft Icebreaker. Und das alles in
          einem System, das zugänglich bleibt – in Form, Sprache, und
          Designprozess.
        </Typography>

        <MediaDisplay
          media={[{ type: 'image', src: KimImage, alt: 'KIM Project' }]}
          onClick={() => setLightboxOpen(true)}
          variant="medium"
        />

        <Typography variant="h2" align="center">
          🔍 Was steckt drin?
        </Typography>
        <ListComponent items={features} />

        <Typography variant="h2" align="center">
          🛠 Tools & Methoden
        </Typography>
        <BadgeGrid badges={badges} />

        <Typography variant="body" align="center">
          Der Prototyp ist klickbar, die React-Case-Study zeigt unseren gesamten
          Designprozess- vom ersten Moodboard bis zum Präsentationsvideo.
        </Typography>

        <ButtonGrid>
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
            variant="prototype"
            onClick={() =>
              window.open(
                'https://www.figma.com/proto/zOqkBn4RzZ9vU8yIWpjbwx/capstone_Gruppe4_designsystem?page-id=1%3A2&node-id=1269-9613',
                '_blank'
              )
            }
          >
            Prototyp ansehen
          </Button>
        </ButtonGrid>
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
