import styled from 'styled-components'
import WrapperBase from './WrapperBase'

const resolveBackground = (theme, backgroundColor, gradient) => {
  if (gradient) {
    return theme.gradients[gradient] || theme.gradients.neutralSoft
  }
  if (backgroundColor) {
    const [palette, shade] = backgroundColor.split('.')
    return theme.colors[palette]?.[shade] || theme.colors.neutral.ultraLight
  }
  return theme.colors.neutral.ultraLight
}

const SectionWrapper = styled(WrapperBase)`
  /* Grundlayout */
  padding: ${({ theme }) => theme.spacing(3)};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  background: ${({ theme, backgroundColor, gradient }) =>
    resolveBackground(theme, backgroundColor, gradient)};

  /* Responsive Einstellungen */
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing(2)};
    margin: ${({ theme }) => theme.spacing(2)} auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: auto;
    margin: ${({ theme }) => theme.spacing(2)} auto;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }

  /* Maximale Breite für große Bildschirme */
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 1200px;
  }
`

export default SectionWrapper
