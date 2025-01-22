import React from 'react'
import styled, { css, keyframes } from 'styled-components'

// Keyframes für subtile Animationen
const hoverEffect = keyframes`
  0% {
    transform: translateY(0);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  100% {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`

// Helper-Funktionen
const getFontSize = (size, theme) => {
  const sizes = {
    small: theme.typography.fontSize.small,
    medium: theme.typography.fontSize.body,
    large: theme.typography.fontSize.h3,
  }
  return sizes[size] || sizes.medium
}

const getPadding = (size, theme) => {
  const paddings = {
    small: `${theme.spacing(1)} ${theme.spacing(2)}`,
    medium: `${theme.spacing(2)} ${theme.spacing(4)}`,
    large: `${theme.spacing(3)} ${theme.spacing(5)}`,
  }
  return paddings[size] || paddings.medium
}

const getColors = (variant, theme) => {
  const variants = {
    primary: {
      background: theme.colors.primary.main,
      color: theme.colors.neutral.ultraLight,
      hoverBackground: theme.colors.primary.dark,
    },
    secondary: {
      background: theme.colors.secondary.main,
      color: theme.colors.neutral.ultraLight,
      hoverBackground: theme.colors.secondary.dark,
    },
    outline: {
      background: 'transparent',
      color: theme.colors.primary.main,
      border: `2px solid ${theme.colors.primary.main}`,
      hoverBackground: theme.colors.primary.lightest,
    },
  }
  return variants[variant] || variants.primary
}

// Styled Button
const StyledButton = styled.button`
  font-family: ${({ theme }) => theme.typography.fontFamily.button};
  font-size: ${({ size, theme }) => getFontSize(size, theme)};
  padding: ${({ size, theme }) => getPadding(size, theme)};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: ${({ variant, theme }) => getColors(variant, theme).border || 'none'};
  background-color: ${({ variant, theme }) =>
    getColors(variant, theme).background};
  color: ${({ variant, theme }) => getColors(variant, theme).color};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.3s ease;
  box-shadow: ${({ theme }) => theme.boxShadow.light};

  &:hover {
    background-color: ${({ variant, theme, disabled }) =>
      !disabled && getColors(variant, theme).hoverBackground};
    animation: ${({ disabled }) =>
      !disabled &&
      css`
        ${hoverEffect} 0.3s forwards
      `};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.accent.main};
    outline-offset: 2px;
  }

  &:active {
    transform: scale(0.97);
  }

  ${({ disabled, theme }) =>
    disabled &&
    css`
      background: ${theme.colors.neutral.light};
      color: ${theme.colors.neutral.medium};
      box-shadow: none;
      pointer-events: none;
    `}
`

// Button-Komponente
function Button({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  children,
  onClick,
}) {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  )
}

export default Button
