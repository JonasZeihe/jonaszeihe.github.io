import React from 'react'
import styled from 'styled-components'
import AuroraLayer from './AuroraLayer'

export default function LumenWrapper({
  children,
  radius = 'large',
  padding,
  variant = 'intense',
  animated = true,
  backgroundColor,
  as = 'div',
  ...rest
}) {
  return (
    <Container
      as={as}
      $radius={radius}
      $padding={padding}
      $backgroundColor={backgroundColor}
      $variant={variant}
      {...rest}
    >
      <AuroraLayer variant={variant} animated={animated} />
      <Content>{children}</Content>
    </Container>
  )
}

function resolvePadding(theme, padding) {
  if (padding) return padding
  return `clamp(1rem, 2vw, 2rem) clamp(0.9rem, 2.5vw, 1.7rem)`
}

function resolveBg(theme, bg, variant) {
  if (bg) return bg
  if (theme.mode === 'dark') {
    return variant === 'intense'
      ? 'rgba(32, 38, 54, 0.84)'
      : 'rgba(43, 52, 77, 0.63)'
  }
  return variant === 'intense'
    ? 'rgba(250,254,255,0.93)'
    : 'rgba(255,255,255,0.79)'
}

const Container = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme, $radius }) =>
    theme.borderRadius?.[$radius] || '1.05rem'};
  padding: ${({ theme, $padding }) => resolvePadding(theme, $padding)};
  background: ${({ theme, $backgroundColor, $variant }) =>
    resolveBg(theme, $backgroundColor, $variant)};
  backdrop-filter: blur(8px) saturate(1.04) brightness(1.04) contrast(1.05);
  box-shadow:
    0 2.5px 16px 0 rgba(0, 0, 0, 0.06),
    0 8px 36px 0 ${({ theme }) => theme.colors.accent.main}14;
  transition:
    box-shadow 0.16s cubic-bezier(0.44, 0.13, 0.43, 0.95),
    background 0.13s cubic-bezier(0.62, 0.16, 0.49, 0.97),
    transform 0.11s cubic-bezier(0.68, 0.19, 0.46, 0.98);

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
  z-index: 5;
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
`
