import styled from 'styled-components'
import LumenWrapper from './LumenWrapper'

const SectionWrapper = styled(LumenWrapper).attrs((props) => ({
  variant: props.variant || 'intense',
  minIntensity: props.minIntensity,
}))`
  width: 100%;
  max-width: 64rem;
  margin: ${({ theme }) => theme.spacing(8)} auto;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 98vw;
    margin: ${({ theme }) => theme.spacing(6)} auto;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100vw;
    margin: ${({ theme }) => theme.spacing(4)}
      ${({ theme }) => theme.spacing(1.5)};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: ${({ theme }) => theme.spacing(2.2)}
      ${({ theme }) => theme.spacing(0.5)};
    border-radius: ${({ theme }) => theme.borderRadius.small};
  }
`

export default SectionWrapper
