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
          🎨 <HighlightText>Design durch Atmosphäre</HighlightText>: Acht
          Weltküchen, acht Paletten – jede eigenständig, jede aus echten
          Nationalgerichten entwickelt. Nicht generisch, nicht symbolisch.
          Sondern haptisch, textural, glaubwürdig.
        </>
      ),
    },
    {
      id: 'ff2',
      content: (
        <>
          🧭 <HighlightText>UX durch Reduktion</HighlightText>: Keine Ablenkung.
          Keine Umwege. Alles so, dass man sich zurechtfindet – ohne zu merken,
          dass man geführt wird.
        </>
      ),
    },
    {
      id: 'ff3',
      content: (
        <>
          ✏️ <HighlightText>Promptbasiertes Design</HighlightText>: KI-Bilder,
          ja. Aber nicht als Deko. Jeder Prompt überlegt, jeder Tisch ein echtes
          Setting. Gebrauchsspuren statt Deko.
        </>
      ),
    },
    {
      id: 'ff4',
      content: (
        <>
          📄 <HighlightText>Prozess sichtbar gemacht</HighlightText>: Figma,
          React, Case Study – alles dokumentiert, nachvollziehbar, bewusst. Kein
          Showcase. Ein Weg.
        </>
      ),
    },
  ]

  const badges = ['figma', 'figjam', 'notion', 'chatgpt']

  return (
    <>
      <HeroWrapper gradient="accentSoft">
        <Typography variant="h1" align="center" color="neutral.black">
          🍴 FlavorFusion – KI trifft Gestaltung trifft Kultur
        </Typography>
      </HeroWrapper>

      <Typography variant="body" align="left" color="depth.darkest">
        FlavorFusion war eine Aufgabenstellung – geworden ist es ein Stück
        Designpraxis.
        <br />
        <br />
        Ich hätte eine Oberfläche bauen können. Stattdessen habe ich mich
        gefragt:
        <em>
          Wie lässt sich kulturelle Esskultur visuell erzählen, ohne sie zu
          verflachen?
        </em>
        <br />
        <br />
        Die Antwort: Keine Icons, keine Klischees. Sondern Bildflächen, die nach
        Küche aussehen. Mit Spuren, mit Unordnung, mit Material.
        <br />
        Acht Kulturkreise, jeweils mit eigenen Nationalgerichten als
        Ausgangspunkt. Daraus: eigene Farbwelten, eigene Texturen – jeder Prompt
        von Hand geschrieben. Kein Zufall. Kein Style ohne Substanz.
        <br />
        <br />
        Die gesamte Journey: Konzeption, Bildentwicklung, UX, Prototyp, Case
        Study. Nicht als Demo – sondern als ernst gemeinter Versuch, Gestaltung
        als Sprache zu nutzen. Und KI nicht als Ersatz, sondern als Werkzeug zu
        begreifen.
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
        🔍 Was hier wirklich passiert ist
      </Typography>
      <ListComponent items={features} />

      <Typography variant="h2" align="center" color="depth.darkest">
        🛠 Tools & Methoden
      </Typography>
      <BadgeGrid badges={badges} />

      <Typography variant="h2" align="center" color="accent.dark">
        📌 Ergebnis
      </Typography>
      <Typography variant="body" align="center" color="depth.darkest">
        Ein vollständiger Figma-Prototyp. Eine eigenständige Case Study in
        React. Nicht zur Schau – zur Anwendung gedacht.
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
          Figma Prototyp ansehen
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
