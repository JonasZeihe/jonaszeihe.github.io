import React from 'react'
import {
  HeroWrapper,
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

      <Typography variant="h2" align="center" color="depth.dark">
        Von <HighlightText>Problemverständnis</HighlightText> bis zu
        <HighlightText> klickbaren Prototypen</HighlightText>
      </Typography>

      <Typography variant="h3" align="left" color="depth.dark">
        Gute Interfaces entstehen nicht im Editor, sondern im Dialog. Ich
        kombiniere strukturierte Nutzerforschung mit iterativem Prototyping –
        damit aus Anforderungen echte Erlebnisse werden. Hier zeige ich, wie{' '}
        <HighlightText>
          Usability, Design Thinking, Barrierefreiheit und Designsysteme{' '}
        </HighlightText>
        in meinen Projekten zur Anwendung kommen.
      </Typography>

      <BadgeGrid badges={badges} />
    </>
  )
}
