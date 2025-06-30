import React from 'react'
import styled, { useTheme } from 'styled-components'
import * as Icons from 'react-icons/fa'
import BadgeLibrary from './BadgeLibrary'

const BadgeContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(0.8)};
  background-color: ${({ background }) => background};
  color: #ffffff;
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  padding: ${({ theme }) => `${theme.spacing(0.8)} ${theme.spacing(2)}`};
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  white-space: nowrap;
  box-shadow: ${({ theme }) => theme.boxShadow.light};
  transition:
    background-color 0.2s ease-out,
    opacity 0.2s ease-out;

  &:hover {
    opacity: 0.75;
    cursor: default;
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
  const theme = useTheme()
  const badge = BadgeLibrary[badgeKey]

  if (!badge) return null

  const { label, icon, colorLight, colorDark } = badge
  const Icon = Icons[icon] || null
  const isDarkMode = theme.mode === 'dark'
  const background = isDarkMode ? colorDark : colorLight

  return (
    <BadgeContainer background={background} {...props}>
      {Icon && (
        <IconWrapper>
          <Icon />
        </IconWrapper>
      )}
      {label}
    </BadgeContainer>
  )
}
