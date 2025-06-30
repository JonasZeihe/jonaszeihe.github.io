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
  },
  github: {
    background: theme.colors.depth.main,
    color: theme.colors.neutral.white,
    border: 'none',
  },
  casestudy: {
    background: theme.colors.secondary.main,
    color: theme.colors.neutral.white,
    border: 'none',
  },
  prototype: {
    background: theme.colors.accent.main,
    color: theme.colors.neutral.white,
    border: 'none',
  },
  success: {
    background: theme.colors.primary.main,
    color: theme.colors.neutral.white,
    border: 'none',
  },
  outline: {
    background: 'transparent',
    color: theme.colors.primary.main,
    border: `1.5px solid ${theme.colors.primary.main}`,
  },
  ghost: {
    background: 'transparent',
    color: theme.colors.text.main,
    border: 'none',
  },
})

const StyledButton = styled.button`
  font-family: ${({ theme }) => theme.typography.fontFamily.button};
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  padding: ${({ theme }) => `${theme.spacing(1.2)} ${theme.spacing(2.6)}`};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 130px;
  cursor: pointer;
  text-align: center;
  transition:
    background 0.18s,
    color 0.16s,
    box-shadow 0.22s,
    transform 0.14s,
    filter 0.18s;

  ${({ variant, theme, customBackground, customColor }) => {
    const base = baseStyles(theme)[variant] || baseStyles(theme).primary
    const bg =
      (customBackground && getThemeValue(customBackground, theme)) ||
      base.background
    const color =
      (customColor && getThemeValue(customColor, theme)) || base.color
    const { border } = base

    return css`
      background: ${bg};
      color: ${color};
      border: ${border};
      &:hover,
      &:focus-visible {
        filter: brightness(0.93);
        transform: translateY(-2px) scale(1.013);
        box-shadow: 0 5px 16px 0 rgba(32, 48, 66, 0.11);
        outline: none;
      }
    `
  }}

  &:active {
    transform: scale(0.97);
    filter: brightness(0.92);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    min-width: unset;
  }
`

export default function Button({
  variant = 'primary',
  customBackground,
  customColor,
  children,
  onClick,
  ...rest
}) {
  return (
    <StyledButton
      variant={variant}
      customBackground={customBackground}
      customColor={customColor}
      onClick={onClick}
      {...rest}
    >
      {children}
    </StyledButton>
  )
}
