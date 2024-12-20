import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as Icons from 'react-icons/fa'; // Dynamischer Icon-Import

const BadgeContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme, variant }) =>
    theme.colors[variant]?.main || theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.neutral.white};
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  box-shadow: ${({ theme }) => theme.boxShadow.light};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow.medium};
    background: ${({ theme, variant }) =>
      theme.colors[variant]?.dark || theme.colors.primary.dark};
  }
`;

const IconWrapper = styled.span`
  font-size: 1.2rem;
`;

// Dynamisches Icon-Mapping
export default function Badge({ label, icon, variant = 'primary' }) {
  const Icon = Icons[icon]; // Dynamischer Icon-Resolver

  return (
    <BadgeContainer variant={variant}>
      {Icon && (
        <IconWrapper>
          <Icon />
        </IconWrapper>
      )}
      {label}
    </BadgeContainer>
  );
}

Badge.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string, // Dynamischer Icon-Name
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'accent',
    'success',
    'warning',
  ]),
};

Badge.defaultProps = {
  icon: null,
  variant: 'primary',
};
