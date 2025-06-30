import styled from 'styled-components'
import LumenWrapper from './LumenWrapper'

const SectionWrapper = styled(LumenWrapper).attrs({
  as: 'section',
  radius: 'large',
  interactive: false,
  variant: 'intense',
  animated: true,
})`
  margin: ${({ theme }) => theme.spacing?.(8) || '4rem'} auto;
  max-width: 64rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing?.(3) || '1.5rem'};
    border-radius: ${({ theme }) => theme.borderRadius?.medium || '0.7rem'};
    margin: ${({ theme }) =>
      `${theme.spacing?.(4) || '2rem'} ${theme.spacing?.(2) || '1rem'}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing?.(2) || '1rem'};
    border-radius: ${({ theme }) => theme.borderRadius?.small || '0.5rem'};
    margin: ${({ theme }) =>
      `${theme.spacing?.(3) || '1.5rem'} ${theme.spacing?.(1) || '0.5rem'}`};
    max-width: 100vw;
  }
`

export default SectionWrapper
