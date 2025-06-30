import React from 'react'
import styled from 'styled-components'

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1.5)};
  margin: ${({ theme }) => theme.spacing(2)} 0;
  list-style: none;
`

const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => `${theme.spacing(1.25)} ${theme.spacing(2)}`};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background: ${({ theme }) => theme.colors.surface.card};
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  box-shadow: ${({ theme }) => theme.boxShadow.xs};
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.surface.hover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => `${theme.spacing(0.8)} ${theme.spacing(1.2)}`};
    font-size: ${({ theme }) => theme.typography.fontSize.small};
  }
`

export default function ListComponent({ items }) {
  return (
    <StyledList>
      {items.map((item, index) => (
        <StyledListItem key={item.id || `item-${index}`}>
          {item.content}
        </StyledListItem>
      ))}
    </StyledList>
  )
}
