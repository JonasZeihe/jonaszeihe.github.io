import React from 'react'
import {
  CardGrid,
  HeroWrapper,
  SectionWrapper,
  Typography,
  HighlightText,
} from '../utils/sharedComponents'
import FeatureCard from '../components/layout/FeatureCard'

export default function Introduction() {
  const featureProjects = [
    {
      id: '01_KIM',
      title: 'KIM',
      description:
        'Ein KI-gestütztes Tool für dynamische Persönlichkeitsprofile und Gruppenmatching.',
      tags: ['UX/UI Design'],
      gradient: 'depthToHighlight.subtle', // Verwende die .subtle-Variante
    },
    {
      id: '01_Shizen',
      title: 'Shizen',
      description:
        'Ein LMS mit dynamischen Kursinhalten, Gamification und skalierbarer Architektur.',
      tags: ['Java', 'React', 'MongoDB'],
      gradient: 'primaryLight.subtle', // Subtle-Variante für sekundäre Palette
    },
    {
      id: '02_Skryper',
      title: 'Skryper & Structra',
      description:
        'Analyse und Visualisierung in perfekter Harmonie. Effiziente Verzeichnisscans und automatisierte Projektstrukturen.',
      tags: ['Python'],
      gradient: 'warmDynamic.subtle', // Subtle-Variante für Akzent-Palette
    },
  ]

  return (
    <>
      <HeroWrapper gradient="accentToPrimary">
        <Typography variant="h1" align="center" color="neutral.ultraLight">
          🎨 Design trifft Funktion – Mein Portfolio
        </Typography>
      </HeroWrapper>

      <SectionWrapper backgroundColor="neutral.lightest">
        <Typography variant="h3" align="left" color="depth.main">
          <HighlightText>Willkommen</HighlightText> in meiner Welt, wo
          Kreativität auf Technologie trifft, um intuitive und skalierbare
          Lösungen zu schaffen. Als{' '}
          <HighlightText>Fullstack Designer</HighlightText> kombiniere ich{' '}
          <HighlightText>technische Präzision</HighlightText> mit{' '}
          <HighlightText>ästhetischem Design</HighlightText>, um Projekte zu
          schaffen, die inspirieren und Lösungen bieten.
        </Typography>

        <SectionWrapper backgroundColor="neutral.ultraLight">
          <Typography variant="h2" align="center" color="primary.darkest">
            🌟 Eine kleine Auswahl meiner spannendsten Projekte
          </Typography>

          <CardGrid>
            {featureProjects.map((project) => (
              <FeatureCard
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                targetId={project.id}
                gradient={project.gradient}
              />
            ))}
          </CardGrid>
        </SectionWrapper>
      </SectionWrapper>
    </>
  )
}
