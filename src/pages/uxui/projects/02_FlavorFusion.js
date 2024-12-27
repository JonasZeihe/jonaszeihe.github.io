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
import FlavorFusionImage from '../../../assets/images/Projects/flavorfusion_logo.png';

export default function FlavorFusion() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const features = [
    {
      id: 'feature-1',
      content: (
        <>
          🎨 <HighlightText>Visuelles Storytelling:</HighlightText> Darstellung
          kultureller Vielfalt durch individuelle Farbpaletten und Karten.
        </>
      ),
    },
    {
      id: 'feature-2',
      content: (
        <>
          🧩 <HighlightText>User-Centered Design:</HighlightText> Intuitive
          Navigation mit klar strukturierter Informationsarchitektur.
        </>
      ),
    },
    {
      id: 'feature-3',
      content: (
        <>
          ✏️ <HighlightText>High-Fidelity Prototyping:</HighlightText>{' '}
          Realistische und animierte Landing Page in Figma erstellt.
        </>
      ),
    },
    {
      id: 'feature-4',
      content: (
        <>
          🚀 <HighlightText>Interaktive Call-to-Actions:</HighlightText>{' '}
          Animierte Buttons und Download-Optionen für hohe Konversionsraten.
        </>
      ),
    },
  ];

  const badges = [
    { label: 'Figma', icon: 'FaFigma', variant: 'primary' },
    { label: 'FigJam', icon: 'FaPencilAlt', variant: 'secondary' },
    { label: 'Notion', icon: 'FaBook', variant: 'accent' },
    { label: 'ChatGPT', icon: 'FaRobot', variant: 'success' },
  ];

  return (
    <>
      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        <HeroWrapper gradient="neutralSoft">
          <Typography variant="h1" align="center">
            🍴 FlavorFusion – Landing Page für eine Rezept-App
          </Typography>
          <MediaDisplay
            media={[
              {
                type: 'image',
                src: FlavorFusionImage,
                alt: 'FlavorFusion Project Image',
              },
            ]}
          />
        </HeroWrapper>

        <Typography variant="body" align="center" color="neutral.main">
          <HighlightText>FlavorFusion</HighlightText> ist ein
          UX/UI-Designprojekt, das die Entwicklung einer Landing Page für eine
          hypothetische Rezept-App simuliert. Der Prototyp zeigt, wie{' '}
          <HighlightText>visuelles Storytelling</HighlightText>
          und <HighlightText>kulturelle Vielfalt</HighlightText> durch
          ansprechende Designs und intuitive Navigation hervorgehoben werden
          können. Die Case Study dokumentiert die Designphasen, vom Wireframing
          bis zum High-Fidelity-Prototyp.
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
          media={[
            {
              type: 'image',
              src: FlavorFusionImage,
              alt: 'FlavorFusion Project Image',
            },
          ]}
          currentIndex={0}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
