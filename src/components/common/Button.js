import React from 'react'
import styled, { css } from 'styled-components'

const baseStyles = (theme) => {
  const textColor = '#FFFFFF'
  return {
    primary: {
      background: theme.colors.primary.base,
      border: 'none',
      hover: theme.colors.primary.hover,
      active: theme.colors.primary.active,
      color: textColor,
    },
    github: {
      background: '#24292e',
      border: 'none',
      hover: '#2f363d',
      active: '#1b1f23',
      color: textColor,
    },
    casestudy: {
      background: theme.colors.secondary.base,
      border: 'none',
      hover: theme.colors.secondary.hover,
      active: theme.colors.secondary.active,
      color: textColor,
    },
    prototype: {
      background: theme.colors.accent.base,
      border: 'none',
      hover: theme.colors.accent.hover,
      active: theme.colors.accent.active,
      color: textColor,
    },
    success: {
      background: theme.colors.highlight.base,
      border: 'none',
      hover: theme.colors.highlight.hover,
      active: theme.colors.highlight.active,
      color: textColor,
    },
  }
}

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

  ${({ variant, theme, customBackground, disabled }) => {
    const base = baseStyles(theme)[variant] || baseStyles(theme).primary
    const bg = customBackground || base.background
    const { border, hover, active, color } = base

    return css`
      background: ${bg};
      color: ${color};
      border: ${border};

      &:hover,
      &:focus-visible {
        background: ${hover};
        transform: translateY(-1px) scale(1.012);
        box-shadow: ${theme.boxShadow.sm};
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
        opacity: 0.48;
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
  children,
  onClick,
  disabled = false,
  ...rest
}) {
  return (
    <StyledButton
      variant={variant}
      customBackground={customBackground}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </StyledButton>
  )
}
