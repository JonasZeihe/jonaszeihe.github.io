import styled from 'styled-components'
import LumenWrapper from './LumenWrapper'

const SectionWrapper = styled(LumenWrapper).attrs(() => ({
  as: 'section',
  fluid: true,
  centered: true,
  padding: 3,
  intensity: 'soft',
  backgroundColor: 'surface.card',
}))`
  margin: ${({ theme }) => theme.spacing(4)} auto;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  position: relative;
  max-width: 72rem;
  box-shadow: none;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 98vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing(2)};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    margin: ${({ theme }) => theme.spacing(2)} 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing(1)};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    margin: ${({ theme }) => theme.spacing(1)} 0;
    max-width: 100vw;
  }
`
export default SectionWrapper
