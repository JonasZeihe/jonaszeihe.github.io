import React from 'react'
import styled from 'styled-components'
import * as Icons from 'react-icons/fa'
import BadgeLibrary from './BadgeLibrary'

const BadgeContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(0.8)};
  background-color: ${({ theme, customColor }) =>
    customColor || theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.neutral.ultraLight};
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  padding: ${({ theme }) => `${theme.spacing(0.8)} ${theme.spacing(2)}`};
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  white-space: nowrap;
  box-shadow: ${({ theme }) => theme.boxShadow.light};
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    background-color: ${({ theme, customColor }) =>
      customColor ? theme.colors.neutral.dark : theme.colors.primary.dark};
    box-shadow: ${({ theme }) => theme.boxShadow.medium};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => `${theme.spacing(0.6)} ${theme.spacing(1.5)}`};
    font-size: ${({ theme }) => theme.typography.fontSize.small};
    gap: ${({ theme }) => theme.spacing(0.6)};
  }
`

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  line-height: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1rem;
  }
`

export default function Badge({ badgeKey, ...props }) {
  const badge = BadgeLibrary[badgeKey] || {}
  const { label, icon, customColor } = badge
  const Icon = Icons[icon] || null

  return (
    <BadgeContainer customColor={customColor} {...props}>
      {Icon && (
        <IconWrapper>
          <Icon />
        </IconWrapper>
      )}
      {label}
    </BadgeContainer>
  )
}
