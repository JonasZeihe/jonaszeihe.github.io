import React from 'react'
import {
  PageWrapper,
  ContentWrapper,
  SectionWrapper,
  ClusterWrapper,
  CardGrid,
  HeroWrapper,
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
        'Ein KI-gestütztes Tool zur Vernetzung von Menschen – mit Designsystem, Matchinglogik und Usability-Fokus.',
      badges: ['ux-ui-design'],
      gradient: 'depthFocus',
      buttonBackground: 'primary.main',
      buttonText: 'Zum KIM-Projekt',
    },
    {
      id: '01_Shizen',
      title: 'Shizen',
      description:
        'Ein modulares Lernsystem mit dynamischer Kursstruktur, Gamification und sicherem Fullstack-Backend.',
      badges: ['java', 'react', 'mongodb'],
      gradient: 'primaryLight',
      buttonBackground: 'primary.main',
      buttonText: 'Shizen entdecken',
    },
    {
      id: '02_Skryper',
      title: 'Skryper & Structra',
      description:
        'Analyse und Visualisierung von Projektbaumstrukturen – Effiziente Verzeichnisscans und automatisierte Generierung.',
      badges: ['python'],
      gradient: 'warmBold',
      buttonBackground: 'secondary.main',
      buttonText: 'Mehr über Skryper & Structra',
    },
  ]

  return (
    <PageWrapper>
      <HeroWrapper gradient="accentToPrimary" textColor="neutral.ultraLight">
        <Typography variant="h1" align="center" color="neutral.ultraLight">
          Design trifft Entwicklung – Mein Portfolio
        </Typography>
      </HeroWrapper>

      <ContentWrapper>
        <SectionWrapper backgroundColor="neutral.ultraLight">
          <Typography variant="h2" align="left" color="depth.dark">
            <HighlightText>Was du hier findest:</HighlightText> Eine kuratierte
            Auswahl meiner Projekte an der Schnittstelle von{' '}
            <HighlightText>Softwareentwicklung</HighlightText> und{' '}
            <HighlightText>User Experience</HighlightText>. Jedes Projekt wurde
            konzipiert, gestaltet und technisch umgesetzt mit dem Anspruch,
            nicht nur zu funktionieren – sondern zu überzeugen.
          </Typography>
        </SectionWrapper>

        <SectionWrapper backgroundColor="neutral.ultraLight">
          <Typography variant="h3" align="center" color="primary.darkest">
            🌟 Meine persönlich ausgewählten Highlights
          </Typography>

          <ClusterWrapper>
            <CardGrid>
              {featureProjects.map(
                ({
                  id,
                  title,
                  description,
                  badges,
                  gradient,
                  buttonText,
                  buttonBackground,
                }) => (
                  <FeatureCard
                    key={id}
                    title={title}
                    description={description}
                    badges={badges}
                    gradient={gradient}
                    targetId={id}
                    buttonBackground={buttonBackground}
                    buttonText={buttonText}
                  />
                )
              )}
            </CardGrid>
          </ClusterWrapper>
        </SectionWrapper>
      </ContentWrapper>
    </PageWrapper>
  )
}
