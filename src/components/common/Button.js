import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

// Styled Components
const StyledButton = styled.button`
  font-family: ${({ theme }) => theme.typography.fontFamily.button};
  font-size: ${({ size, theme }) => {
    const sizes = {
      small: theme.typography.fontSize.caption,
      medium: theme.typography.fontSize.body,
      large: theme.typography.fontSize.h3,
    };
    return sizes[size] || sizes.medium;
  }};
  padding: ${({ size, theme }) => {
    const paddings = {
      small: `${theme.spacing(2)} ${theme.spacing(3)}`,
      medium: `${theme.spacing(3)} ${theme.spacing(5)}`,
      large: `${theme.spacing(4)} ${theme.spacing(6)}`,
    };
    return paddings[size] || paddings.medium;
  }};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
  transition: all 0.3s ease;

  /* Variant Styling */
  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'secondary':
        return css`
          background: ${theme.colors.secondary.main};
          color: ${theme.colors.neutral.white};
          &:hover {
            background: ${theme.colors.secondary.dark};
            box-shadow: ${theme.boxShadow.medium};
          }
        `;
      case 'icon':
        return css`
          background: ${theme.colors.neutral.transparent || 'transparent'};
          color: ${theme.colors.primary.main};
          padding: ${theme.spacing(2)};
          border-radius: 50%;
          &:hover {
            background: ${theme.colors.neutral.light};
            transform: scale(1.1);
          }
        `;
      case 'warning':
        return css`
          background: ${theme.colors.warning?.main || theme.colors.accent.main};
          color: ${theme.colors.neutral.white};
          &:hover {
            background: ${theme.colors.warning?.dark ||
            theme.colors.accent.dark};
            box-shadow: ${theme.boxShadow.medium};
          }
        `;
      case 'success':
        return css`
          background: ${theme.colors.success?.main ||
          theme.colors.secondary.main};
          color: ${theme.colors.neutral.white};
          &:hover {
            background: ${theme.colors.success?.dark ||
            theme.colors.secondary.dark};
            box-shadow: ${theme.boxShadow.medium};
          }
        `;
      default:
        return css`
          background: ${theme.colors.primary.main};
          color: ${theme.colors.neutral.white};
          &:hover {
            background: ${theme.colors.primary.dark};
            box-shadow: ${theme.boxShadow.medium};
          }
        `;
    }
  }}

  /* Disabled Styling */
  ${({ disabled, theme }) =>
    disabled &&
    css`
      background: ${theme.colors.neutral.medium};
      color: ${theme.colors.neutral.dark};
      cursor: not-allowed;
      &:hover {
        background: ${theme.colors.neutral.medium};
        box-shadow: none;
        transform: none;
      }
    `}

  /* Focus Styling */
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.accent.main};
    outline-offset: 2px;
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.accent.main};
  }

  /* Interactive Transformations */
  &:active {
    transform: scale(0.98);
  }
`;

// Icon Wrapper
const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

// Button Component
function Button({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  icon = null,
  children,
  onClick = () => {},
}) {
  return (
    <StyledButton
      $variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {children}
    </StyledButton>
  );
}

// Prop Types
Button.propTypes = {
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'icon',
    'warning',
    'success',
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

// Default Props
Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  icon: null,
  onClick: () => {},
};

export default Button;
