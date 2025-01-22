import React, { useState } from 'react'
import {
  HeroWrapper,
  SectionWrapper,
  MediaDisplay,
  Typography,
  HighlightText,
  ListComponent,
  Badge,
  Button,
  Lightbox,
} from '../../../../utils/sharedComponents'
import KimImage from '../../../../assets/images/Projects/kim_logo.png'

export default function KIMDetails() {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const features = [
    {
      id: 'feature-1',
      content: (
        <>
          🤖 <HighlightText>KI-Chatbot:</HighlightText> Erstelle dynamische
          Persönlichkeitsprofile basierend auf Nutzerantworten und vergleiche
          diese für Gruppenmatching.
        </>
      ),
    },
    {
      id: 'feature-2',
      content: (
        <>
          👫 <HighlightText>Gruppenmatching:</HighlightText>{' '}
          Kompatibilitätsscores für bessere Interaktionen und tiefere
          Verbindungen zwischen Nutzern.
        </>
      ),
    },
    {
      id: 'feature-3',
      content: (
        <>
          🧊 <HighlightText>Automatisierte Icebreaker:</HighlightText> Förderung
          von Gruppendialogen durch spielerische Interaktionselemente.
        </>
      ),
    },
    {
      id: 'feature-4',
      content: (
        <>
          🎯 <HighlightText>Designsystem:</HighlightText> Einheitliche
          Farbpalette und intuitive Interaktionen für ein konsistentes
          Nutzererlebnis.
        </>
      ),
    },
  ]

  const badges = [
    { label: 'UX/UI Design', icon: 'FaPalette', variant: 'primary' },
    { label: 'Iteratives Prototyping', icon: 'FaRedo', variant: 'success' },
    { label: 'Figma & FigJam', icon: 'FaFigma', variant: 'accent' },
    { label: 'User-Centered Design', icon: 'FaUser', variant: 'secondary' },
    {
      label: 'Zugängliches Design',
      icon: 'FaUniversalAccess',
      variant: 'primary',
    },
  ]

  return (
    <>
      <SectionWrapper backgroundColor="primary.lightest">
        <HeroWrapper gradient="neutralSoft">
          <Typography variant="h1" align="center" color="depth.dark">
            🌟 KIM – Your Friend to Meet New Friends
          </Typography>
          <MediaDisplay
            media={[
              {
                type: 'image',
                src: KimImage,
                alt: 'KIM Project Image',
              },
            ]}
            onClick={() => setLightboxOpen(true)}
          />
        </HeroWrapper>

        <Typography
          variant="body"
          align="center"
          color="neutral.deep"
          style={{ marginTop: '1rem' }}
        >
          <HighlightText>KIM</HighlightText> wurde im Rahmen eines
          interdisziplinären Capstone-Projekts entwickelt, um soziale
          Verbindungen zu stärken. Die App nutzt{' '}
          <HighlightText>KI</HighlightText> und{' '}
          <HighlightText>zugängliches Design</HighlightText>, um Nutzern eine
          sichere und einladende Umgebung zu bieten. Von der
          Persönlichkeitsanalyse bis hin zu spielerischen Gruppenelementen – KIM
          bietet ein innovatives, interaktives Erlebnis.
        </Typography>
      </SectionWrapper>

      <SectionWrapper backgroundColor="secondary.lightest">
        <Typography variant="h2" align="center" color="depth.dark">
          🚀 Features von <HighlightText>KIM</HighlightText>
        </Typography>
        <ListComponent items={features} />
      </SectionWrapper>

      <SectionWrapper backgroundColor="primary.lightest">
        <Typography variant="h2" align="center" color="depth.dark">
          🛡️ Technologien hinter <HighlightText>KIM</HighlightText>
        </Typography>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '1rem',
          }}
        >
          {badges.map(({ label, icon, variant }) => (
            <Badge key={label} label={label} icon={icon} variant={variant} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper backgroundColor="secondary.lightest">
        <Typography variant="h2" align="center" color="primary.dark">
          🚦 Aktueller Stand und nächste Schritte
        </Typography>
        <Typography variant="body" align="center" color="neutral.deep">
          Der High-Fidelity-Prototyp ist vollständig und wurde mit Erfolg
          präsentiert. Zukünftige Schritte umfassen die Integration erweiterter
          KI-Funktionen und umfangreiche Usability-Tests zur Validierung des
          Designs.
        </Typography>
        <Typography variant="body" align="center" style={{ marginTop: '1rem' }}>
          <HighlightText>Zukunftsvision:</HighlightText> Entwicklung einer
          vollfunktionsfähigen App mit Echtzeit-Feedback und personalisierten
          Matching-Algorithmen.
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
          <Button
            variant="primary"
            onClick={() =>
              window.open(
                'https://jonaszeihe.github.io/case-study-KIM/',
                '_blank'
              )
            }
          >
            Case Study
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
          media={[{ type: 'image', src: KimImage, alt: 'KIM Project Image' }]}
          currentIndex={0}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  )
}
