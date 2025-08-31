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

import ShizenImage from '../../../../assets/images/Projects/shizen-logo.webp'

export default function ShizenDetails() {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const features = [
    {
      id: 'feature-1',
      content: (
        <>
          📝 <HighlightText>Dynamische Kursverwaltung:</HighlightText> Flexibles
          Erstellen und Verwalten hierarchischer Lerninhalte (Kurse → Module →
          Inhalte).
        </>
      ),
    },
    {
      id: 'feature-2',
      content: (
        <>
          🔄 <HighlightText>Rekursive Strukturen:</HighlightText> Nahtloses
          Verschachteln von Kursen, Modulen und Content-Blöcken.
        </>
      ),
    },
    {
      id: 'feature-3',
      content: (
        <>
          🔒 <HighlightText>Security & Rollen:</HighlightText> Authentifizierung
          (JWT) und rollenbasierte Autorisierung für Admins, Instruktoren und
          Teilnehmende.
        </>
      ),
    },
    {
      id: 'feature-4',
      content: (
        <>
          🌐 <HighlightText>REST-API first:</HighlightText> Saubere Endpunkte
          für Kursdaten, Nutzerverwaltung und Zugriffskontrolle.
        </>
      ),
    },
    {
      id: 'feature-5',
      content: (
        <>
          🎨 <HighlightText>Responsives UI:</HighlightText> Intuitives
          React-Frontend mit guter UX auf allen Geräten.
        </>
      ),
    },
  ]

  const roadmap = [
    {
      id: 'roadmap-1',
      content: (
        <>
          🌟 <HighlightText>Gamification:</HighlightText> Badges,
          XP/Progression, Feedback-Loops.
        </>
      ),
    },
    {
      id: 'roadmap-2',
      content: (
        <>
          📊 <HighlightText>Analytics:</HighlightText> Fortschritts-Metriken und
          Auswertung für Instruktoren.
        </>
      ),
    },
    {
      id: 'roadmap-3',
      content: (
        <>
          🧩 <HighlightText>Content-Bausteine:</HighlightText> Erweiterte Typen
          (z. B. Quiz/Tasks) auf Basis des bestehenden Domain-Modells.
        </>
      ),
    },
  ]

  const badgeKeys = [
    'java',
    'spring-boot',
    'spring-security',
    'mongodb',
    'rest-api',
    'react',
    'responsive-design',
    'ux-ui-best-practices',
    'jwt',
  ]

  return (
    <>
      <HeroWrapper variant="none">
        <Typography variant="h1" align="center">
          📚 <HighlightText>Shizen</HighlightText> – Die Plattform für modernes
          Lernen und Lehren
        </Typography>
      </HeroWrapper>

      <SectionWrapper variant="none">
        <Typography variant="h2" align="center">
          Warum <HighlightText>Shizen</HighlightText>?
        </Typography>
        <Typography variant="body" align="left">
          Shizen ist eine universelle Lernplattform, die moderne Technologien
          mit benutzerfreundlichem Design kombiniert. Sie bietet dynamische
          Kursverwaltungsfunktionen, Gamification-Elemente und datenbasiertes
          Feedback, um Bildungsanbieter und Teilnehmer gleichermaßen zu
          unterstützen.
        </Typography>

        <MediaDisplay
          media={[{ type: 'image', src: ShizenImage, alt: 'Shizen Logo' }]}
          onClick={() => setLightboxOpen(true)}
          variant="medium"
        />

        <Typography variant="h2" align="center">
          🚀 Kernfunktionen (heute)
        </Typography>
        <ListComponent items={features} />

        <Typography variant="h2" align="center">
          🛡️ Technologien
        </Typography>
        <BadgeGrid badges={badgeKeys} />

        <Typography variant="h3" align="center">
          🚦 Aktueller Stand
        </Typography>
        <Typography variant="body" align="center">
          <HighlightText>Status:</HighlightText> Backend vollständig
          implementiert (Spring Boot, Spring Security, JWT) mit rollenbasierter
          Autorisierung und REST-API; Frontend mit React, responsiv und an das
          Domain-Modell angebunden.
        </Typography>

        <Typography variant="h3" align="center" style={{ marginTop: 24 }}>
          🗺️ Roadmap (Nächste Schritte)
        </Typography>
        <ListComponent items={roadmap} />

        <Typography variant="h3" align="center" style={{ marginTop: 24 }}>
          🔍 Transparenz
        </Typography>
        <Typography variant="body" align="center">
          Der aktuelle Quellcode ist{' '}
          <HighlightText>privat (IP-Schutz)</HighlightText>. Es gibt eine{' '}
          <HighlightText>Live-Demo</HighlightText>. Auf Wunsch biete ich einen{' '}
          <HighlightText>Code-Walkthrough per Videocall</HighlightText> an.
        </Typography>

        <ButtonGrid>
          <Button
            variant="success"
            onClick={() =>
              window.open('https://shizen-dev.onrender.com/', '_blank')
            }
          >
            Live-Demo öffnen
          </Button>

          <Button
            onClick={() =>
              window.open('https://jonaszeihe.github.io/kyon/', '_blank')
            }
          >
            Kyon – Blog / Case Study
          </Button>

          <Button
            onClick={() =>
              window.open(
                'mailto:jonaszeihe@gmail.com?subject=Code-Walkthrough%20Shizen&body=Hi%20Jonas%2C%0A%0Aich%20würde%20gern%20einen%20kurzen%20Call%20zum%20Code-Walkthrough%20vereinbaren.%20Passt%20dir%20zeitnah%3F%0A%0AThanks!',
                '_blank'
              )
            }
          >
            Code-Walkthrough anfragen
          </Button>

          <Button
            variant="github"
            onClick={() =>
              window.open('https://github.com/jonaszeihe/ninjin', '_blank')
            }
          >
            Legacy-MVP (archiviert)
          </Button>
        </ButtonGrid>
      </SectionWrapper>

      {lightboxOpen && (
        <Lightbox
          media={[{ type: 'image', src: ShizenImage, alt: 'Shizen Logo' }]}
          currentIndex={0}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  )
}
