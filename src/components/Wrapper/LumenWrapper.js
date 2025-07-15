import { forwardRef, memo } from 'react'
import styled from 'styled-components'

export const LUMEN_VARIANTS = {
  intense: 'intense',
  subtle: 'subtle',
  none: 'none',
}

export const LUMEN_RADII = {
  small: 'small',
  medium: 'medium',
  large: 'large',
}

const resolvePadding = ({ padding }) =>
  padding || 'clamp(1.1rem, 2vw, 2.2rem) clamp(1rem, 2.5vw, 1.7rem)'

const resolveBackground = ({ theme, backgroundColor, variant }) => {
  if (variant === LUMEN_VARIANTS.none) return theme.colors.surface.card
  if (backgroundColor) return backgroundColor
  const isDark = theme.mode === 'dark'
  if (variant === LUMEN_VARIANTS.subtle)
    return isDark ? 'rgba(45,50,60,0.9)' : 'rgba(255,255,255,0.9)'
  return isDark ? 'rgba(35,40,50,0.18)' : 'rgba(255,255,255,0.12)'
}

const resolveBoxShadow = ({ variant }) => {
  if (variant === LUMEN_VARIANTS.none) return 'none'
  if (variant === LUMEN_VARIANTS.subtle)
    return '0 2px 12px rgba(60,70,110,0.1), 0 1.5px 9px rgba(120,130,170,0.07)'
  return '0 2px 18px rgba(80,100,150,0.1), 0 8px 32px rgba(80,100,150,0.06)'
}

const Container = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme, radius }) =>
    theme.borderRadius?.[radius] || '1rem'};
  padding: ${resolvePadding};
  background: ${resolveBackground};
  box-shadow: ${resolveBoxShadow};
  will-change: transform, background, box-shadow;
  transition:
    background 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.1s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: clamp(1rem, 2.5vw, 1.4rem);
    border-radius: ${({ theme }) => theme.borderRadius?.medium || '0.7rem'};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: clamp(0.8rem, 2vw, 1rem);
    max-width: 100%;
  }
`

const LumenWrapper = forwardRef(
  (
    {
      children,
      as = 'div',
      radius = LUMEN_RADII.large,
      padding,
      backgroundColor,
      variant = LUMEN_VARIANTS.intense,
      role,
      ...rest
    },
    ref
  ) => (
    <Container
      ref={ref}
      as={as}
      radius={radius}
      padding={padding}
      backgroundColor={backgroundColor}
      variant={variant}
      role={role}
      {...rest}
    >
      {children}
    </Container>
  )
)

export default memo(LumenWrapper)
