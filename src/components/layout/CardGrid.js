import styled from 'styled-components'

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, auto));
  gap: ${({ theme }) => theme.spacing(3)};
  justify-content: center;
  align-items: start;
  margin: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(1)};

  /* On larger screens, if only one card is present, limit its width */
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    & > *:only-child {
      max-width: 35rem;
      justify-self: center;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: ${({ theme }) => theme.spacing(2)};
    padding: ${({ theme }) => theme.spacing(0.5)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing(1.5)};
    padding: ${({ theme }) => theme.spacing(0)};
    margin: ${({ theme }) => theme.spacing(0)};
  }
`

export default CardGrid
