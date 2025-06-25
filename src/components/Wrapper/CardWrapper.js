import styled from 'styled-components'
import WrapperBase from './WrapperBase'

const CardWrapper = styled(WrapperBase)`
  width: 100%;
  max-width: 95%;
  margin: ${({ theme }) => theme.spacing(2)} auto;
  padding: ${({ theme, padding }) => padding || theme.spacing(2)};
  border-radius: ${({ theme, radius }) =>
    theme.borderRadius[radius] || theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  overflow: hidden;
  transition:
    box-shadow 0.2s ease,
    transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.boxShadow.heavy};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing(1)};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: ${({ theme }) => theme.boxShadow.light};

    &:hover {
      transform: none;
      box-shadow: ${({ theme }) => theme.boxShadow.light};
    }
  }
`

export default CardWrapper
