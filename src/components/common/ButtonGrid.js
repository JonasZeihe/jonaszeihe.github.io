import React from 'react'
import styled from 'styled-components'

const ButtonGridWrapper = styled.div`
  display: grid;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(1.5)} 0;
  gap: ${({ theme }) => theme.spacing(1.5)};
  justify-content: ${({ buttonCount }) =>
    buttonCount === 1 ? 'center' : 'start'};
  grid-template-columns: ${({ theme, buttonCount }) => {
    if (buttonCount === 1) return `minmax(${theme.spacing(20)}, auto)`
    if (buttonCount === 2)
      return `repeat(2, minmax(${theme.spacing(17.5)}, 1fr))`
    return `repeat(auto-fit, minmax(${theme.spacing(15)}, 1fr))`
  }};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: ${({ theme }) =>
      `repeat(auto-fit, minmax(${theme.spacing(15)}, 1fr))`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing(2)};
  }
`

export default function ButtonGrid({ children }) {
  const buttonCount = React.Children.count(children)
  return (
    <ButtonGridWrapper buttonCount={buttonCount}>{children}</ButtonGridWrapper>
  )
}
