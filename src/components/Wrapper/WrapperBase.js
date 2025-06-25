import styled, { css } from 'styled-components'

const resolveThemeColor = (theme, colorKey) => {
  if (!colorKey) return 'transparent'
  const [palette, shade = 'main'] = colorKey.split('.')
  return theme.colors[palette]?.[shade] || 'transparent'
}

const WrapperBase = styled.div`
  width: ${({ fluid }) => (fluid ? '100%' : 'auto')};
  max-width: ${({ theme, maxWidth }) =>
    maxWidth ? theme.breakpoints[maxWidth] || maxWidth : theme.breakpoints.xl};
  margin: ${({ centered, theme }) =>
    centered ? `${theme.spacing(2)} auto` : 'initial'};

  padding: ${({ theme, padding }) =>
    padding !== undefined ? theme.spacing(padding) : theme.spacing(2)};
  gap: ${({ theme, gap }) => (gap !== undefined ? theme.spacing(gap) : '0')};

  background: ${({ theme, gradient, backgroundColor }) =>
    gradient
      ? theme.gradients[gradient]
      : resolveThemeColor(theme, backgroundColor)};

  border-radius: ${({ theme, borderRadius }) =>
    theme.borderRadius[borderRadius] || theme.borderRadius.medium};

  box-shadow: ${({ theme, elevated }) =>
    elevated ? theme.boxShadow.medium : 'none'};

  display: ${({ display }) => display || 'block'};
  flex-direction: ${({ direction }) => direction || 'initial'};
  align-items: ${({ alignItems }) => alignItems || 'initial'};
  justify-content: ${({ justifyContent }) => justifyContent || 'initial'};

  scroll-margin-top: 80px;
  transition:
    background 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.3s ease;

  ${({ fullHeight }) =>
    fullHeight &&
    css`
      min-height: 100vh;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme, paddingMobile }) =>
      paddingMobile !== undefined
        ? theme.spacing(paddingMobile)
        : theme.spacing(2)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    border-radius: ${({ theme }) => theme.borderRadius.small};
  }
`

export default WrapperBase
