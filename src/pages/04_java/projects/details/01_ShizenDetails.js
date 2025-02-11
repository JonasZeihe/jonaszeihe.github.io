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

import ShizenImage from '../../../../assets/images/Projects/shizen-logo.png'

export default function ShizenDetails() {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  // Features von Shizen
  const features = [
    {
      id: 'feature-1',
      content: (
        <>
          📝 <HighlightText>Dynamische Kursverwaltung:</HighlightText> Flexibles
          Erstellen und Verwalten hierarchischer Lerninhalte mit wenigen Klicks.
        </>
      ),
    },
    {
      id: 'feature-2',
      content: (
        <>
          🔄 <HighlightText>Rekursive Strukturen:</HighlightText> Unterstützung
          für Kurse, Module und Inhalte, die sich nahtlos verschachteln lassen.
        </>
      ),
    },
    {
      id: 'feature-3',
      content: (
        <>
          🌟 <HighlightText>Gamification und Feedback:</HighlightText> Fördere
          Engagement durch Fortschrittsverfolgung, Abzeichen und interaktive
          Elemente.
        </>
      ),
    },
    {
      id: 'feature-4',
      content: (
        <>
          🔒 <HighlightText>Rollenbasierte Zugriffssteuerung:</HighlightText>{' '}
          Klare Trennung von Benutzerrollen für Admins, Instruktoren und
          Teilnehmer.
        </>
      ),
    },
    {
      id: 'feature-5',
      content: (
        <>
          🎓 <HighlightText>Modernes Design:</HighlightText> Ein intuitives und
          responsives Interface sorgt für eine exzellente Nutzererfahrung auf
          allen Geräten.
        </>
      ),
    },
  ]

  // Badge Keys für dynamische Nutzung der BadgeLibrary
  const badgeKeys = [
    'java',
    'spring-boot',
    'spring-security',
    'mongodb',
    'rest-api',
    'react',
    'responsive-design',
    'ux-ui-best-practices',
    'gamification',
  ]

  return (
    <>
      {/* Hero-Bereich */}
      <HeroWrapper gradient="primaryLight">
        <Typography variant="h1" align="center" color="neutral.deep">
          📚 <HighlightText>Shizen</HighlightText> – Die Plattform für modernes
          Lernen und Lehren
        </Typography>
      </HeroWrapper>

      {/* Einführung */}
      <SectionWrapper backgroundColor="primary.light" elevated>
        <Typography variant="h2" align="center" color="primary.darkest">
          Warum <HighlightText>Shizen</HighlightText>?
        </Typography>
        <Typography variant="body" align="left" color="primary.darkest">
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
      </SectionWrapper>

      {/* Features */}
      <SectionWrapper backgroundColor="primary.lightest" elevated>
        <Typography variant="h2" align="center" color="primary.dark">
          🚀 Features von <HighlightText>Shizen</HighlightText>
        </Typography>
        <ListComponent items={features} />
      </SectionWrapper>

      {/* Badges */}
      <SectionWrapper backgroundColor="neutral.ultraLight">
        <Typography variant="h2" align="center" color="accent.main">
          🛡️ Technologien hinter <HighlightText>Shizen</HighlightText>
        </Typography>
        <BadgeGrid badges={badgeKeys} />
      </SectionWrapper>

      {/* Aktueller Stand */}
      <SectionWrapper backgroundColor="primary.lightest" elevated>
        <Typography variant="h3" align="center" color="accent.main">
          🚦 Aktueller Stand
        </Typography>
        <Typography variant="body" align="center" color="primary.darkest">
          <HighlightText>Status:</HighlightText> Backend vollständig
          implementiert mit rollenbasiertem Zugriff und API-Endpunkten.
        </Typography>
      </SectionWrapper>

      {/* Call-to-Actions */}
      <SectionWrapper backgroundColor="primary.lightest">
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
              window.open('https://github.com/jonaszeihe/shizen', '_blank')
            }
          >
            GitHub Repository
          </Button>
          <Button
            variant="success"
            onClick={() =>
              window.open('https://shizen-dev.onrender.com/', '_blank')
            }
          >
            Shizen
          </Button>
        </div>
      </SectionWrapper>

      {/* Lightbox (nur für das Bild) */}
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
