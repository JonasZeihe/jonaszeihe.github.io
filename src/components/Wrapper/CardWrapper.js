import styled from 'styled-components';
import WrapperBase from './WrapperBase';

const CardWrapper = styled(WrapperBase)`
  /* Grundstruktur */
  width: 95%;
  margin: ${({ theme }) => theme.spacing(1)} auto;
  padding: ${({ theme }) => theme.spacing(1)};

  padding: ${({ theme }) => theme.spacing(1)};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  overflow: hidden;

  /* Subtile Interaktivität */
  transition:
    box-shadow 0.2s ease,
    transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.boxShadow.medium};
    background: ${({ theme }) => theme.colors.depth.lightest};
  }

  /* Anpassungen für größere Bildschirme */
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing(2)};
    border-radius: ${({ theme }) => theme.borderRadius.large};
  }

  /* Optimierung für mobile Geräte */
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: ${({ theme }) => theme.spacing(0)} auto;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: ${({ theme }) => theme.boxShadow.heavy};

    &:hover {
      transform: none;
      box-shadow: ${({ theme }) => theme.boxShadow.light};
    }
  }

  }
`;

export default CardWrapper;
