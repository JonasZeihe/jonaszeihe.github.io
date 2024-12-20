import styled from 'styled-components';
import WrapperBase from './WrapperBase';

const CardWrapper = styled(WrapperBase)`
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.boxShadow.light};
  background: ${({ theme }) => theme.colors.neutral.white};
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background-color 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.boxShadow.medium};
    background-color: ${({ theme }) => theme.colors.neutral.light};
  }

  &:focus-within {
    outline: 2px solid ${({ theme }) => theme.colors.accent.main};
    outline-offset: ${({ theme }) => theme.spacing(0.5)};
    box-shadow: ${({ theme }) => theme.boxShadow.heavy};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing(2)};
    box-shadow: ${({ theme }) => theme.boxShadow.light};
    &:hover {
      transform: none;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing(1)};
    box-shadow: ${({ theme }) => theme.boxShadow.medium};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing(2)};
    box-shadow: ${({ theme }) => theme.boxShadow.heavy};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing(1)};
  }
`;

export default CardWrapper;
