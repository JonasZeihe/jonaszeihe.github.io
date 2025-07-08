import {
  HeroWrapper,
  SectionWrapper,
  Typography,
  HighlightText,
} from '../../utils/sharedComponents'

export default function JavaIntroduction() {
  return (
    <>
      <HeroWrapper variant="intense">
        <Typography variant="h1" align="center">
          Java / React / Fullstack-Projekte
        </Typography>
      </HeroWrapper>

      <SectionWrapper>
        <Typography variant="h3" align="center">
          In Projekten wie <HighlightText>Shizen</HighlightText> nutze ich Java
          und React nicht nur als Stack, sondern als Architekturprinzip. Es geht
          mir darum, <HighlightText>strukturierte Datenflüsse</HighlightText>,{' '}
          <HighlightText>authentifizierte APIs</HighlightText> und{' '}
          <HighlightText>modulare Frontends</HighlightText> so zu verbinden,
          dass Systeme verständlich bleiben – für Nutzer wie für Entwickler.
        </Typography>
      </SectionWrapper>
    </>
  )
}
