import styled from 'styled-components'
import LumenWrapper from './LumenWrapper'

const HeroWrapper = styled(LumenWrapper).attrs(
  ({ variant = 'intense', minIntensity = 0.26 }) => ({
    variant,
    minIntensity,
  })
)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin: ${({ theme }) => theme.spacing(7)} auto 0;
  gap: ${({ theme }) => theme.spacing(2.6)};
  min-height: 24vh;
  padding: ${({ theme }) => theme.spacing(7)} ${({ theme }) => theme.spacing(3)};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    min-height: 16vh;
    margin-top: ${({ theme }) => theme.spacing(5)};
    padding: ${({ theme }) => theme.spacing(5)}
      ${({ theme }) => theme.spacing(1.5)};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: 10vh;
    margin-top: ${({ theme }) => theme.spacing(3)};
    padding: ${({ theme }) => theme.spacing(3.5)}
      ${({ theme }) => theme.spacing(0.7)};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    gap: ${({ theme }) => theme.spacing(1.5)};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: 6vh;
    margin-top: ${({ theme }) => theme.spacing(2)};
    padding: ${({ theme }) => theme.spacing(2)}
      ${({ theme }) => theme.spacing(0.3)};
    gap: ${({ theme }) => theme.spacing(1)};
    margin-bottom: ${({ theme }) => theme.spacing(1.5)};
  }
`

export default HeroWrapper
