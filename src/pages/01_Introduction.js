import React from 'react'
import {
  PageWrapper,
  HeroWrapper,
  SectionWrapper,
  Typography,
  HighlightText,
  CardGrid,
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
      buttonText: 'Zum KIM-Projekt',
    },
    {
      id: '01_Shizen',
      title: 'Shizen',
      description:
        'Ein modulares Lernsystem mit dynamischer Kursstruktur, Gamification und sicherem Fullstack-Backend.',
      badges: ['java'],
      buttonText: 'Shizen entdecken',
    },
    {
      id: '02_Skryper',
      title: 'Skryper & Structra',
      description:
        'Analyse und Visualisierung von Projektbaumstrukturen – Effiziente Verzeichnisscans und automatisierte Generierung.',
      badges: ['python'],
      buttonText: 'Mehr über Skryper & Structra',
    },
  ]

  return (
    <PageWrapper>
      <HeroWrapper variant="intense">
        <Typography variant="h1" align="center">
          Design trifft Entwicklung – Mein Portfolio
        </Typography>
      </HeroWrapper>

      <SectionWrapper variant="subtle">
        <Typography variant="h2" align="center">
          <HighlightText>Was du hier findest:</HighlightText>
        </Typography>

        <Typography variant="h3" align="center">
          Eine kuratierte Auswahl meiner Projekte an der Schnittstelle von{' '}
          <HighlightText>Softwareentwicklung</HighlightText> und{' '}
          <HighlightText>User Experience</HighlightText>. Jedes Projekt wurde
          konzipiert, gestaltet und technisch umgesetzt mit dem Anspruch, nicht
          nur zu funktionieren – sondern zu überzeugen.
        </Typography>

        <Typography variant="h3" align="center">
          🌟 Meine persönlich ausgewählten Highlights:
        </Typography>
      </SectionWrapper>

      <CardGrid>
        {featureProjects.map(
          ({
            id,
            title,
            description,
            badges,
            gradient,
            buttonText,
            variant,
          }) => (
            <FeatureCard
              key={id}
              title={title}
              description={description}
              badges={badges}
              gradient={gradient}
              targetId={id}
              buttonText={buttonText}
              variant={variant}
            />
          )
        )}
      </CardGrid>
    </PageWrapper>
  )
}
