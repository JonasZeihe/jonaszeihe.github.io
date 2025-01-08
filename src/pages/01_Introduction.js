import React from 'react';
import {
  CardGrid,
  HeroWrapper,
  SectionWrapper,
  Typography,
  HighlightText,
} from '../utils/sharedComponents';
import FeatureCard from '../components/layout/FeatureCard';

// Styled Components

export default function Introduction() {
  const featureProjects = [
    {
      id: '01_KIM',
      title: 'KIM',
      description:
        'Ein KI-gestütztes Tool für dynamische Persönlichkeitsprofile und Gruppenmatching.',
      tags: ['UX/UI Design', 'React', 'Python'],
    },
    {
      id: '01_Shizen',
      title: 'Shizen',
      description:
        'Ein LMS mit dynamischen Kursinhalten, Gamification und skalierbarer Architektur.',
      tags: ['Java', 'React', 'MongoDB'],
    },
    {
      id: '02_Skryper',
      title: 'Skryper & Structra',
      description:
        'Analyse und Visualisierung in perfekter Harmonie. Effiziente Verzeichnisscans und automatisierte Projektstrukturen.',
      tags: ['Python', 'Java'],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroWrapper gradient="highlightSoft" style={{ padding: '3rem 0' }}>
        <Typography variant="h1" align="center" color="neutral.lightest">
          🎨 Design trifft Funktion – Mein Portfolio
        </Typography>
      </HeroWrapper>

      {/* Einleitung */}
      <SectionWrapper backgroundColor="neutral.white">
        <Typography
          variant="h3"
          align="center"
          color="neutral.main"
          style={{
            marginTop: '1rem',
            maxWidth: '800px',
            margin: '1rem auto',
          }}
        >
          ✨<HighlightText>Willkommen</HighlightText> in meiner Welt, wo
          Kreativität auf Technologie trifft, um intuitive und skalierbare
          Lösungen zu schaffen. Entdecke meine Projekte und lass dich
          inspirieren! Als <HighlightText>Fullstack Designer</HighlightText>{' '}
          kombiniere ich <HighlightText>technische Präzision</HighlightText> mit{' '}
          <HighlightText>ästhetischem Design</HighlightText>, um Projekte zu
          schaffen, die inspirieren und Lösungen bieten.
        </Typography>
      </SectionWrapper>

      {/* Feature Projekte */}
      <SectionWrapper backgroundColor="neutral.lightest">
        <Typography variant="h3" align="center" color="primary.dark">
          🌟 Eine kleine Auswahl meiner spannendsten Projekte
        </Typography>

        <CardGrid>
          {featureProjects.map((project) => (
            <FeatureCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              targetId={project.id} // Ziel-ID für Scroll
            />
          ))}
        </CardGrid>
      </SectionWrapper>
    </>
  );
}
