import React, { useState } from 'react';
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
} from '../../../../utils/sharedComponents';
import ShizenImage from '../../../../assets/images/Projects/shizen-logo.png';

export default function ShizenDetails() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

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
          Elemente. Teilnehmer können Kurse bewerten, und Anbieter profitieren
          von wertvollem Feedback.
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
  ];

  // Badges für Shizen
  const badges = [
    { label: 'Java', icon: 'FaJava', variant: 'primary' },
    { label: 'Spring Boot', icon: 'FaLeaf', variant: 'success' },
    { label: 'Spring Security', icon: 'FaLock', variant: 'accent' },
    { label: 'MongoDB', icon: 'FaDatabase', variant: 'secondary' },
    { label: 'REST APIs', icon: 'FaNetworkWired', variant: 'primary' },
    { label: 'React', icon: 'FaReact', variant: 'success' },
    { label: 'Responsive Design', icon: 'FaMobileAlt', variant: 'accent' },
    { label: 'UX/UI Best Practices', icon: 'FaPalette', variant: 'secondary' },
    { label: 'Gamification', icon: 'FaTrophy', variant: 'primary' },
  ];

  return (
    <>
      {/* Hero-Bereich */}
      <HeroWrapper gradient="primaryLight">
        <MediaDisplay
          media={[{ type: 'image', src: ShizenImage, alt: 'Shizen Logo' }]}
          onClick={() => setLightboxOpen(true)}
        />
        <Typography variant="h1" align="center" color="neutral.deep">
          📚 <HighlightText>Shizen</HighlightText> – Die Plattform für modernes
          Lernen und Lehren
        </Typography>
      </HeroWrapper>

      {/* Einführung */}
      <SectionWrapper backgroundColor="primary.main" elevated>
        <SectionWrapper backgroundColor="primary.lightest" elevated>
          <Typography variant="h2" align="center" color="primary.dark">
            Warum <HighlightText>Shizen</HighlightText>?
          </Typography>
          <Typography variant="body" align="center" color="neutral.deep">
            Shizen ist eine universelle Lernplattform, die moderne Technologien
            mit benutzerfreundlichem Design kombiniert. Sie bietet dynamische
            Kursverwaltungsfunktionen, Gamification-Elemente und datenbasiertes
            Feedback, um Bildungsanbieter und Teilnehmer gleichermaßen zu
            unterstützen. Egal ob für Yoga-, Sprach- oder Kochkurse – Shizen
            setzt auf modernste Technologien wie Java, Spring Boot und React, um
            Bildung effizienter und interaktiver zu gestalten.
          </Typography>
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
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1rem',
              marginTop: '1.5rem',
            }}
          >
            {badges.map(({ label, icon, variant }) => (
              <Badge key={label} label={label} icon={icon} variant={variant} />
            ))}
          </div>
        </SectionWrapper>

        {/* Aktueller Stand */}
        <SectionWrapper backgroundColor="primary.lightest" elevated>
          <Typography variant="h3" align="center" color="accent.main">
            🚦 Aktueller Stand
          </Typography>
          <Typography variant="body" align="center" color="primary.darkest">
            <HighlightText>Status:</HighlightText> Backend vollständig
            implementiert mit rollenbasiertem Zugriff und API-Endpunkten.
            Frontend benötigt weitere UX/UI-Optimierungen.
          </Typography>
          <Typography variant="body" align="center" color="primary.darkest">
            Gamification-Elemente sind in Entwicklung und werden in zukünftigen
            Updates integriert.
          </Typography>
        </SectionWrapper>

        {/* Call-to-Actions */}
        <SectionWrapper backgroundColor="neutral.ultraLight">
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
  );
}
