import styled from 'styled-components'
import LumenWrapper from './LumenWrapper'

const CardWrapper = styled(LumenWrapper).attrs(
  ({ variant = 'intense', minIntensity }) => ({
    variant,
    minIntensity,
  })
)`
  width: 100%;
  max-width: 44rem;
  margin: ${({ theme }) => theme.spacing(2)} auto;
  overflow: hidden;
  z-index: 2;
  will-change: transform, filter, box-shadow;
  transition:
    transform 0.17s cubic-bezier(0.36, 0.4, 0.24, 1),
    box-shadow 0.19s cubic-bezier(0.42, 0.12, 0.45, 1);

  &:hover,
  &:focus-within {
    transform: translateY(-2px) scale(1.008);
    filter: brightness(
      ${({ theme }) => (theme.mode === 'dark' ? 1.06 : 1.025)}
    );
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
