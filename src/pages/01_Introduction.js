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
      badges: ['ux-ui-design'],
      gradient: 'depthToHighlight.subtle',
    },
    {
      id: '01_Shizen',
      title: 'Shizen',
      description:
        'Ein LMS mit dynamischen Kursinhalten, Gamification und skalierbarer Architektur.',
      badges: ['java', 'react', 'mongodb'],
      gradient: 'primaryLight.subtle',
    },
    {
      id: '02_Skryper',
      title: 'Skryper & Structra',
      description:
        'Analyse und Visualisierung in perfekter Harmonie. Effiziente Verzeichnisscans und automatisierte Projektstrukturen.',
      badges: ['python'],
      gradient: 'warmDynamic.subtle',
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
          <HighlightText>Fullstack Designer</HighlightText>
          kombiniere ich <HighlightText>
            technische Präzision
          </HighlightText> mit{' '}
          <HighlightText>ästhetischem Design</HighlightText>, um Projekte zu
          schaffen, die inspirieren und Lösungen bieten.
        </Typography>

        <SectionWrapper backgroundColor="neutral.ultraLight">
          <Typography variant="h2" align="center" color="primary.darkest">
            🌟 Eine kleine Auswahl meiner spannendsten Projekte
          </Typography>

          <CardGrid>
            {featureProjects.map(
              ({ id, title, description, badges, gradient }) => (
                <FeatureCard
                  key={id}
                  title={title}
                  description={description}
                  badges={badges}
                  gradient={gradient}
                />
              )
            )}
          </CardGrid>
        </SectionWrapper>
      </SectionWrapper>
    </>
  )
}
