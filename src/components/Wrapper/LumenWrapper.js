import React from 'react'
import styled from 'styled-components'

export default function LumenWrapper({
  children,
  radius = 'large',
  padding,
  backgroundColor,
  as = 'div',
  variant = 'intense',
  minIntensity,
  ...rest
}) {
  return (
    <Container
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
}

const resolvePadding = (props) => {
  if (props.$padding) return props.$padding
  return 'clamp(1.1rem, 2vw, 2.2rem) clamp(1rem, 2.5vw, 1.7rem)'
}

const resolveBg = (props) => {
  const { theme, $backgroundColor, $variant, $minIntensity } = props
  if ($variant === 'none') {
    return theme.mode === 'dark'
      ? theme.colors.surface.card || '#23262d'
      : '#fff'
  }
  if ($backgroundColor) return $backgroundColor
  const isDark = theme.mode === 'dark'
  if ($variant === 'subtle') {
    return isDark ? 'rgba(55,60,75,0.86)' : 'rgba(255,255,255,0.92)'
  }
  let glass = 0.19
  if (typeof $minIntensity === 'number') glass = $minIntensity
  if (isDark) {
    glass = typeof $minIntensity === 'number' ? $minIntensity : 0.28
    return `rgba(55,60,75,${glass})`
  }
  return `rgba(255,255,255,${glass})`
}

const resolveShadow = (props) => {
  const { $variant } = props
  if ($variant === 'none') return 'none'
  if ($variant === 'subtle') {
    return `
      0 2px 12px 0 rgba(60,70,110,0.10),
      0 1.5px 9px 0 rgba(120,130,170,0.07)
    `
  }
  return `
    0 2px 18px 0 rgba(80,100,150,0.10),
    0 8px 32px 0 rgba(80,100,150,0.06)
  `
}

const Container = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme, $radius }) =>
    theme.borderRadius?.[$radius] || '1.05rem'};
  padding: ${resolvePadding};
  background: ${resolveBg};
  box-shadow: ${resolveShadow};
  transition:
    box-shadow 0.16s cubic-bezier(0.46, 0.17, 0.43, 0.98),
    background 0.16s cubic-bezier(0.52, 0.18, 0.49, 0.95),
    transform 0.12s cubic-bezier(0.67, 0.21, 0.45, 0.97);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: clamp(0.85rem, 2vw, 1.2rem) clamp(0.7rem, 2vw, 1rem);
    border-radius: ${({ theme }) => theme.borderRadius?.medium || '0.7rem'};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: clamp(0.5rem, 1vw, 0.8rem);
    border-radius: ${({ theme }) => theme.borderRadius?.small || '0.5rem'};
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
