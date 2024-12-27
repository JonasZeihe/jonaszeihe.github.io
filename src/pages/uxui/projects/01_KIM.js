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
import KimImage from '../../../assets/images/Projects/kim_logo.png';

export default function KIM() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const features = [
    {
      id: 'feature-1',
      content: (
        <>
          🤖 <HighlightText>KI-Chatbot:</HighlightText> Persönlichkeitsprofile
          basierend auf Nutzerantworten.
        </>
      ),
    },
    {
      id: 'feature-2',
      content: (
        <>
          👫 <HighlightText>Gruppenmatching:</HighlightText>{' '}
          Kompatibilitätsscores für tiefere Verbindungen.
        </>
      ),
    },
    {
      id: 'feature-3',
      content: (
        <>
          ❓ <HighlightText>Automatisierte Icebreaker:</HighlightText>{' '}
          Spielerische Elemente zur Förderung von Gruppendialogen.
        </>
      ),
    },
    {
      id: 'feature-4',
      content: (
        <>
          🎯 <HighlightText>Designsystem:</HighlightText> Konsistente
          Farbpalette und intuitive Interaktion.
        </>
      ),
    },
  ];

  const badges = [
    { label: 'UX/UI Design', icon: 'FaPalette', variant: 'primary' },
    { label: 'Iteratives Prototyping', icon: 'FaRedo', variant: 'success' },
    { label: 'Figma & FigJam', icon: 'FaFigma', variant: 'accent' },
    { label: 'User-Centered Design', icon: 'FaUser', variant: 'secondary' },
  ];

  return (
    <>
      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        <HeroWrapper gradient="neutralSoft">
          <Typography variant="h1" align="center">
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
          />
        </HeroWrapper>

        <Typography variant="body" align="center" color="neutral.main">
          <HighlightText>KIM</HighlightText> ist ein UX/UI-Projekt, das die
          Entwicklung einer barrierefreien, KI-gestützten App simuliert. Der
          interaktive Prototyp veranschaulicht die Nutzung von{' '}
          <HighlightText>Persönlichkeitsprofilen</HighlightText>
          und <HighlightText>Gruppenmatching</HighlightText>, um tiefere
          Verbindungen zwischen Nutzern zu fördern. Die Case Study dokumentiert
          alle Designphasen, von der Research bis hin zum
          High-Fidelity-Prototypen.
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
            marginTop: '1rem',
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
            gap: '1rem',
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
          media={[{ type: 'image', src: KimImage, alt: 'KIM Project Image' }]}
          currentIndex={0}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
