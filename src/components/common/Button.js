import React from 'react'
import styled, { css } from 'styled-components'

const getThemeValue = (path, theme) => {
  if (!path) return undefined
  return path.split('.').reduce((acc, key) => acc?.[key], theme)
}

const baseStyles = (theme) => ({
  primary: {
    background: theme.colors.primary.main,
    color: theme.colors.neutral.white,
    border: 'none',
    hover: theme.colors.primary[4],
    active: theme.colors.primary[5],
  },
  outline: {
    background: 'transparent',
    color: theme.colors.primary.main,
    border: `1.5px solid ${theme.colors.primary.main}`,
    hover: theme.colors.primary[1],
    active: theme.colors.primary[2],
  },
  ghost: {
    background: 'transparent',
    border: 'none',
    hover: theme.colors.surface.hover,
    active: theme.colors.surface[4],
  },
  github: {
    background: '#24292e',
    color: '#ffffff',
    border: 'none',
    hover: '#2f363d',
    active: '#1b1f23',
  },
  casestudy: {
    background: theme.colors.secondary.main,
    color: theme.colors.neutral.white,
    border: 'none',
    hover: theme.colors.secondary[4],
    active: theme.colors.secondary[5],
  },
  prototype: {
    background: theme.colors.accent.main,
    color: theme.colors.neutral.white,
    border: 'none',
    hover: theme.colors.accent[4],
    active: theme.colors.accent[5],
  },
  success: {
    background: theme.colors.highlight.main,
    color: theme.colors.text.inverse,
    border: 'none',
    hover: theme.colors.highlight[4],
    active: theme.colors.highlight[5],
  },
})

const StyledButton = styled.button`
  font-family: ${({ theme }) => theme.typography.fontFamily.button};
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.tight};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  padding: ${({ theme }) => `${theme.spacing(1.2)} ${theme.spacing(2.6)}`};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 130px;
  cursor: pointer;
  text-align: center;
  user-select: none;
  white-space: nowrap;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    box-shadow 0.22s ease,
    transform 0.14s ease,
    filter 0.18s ease;

  ${({ variant, theme, customBackground, customColor, disabled }) => {
    const base = baseStyles(theme)[variant] || baseStyles(theme).primary
    const bg =
      (customBackground && getThemeValue(customBackground, theme)) ||
      base.background
    const color =
      (customColor && getThemeValue(customColor, theme)) || base.color
    const { border, hover, active } = base

    return css`
      background: ${bg};
      color: ${color};
      border: ${border};

      &:hover,
      &:focus-visible {
        background: ${hover};
        transform: translateY(-1px) scale(1.012);
        box-shadow: 0 4px 16px rgba(32, 44, 66, 0.12);
        outline: none;
      }

      &:active {
        background: ${active};
        transform: scale(0.97);
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
        filter: brightness(0.98);
      }

      ${disabled &&
      css`
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
        filter: grayscale(0.4);
      `}
    `
  }}

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    min-width: unset;
    font-size: ${({ theme }) => theme.typography.fontSize.small};
    padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(2.2)}`};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none !important;
  }
`

export default function Button({
  variant = 'primary',
  customBackground,
  customColor,
  children,
  onClick,
  disabled = false,
  ...rest
}) {
  return (
    <StyledButton
      variant={variant}
      customBackground={customBackground}
      customColor={customColor}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </StyledButton>
  )
}
