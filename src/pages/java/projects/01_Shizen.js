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
} from '../../../utils/sharedComponents';
import ShizenImage from '../../../assets/images/Projects/shizen-logo.png';

export default function Shizen() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

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
          von wertvollem Feedback für Verbesserungen.
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

  const badges = [
    { label: 'Java', icon: 'FaJava', variant: 'primary' },
    { label: 'Spring Boot', icon: 'FaLeaf', variant: 'success' },
    { label: 'Spring Security', icon: 'FaLock', variant: 'accent' },
    { label: 'MongoDB', icon: 'FaDatabase', variant: 'secondary' },
    { label: 'REST APIs', icon: 'FaNetworkWired', variant: 'primary' },
    { label: 'React', icon: 'FaReact', variant: 'success' },
    { label: 'Responsive Design', icon: 'FaMobileAlt', variant: 'accent' },
    { label: 'UX/UI Best Practices', icon: 'FaPalette', variant: 'secondary' },
    {
      label: 'Rollenbasierte Zugriffssteuerung',
      icon: 'FaUserShield',
      variant: 'primary',
    },
  ];

  return (
    <>
      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        <HeroWrapper gradient="neutralToPrimary">
          <Typography variant="h1" align="center">
            Shizen – Die Plattform für modernes Lernen und Lehren 📚
          </Typography>
          <MediaDisplay
            media={[
              {
                type: 'image',
                src: ShizenImage,
                alt: 'Shizen Logo',
              },
            ]}
            onClick={() => setLightboxOpen(true)}
          />
        </HeroWrapper>

        {/* Inhaltsbereich */}
        <Typography variant="h2" align="center" color="primary.dark">
          Entdecke die Highlights von <HighlightText>Shizen</HighlightText> 🚀
        </Typography>

        <Typography variant="body" align="center" color="neutral.main">
          <HighlightText>Shizen</HighlightText> setzt neue Standards im
          digitalen Lernen. Mit einer benutzerfreundlichen Oberfläche,
          skalierbarer Technologie und innovativen Funktionen bietet Shizen eine
          Lösung für Bildungsanbieter, die Qualität und Effizienz verbinden
          möchten.
        </Typography>

        {/* Feature-Liste */}
        <ListComponent items={features} />

        {/* Badges */}
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

        {/* Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            marginTop: '2rem',
          }}
        >
          <Button variant="primary" onClick={() => {}}>
            Mehr erfahren
          </Button>
          <Button variant="success" onClick={() => {}}>
            Prototyp ansehen
          </Button>
        </div>
      </SectionWrapper>

      {/* Lightbox */}
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
