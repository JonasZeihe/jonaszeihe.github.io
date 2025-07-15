import {
  HeroWrapper,
  SectionWrapper,
  Typography,
  HighlightText,
} from '../../utils/sharedComponents'

export default function PythonIntroduction() {
  return (
    <>
      <HeroWrapper variant="intense">
        <Typography variant="h1" align="center">
          Python-Projekte
        </Typography>
      </HeroWrapper>

      <SectionWrapper>
        <Typography variant="h3" align="center">
          Ich nutze Python für{' '}
          <HighlightText>strukturierte Datenverarbeitung</HighlightText>,{' '}
          <HighlightText>skalierbare Anwendungen</HighlightText> und zur
          Entwicklung von Tools, die technische Prozesse vereinfachen und
          beschleunigen. In Projekten wie{' '}
          <HighlightText>Skryper & Structra</HighlightText> stehen Klarheit,
          Automatisierung und plattformübergreifende Umsetzung im Fokus.
        </Typography>
      </SectionWrapper>
    </>
  )
}
