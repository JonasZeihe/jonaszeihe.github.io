import React from 'react'
import styled from 'styled-components'

const getGridColumns = (buttonCount, breakpoint, theme) => {
  const minWidthSm = theme.spacing(15) // 120px
  const minWidthMd = theme.spacing(17.5) // 140px
  const minWidthLg = theme.spacing(20) // 160px

  switch (breakpoint) {
    case 'sm':
      if (buttonCount === 1) return `minmax(${minWidthSm}, auto)`
      return `repeat(auto-fit, minmax(${minWidthSm}, 1fr))`
    case 'md':
      if (buttonCount === 1) return `minmax(${minWidthMd}, auto)`
      return `repeat(auto-fit, minmax(${minWidthSm}, 1fr))`
    default:
      if (buttonCount === 1) return `minmax(${minWidthLg}, auto)`
      if (buttonCount === 2) return `repeat(2, minmax(${minWidthMd}, 1fr))`
      return `repeat(auto-fit, minmax(${minWidthMd}, 1fr))`
  }
}

const ButtonGridWrapper = styled.div`
  display: grid;
  width: 100%;
  gap: ${({ theme }) => theme.spacing(1.5)};
  grid-template-columns: ${({ buttonCount, theme }) =>
    getGridColumns(buttonCount, null, theme)};
  justify-content: ${({ buttonCount }) =>
    buttonCount === 1 ? 'center' : 'start'};
  padding-top: ${({ theme }) => theme.spacing(1.5)};
  padding-bottom: ${({ theme }) => theme.spacing(1.5)};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: ${({ buttonCount, theme }) =>
      getGridColumns(buttonCount, 'md', theme)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: ${({ buttonCount, theme }) =>
      getGridColumns(buttonCount, 'sm', theme)};
    gap: ${({ theme }) => theme.spacing(2)};
    padding: ${({ theme }) => theme.spacing(1.5)};
  }
`

export default function ButtonGrid({ children }) {
  const buttonCount = React.Children.count(children)
  return (
    <ButtonGridWrapper buttonCount={buttonCount}>{children}</ButtonGridWrapper>
  )
}
