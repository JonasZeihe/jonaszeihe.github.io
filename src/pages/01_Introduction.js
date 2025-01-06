import React from 'react';
import styled from 'styled-components';
import {
  HeroWrapper,
  SectionWrapper,
  Typography,
  HighlightText,
} from '../utils/sharedComponents';

// Hier deine neue FeatureCard importieren
import FeatureCard from '../components/layout/FeatureCard';

// Grid für die Cards definieren
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export default function Introduction() {
  const featureProjects = [
    {
      id: 'project-1',
      title: 'KIM',
      description:
        'Ein innovatives Tool, das KI-basierte Persönlichkeitsprofile und Gruppenvorschläge nutzt, um Verbindungen zu fördern.',
      tags: ['UX/UI Design', 'React', 'Python'],
    },
    {
      id: 'project-2',
      title: 'Shizen',
      description:
        'Ein LMS mit dynamischen Kursinhalten, Gamification und skalierbarer Architektur – Lernen neu gedacht.',
      tags: ['Java', 'React', 'MongoDB'],
    },
    {
      id: 'project-3',
      title: 'Skryper & Structra',
      description:
        'Analyse und Visualisierung in perfekter Harmonie. Präzision trifft Datenvisualisierung.',
      tags: ['Python', 'Java'],
    },
    {
      id: 'project-4',
      title: 'colorPal',
      description:
        'Eine App, die Daten in ästhetische Kunst verwandelt – Datenvisualisierung trifft Design.',
      tags: ['React', 'Design', 'JSON'],
    },
  ];

  return (
    <>
      {/* Hero-Section */}
      <HeroWrapper gradient="primaryToSecondary" style={{ padding: '3rem 0' }}>
        <Typography variant="h1" align="center" color="neutral.lightest">
          🎨 Design trifft Funktion – Mein Portfolio
        </Typography>
        <Typography
          variant="body"
          align="center"
          color="neutral.lightest"
          style={{ marginTop: '1rem' }}
        >
          Willkommen in meiner Welt, wo Kreativität auf Technologie trifft, um
          intuitive und skalierbare Lösungen zu schaffen.
        </Typography>
      </HeroWrapper>

      {/* Einleitung */}
      <SectionWrapper backgroundColor="neutral.lightest" elevated>
        <Typography variant="h1" align="center" color="accent.dark">
          ✨ Einleitung
        </Typography>
        <Typography
          variant="body"
          align="center"
          color="neutral.main"
          style={{ marginTop: '1rem' }}
        >
          Als <HighlightText>Fullstack Designer</HighlightText> kombiniere ich{' '}
          <HighlightText>technische Präzision</HighlightText> mit{' '}
          <HighlightText>ästhetischem Design</HighlightText>, um Projekte zu
          schaffen, die inspirieren und Lösungen bieten.
        </Typography>
      </SectionWrapper>

      {/* Feature Projekte */}
      <SectionWrapper backgroundColor="neutral.light">
        <Typography variant="h2" align="center" color="primary.dark">
          🌟 Feature Projekte
        </Typography>

        <CardGrid>
          {featureProjects.map((project) => (
            <FeatureCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </CardGrid>
      </SectionWrapper>
    </>
  );
}
