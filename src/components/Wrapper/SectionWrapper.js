import styled from 'styled-components'
import WrapperBase from './WrapperBase'

const resolveBackground = (theme, backgroundColor, gradient) => {
  if (gradient) return theme.gradients[gradient] || theme.gradients.neutralSoft
  if (backgroundColor) {
    const [palette, shade] = backgroundColor.split('.')
    return theme.colors[palette]?.[shade] || theme.colors.neutral.ultraLight
  }
  return theme.colors.neutral.ultraLight
}

const SectionWrapper = styled(WrapperBase)`
  padding: ${({ theme, padding }) => padding || theme.spacing(4)};
  border-radius: ${({ theme, radius }) =>
    theme.borderRadius[radius] || theme.borderRadius.large};
  background: ${({ theme, backgroundColor, gradient }) =>
    resolveBackground(theme, backgroundColor, gradient)};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing(3)};
    margin: ${({ theme }) => theme.spacing(2)} auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing(2)};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 1200px;
  }
`

export default SectionWrapper
