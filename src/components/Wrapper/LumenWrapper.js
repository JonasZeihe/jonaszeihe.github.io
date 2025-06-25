import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const glossPulse = keyframes`
  0%, 100% { opacity: 0.15; }
  50% { opacity: 0.33; }
`

const getIntensity = (intensity, theme) => {
  switch (intensity) {
    case 'hard':
      return css`
        backdrop-filter: blur(22px) saturate(1.12);
        box-shadow:
          0 8px 54px 0 ${theme.colors.primary.main}24,
          0 2px 24px 0 ${theme.colors.accent.main}15;
      `
    case 'medium':
      return css`
        backdrop-filter: blur(13px) saturate(1.07);
        box-shadow:
          0 2.5px 28px 0 ${theme.colors.primary[2]}17,
          0 0.5px 8px 0 ${theme.colors.accent[2]}10;
      `
    case 'soft':
    default:
      return css`
        backdrop-filter: blur(7px) saturate(1.03);
        box-shadow: 0 1.5px 13px 0 ${theme.colors.primary[1]}0C;
      `
  }
}

const StyledLumenWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme, padding }) => theme.spacing(padding || 4)};
  background: ${({ theme, backgroundColor }) =>
    backgroundColor
      ? (() => {
          const [group, shade = 'main'] = backgroundColor.split('.')
          return theme.colors[group]?.[shade] || theme.colors.surface.card
        })()
      : theme.gradients.backgroundPrimary};
  ${({ intensity, theme }) => getIntensity(intensity, theme)}
  transition: box-shadow 0.28s cubic-bezier(.24,.53,.37,1), background 0.32s;
  isolation: isolate;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    z-index: 2;
    background: linear-gradient(
      120deg,
      ${({ theme }) => theme.colors.accent.main}08 0%,
      transparent 80%
    );
    opacity: ${({ theme }) => (theme.mode === 'dark' ? 0.24 : 0.18)};
    filter: blur(2.5px);
    mix-blend-mode: soft-light;
    animation: ${glossPulse} 4.1s infinite alternate;
    transition: opacity 0.26s;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    z-index: 3;
    background: linear-gradient(
      0deg,
      ${({ theme }) => theme.colors.neutral[6]}0C 0%,
      transparent 33% 66%,
      ${({ theme }) => theme.colors.neutral[1]}11 100%
    );
    opacity: ${({ theme }) => (theme.mode === 'dark' ? 0.21 : 0.11)};
    filter: blur(1.6px);
    mix-blend-mode: lighten;
    transition: opacity 0.27s;
  }

  &:hover,
  &:focus-within {
    box-shadow:
      0 10px 92px 0 ${({ theme }) => theme.colors.primary.main}2A,
      0 0 0 2px ${({ theme }) => theme.colors.accent.main}18;
    &::before {
      opacity: 0.23;
      filter: blur(3.4px);
    }
    &::after {
      opacity: 0.29;
      filter: blur(4.4px);
    }
  }

  > * {
    position: relative;
    z-index: 10;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme, padding }) =>
      theme.spacing(Math.max((padding || 4) - 1, 2))};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme, padding }) =>
      theme.spacing(Math.max((padding || 4) - 2, 1))};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    &::before,
    &::after {
      opacity: 0.09;
      filter: blur(1px);
    }
  }
`

function LumenWrapper(props) {
  const {
    children,
    intensity = 'medium',
    backgroundColor,
    padding,
    ...rest
  } = props
  return (
    <StyledLumenWrapper
      intensity={intensity}
      backgroundColor={backgroundColor}
      padding={padding}
      {...rest}
    >
      {children}
    </StyledLumenWrapper>
  )
}

export default LumenWrapper
