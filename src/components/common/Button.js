import React from 'react'
import styled from 'styled-components'

const getThemeValue = (path, theme) => {
  const keys = path.split('.')
  return keys.reduce((acc, key) => acc && acc[key], theme)
}

const getButtonBaseStyles = ({ variant, theme }) => {
  const variants = {
    primary: {
      background: theme.colors.primary.main,
      color: theme.colors.neutral.ultraLight,
      border: 'none',
    },
    github: {
      background: theme.colors.depth.main,
      color: theme.colors.neutral.ultraLight,
      border: 'none',
    },
    casestudy: {
      background: theme.colors.secondary.main,
      color: theme.colors.neutral.ultraLight,
      border: 'none',
    },
    prototype: {
      background: theme.colors.accent.main,
      color: theme.colors.neutral.ultraLight,
      border: 'none',
    },
    success: {
      background: theme.colors.primary.dark,
      color: theme.colors.neutral.ultraLight,
      border: 'none',
    },
    outline: {
      background: 'transparent',
      color: theme.colors.primary.main,
      border: `1px solid ${theme.colors.primary.main}`,
    },
    ghost: {
      background: 'transparent',
      color: theme.colors.neutral.main,
      border: 'none',
    },
  }
  return variants[variant] || variants.primary
}

const StyledButton = styled.button`
  font-family: ${({ theme }) => theme.typography.fontFamily.button};
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  padding: ${({ theme }) => `${theme.spacing(1.5)} ${theme.spacing(3)}`};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 140px;
  cursor: pointer;
  text-align: center;
  transition:
    background-color 0.2s ease,
    box-shadow 0.3s ease,
    transform 0.2s ease,
    filter 0.2s ease;

  ${({ background, variant, theme }) => {
    const baseStyles = getButtonBaseStyles({ variant, theme })
    const resolvedBackground = background
      ? getThemeValue(background, theme)
      : baseStyles.background

    return `
      background: ${resolvedBackground};
      color: ${baseStyles.color};
      border: ${baseStyles.border};

      &:hover {
        filter: brightness(0.95);
        transform: translateY(-1px);
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
      }
    `
  }}

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    min-width: unset;
  }
`

export default function Button({
  variant = 'primary',
  background,
  buttonBackground,
  children,
  onClick,
}) {
  return (
    <StyledButton
      variant={variant}
      background={buttonBackground || background}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  )
}
