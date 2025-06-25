import styled from 'styled-components'
import LumenWrapper from './LumenWrapper'

const HeroWrapper = styled(LumenWrapper).attrs(() => ({
  as: 'header',
  fluid: true,
  centered: true,
  padding: 3,
  intensity: 'medium',
  backgroundColor: 'surface.card',
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 36vh;
  max-width: 52rem;
  margin: 0 auto;
  z-index: 2;
  box-shadow: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 96vw;
    min-height: 24vh;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: 18vh;
    padding-top: ${({ theme }) => theme.spacing(2)};
    padding-bottom: ${({ theme }) => theme.spacing(2)};
    max-width: 100vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: 12vh;
    padding-top: ${({ theme }) => theme.spacing(1)};
    padding-bottom: ${({ theme }) => theme.spacing(1)};
  }
`
export default HeroWrapper
