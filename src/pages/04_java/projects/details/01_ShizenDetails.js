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
      <HeroWrapper>
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
          🚀 Features von <HighlightText>Shizen</HighlightText>
        </Typography>
        <ListComponent items={features} />

        <Typography variant="h2" align="center">
          🛡️ Technologien hinter <HighlightText>Shizen</HighlightText>
        </Typography>
        <BadgeGrid badges={badgeKeys} />

        <Typography variant="h3" align="center">
          🚦 Aktueller Stand
        </Typography>
        <Typography variant="body" align="center">
          <HighlightText>Status:</HighlightText> Backend vollständig
          implementiert mit rollenbasiertem Zugriff und API-Endpunkten.
        </Typography>

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
              window.open('https://github.com/jonaszeihe/ninjin', '_blank')
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
