import React from 'react'
import {
  HeroWrapper,
  SectionWrapper,
  Typography,
  HighlightText,
} from '../../utils/sharedComponents'
import BadgeGrid from '../../components/common/BadgeGrid'

export default function UxUiIntroduction() {
  const badges = ['ux-ui-design', 'figma', 'user-research', 'prototyping']

  return (
    <>
      <HeroWrapper gradient="highlightSoft" elevated>
        <Typography variant="h1" align="center" color="depth.dark">
          UX/UI Projekte
        </Typography>
      </HeroWrapper>

      <SectionWrapper backgroundColor="highlight.lightest">
        <Typography variant="h2" align="center" color="depth.dark">
          Von <HighlightText>nutzerzentrierter Forschung</HighlightText> bis hin
          zu <HighlightText>interaktiven Prototypen</HighlightText>
        </Typography>
        <Typography variant="h3" align="left" color="depth.dark">
          Mit einem Fokus auf intuitive Benutzererlebnisse und
          visuell-ansprechende Interfaces bringe ich kreative Visionen in die
          Realität. Entdecke, wie meine Projekte{' '}
          <HighlightText>Design und Technologie</HighlightText> harmonisch
          vereinen.
        </Typography>
        <BadgeGrid badges={badges} />
      </SectionWrapper>
    </>
  )
}
