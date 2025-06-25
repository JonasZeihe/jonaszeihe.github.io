import styled from 'styled-components'
import LumenWrapper from './LumenWrapper'

const CardWrapper = styled(LumenWrapper).attrs(() => ({
  as: 'article',
  centered: true,
  padding: 2,
  intensity: 'soft',
  backgroundColor: 'surface.card',
}))`
  width: 100%;
  max-width: 44rem;
  margin: ${({ theme }) => theme.spacing(2)} auto;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: none;
  z-index: 2;
  transition:
    transform 0.23s cubic-bezier(0.36, 0.4, 0.24, 1),
    box-shadow 0.23s;

  &:hover,
  &:focus-within {
    transform: translateY(-2.5px) scale(1.012);
    filter: brightness(${({ theme }) => (theme.mode === 'dark' ? 1.09 : 1.055)})
      saturate(1.13);
    z-index: 4;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 98vw;
    margin: ${({ theme }) => theme.spacing(1)} 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 100vw;
    margin: 0;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    &:hover,
    &:focus-within {
      transform: none;
      filter: none;
    }
  }
`
export default CardWrapper
