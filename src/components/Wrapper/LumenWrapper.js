import { forwardRef, memo } from 'react'
import styled from 'styled-components'

const LumenWrapper = forwardRef(
  (
    {
      children,
      as = 'div',
      radius = 'large',
      padding,
      backgroundColor,
      variant = 'intense',
      minIntensity,
      ...rest
    },
    ref
  ) => (
    <Container
      ref={ref}
      as={as}
      $radius={radius}
      $padding={padding}
      $backgroundColor={backgroundColor}
      $variant={variant}
      $minIntensity={minIntensity}
      {...rest}
    >
      <Content>{children}</Content>
    </Container>
  )
)

const resolvePadding = ({ $padding }) =>
  $padding || 'clamp(1.1rem,2vw,2.2rem) clamp(1rem,2.5vw,1.7rem)'

const resolveBackground = ({
  theme,
  $backgroundColor,
  $variant,
  $minIntensity,
}) => {
  if ($variant === 'none') {
    return (
      theme.colors.surface.card || (theme.mode === 'dark' ? '#23262d' : '#fff')
    )
  }

  if ($backgroundColor) return $backgroundColor

  const isDark = theme.mode === 'dark'
  const fallbackIntensity = isDark ? 0.28 : 0.14
  const glass =
    typeof $minIntensity === 'number' ? $minIntensity : fallbackIntensity

  if ($variant === 'subtle') {
    return isDark ? 'rgba(55,60,75,0.88)' : 'rgba(255,255,255,0.94)'
  }

  return isDark ? `rgba(55,60,75,${glass})` : `rgba(255,255,255,${glass})`
}

const resolveBoxShadow = ({ $variant }) => {
  if ($variant === 'none') return 'none'
  if ($variant === 'subtle') {
    return '0 1px 8px rgba(60,70,110,.08), 0 2px 12px rgba(120,130,170,.05)'
  }
  return '0 2px 18px rgba(80,100,150,.08), 0 8px 28px rgba(80,100,150,.04)'
}

const Container = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme, $radius }) =>
    theme.borderRadius?.[$radius] || '1rem'};
  padding: ${resolvePadding};
  background: ${resolveBackground};
  box-shadow: ${resolveBoxShadow};
  will-change: transform, background, box-shadow;
  transition:
    background 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.1s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: clamp(0.85rem, 2vw, 1.2rem) clamp(0.7rem, 2vw, 1rem);
    border-radius: ${({ theme }) => theme.borderRadius?.medium || '.7rem'};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: clamp(0.5rem, 1vw, 0.8rem);
    border-radius: ${({ theme }) => theme.borderRadius?.small || '.5rem'};
    max-width: 100vw;
  }
`

const Content = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
`

export default memo(LumenWrapper)
