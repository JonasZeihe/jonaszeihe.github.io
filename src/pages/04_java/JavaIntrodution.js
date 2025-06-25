import {
  HeroWrapper,
  SectionWrapper,
  ContentWrapper,
  Typography,
  HighlightText,
} from '../../utils/sharedComponents'

export default function JavaIntroduction() {
  return (
    <>
      <HeroWrapper gradient="primaryToSecondary">
        <Typography variant="h1" color="depth.dark" align="center">
          Java / React / Fullstack-Projekte
        </Typography>
      </HeroWrapper>

      <SectionWrapper backgroundColor="surface.backdrop">
        <ContentWrapper>
          <Typography variant="h3" align="center" color="depth.dark">
            In Projekten wie <HighlightText>Shizen</HighlightText> nutze ich
            Java und React nicht nur als Stack, sondern als Architekturprinzip.
            Es geht mir darum,{' '}
            <HighlightText>strukturierte Datenflüsse</HighlightText>,{' '}
            <HighlightText>authentifizierte APIs</HighlightText> und{' '}
            <HighlightText>modulare Frontends</HighlightText> so zu verbinden,
            dass Systeme verständlich bleiben – für Nutzer wie für Entwickler.
          </Typography>
        </ContentWrapper>
      </SectionWrapper>
    </>
  )
}
