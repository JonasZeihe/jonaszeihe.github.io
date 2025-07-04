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
  if ($variant === 'none') return theme.colors.surface.card
  if ($backgroundColor) return $backgroundColor

  const isDark = theme.mode === 'dark'
  const fallback = isDark ? 0.18 : 0.1
  const intensity = typeof $minIntensity === 'number' ? $minIntensity : fallback

  if ($variant === 'subtle') {
    return isDark ? 'rgba(45,50,60,0.9)' : 'rgba(255,255,255,0.9)'
  }

  return isDark
    ? `rgba(35,40,50,${intensity})`
    : `rgba(255,255,255,${intensity + 0.02})`
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

export default memo(LumenWrapper)
