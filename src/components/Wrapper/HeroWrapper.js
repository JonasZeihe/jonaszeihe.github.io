import styled from 'styled-components'
import LumenWrapper from './LumenWrapper'

const HeroWrapper = styled(LumenWrapper).attrs(() => ({
  fluid: true,
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 32vh;
  width: 100%;
  max-width: 48rem;
  margin: 0 auto;
  padding-top: ${({ theme }) => theme.spacing(5)};
  padding-bottom: ${({ theme }) => theme.spacing(5)};
  background: none;
  box-shadow: none;
  border-radius: ${({ theme }) => theme.borderRadius.large};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 97vw;
    min-height: 20vh;
    padding-top: ${({ theme }) => theme.spacing(4)};
    padding-bottom: ${({ theme }) => theme.spacing(4)};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 99vw;
    min-height: 13vh;
    padding-top: ${({ theme }) => theme.spacing(2.5)};
    padding-bottom: ${({ theme }) => theme.spacing(2.5)};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 100vw;
    min-height: 7.5vh;
    padding-top: ${({ theme }) => theme.spacing(1)};
    padding-bottom: ${({ theme }) => theme.spacing(1.2)};
    margin-bottom: ${({ theme }) => theme.spacing(2.2)};
    border-radius: ${({ theme }) => theme.borderRadius.small};
  }
`
export default HeroWrapper
