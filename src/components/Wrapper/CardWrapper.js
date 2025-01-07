import styled from 'styled-components';
import WrapperBase from './WrapperBase';

const CardWrapper = styled(WrapperBase)`
  /* Grundstruktur */
  padding: ${({ theme }) => theme.spacing(3)};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  background: ${({ theme }) => theme.gradients.neutralSoft};
  box-shadow: ${({ theme }) => theme.boxShadow.light};
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

  /* Fokus-Style für Barrierefreiheit */
  &:focus-within {
    outline: 3px solid ${({ theme }) => theme.colors.accent.main};
    outline-offset: ${({ theme }) => theme.spacing(1)};
    box-shadow: ${({ theme }) => theme.boxShadow.glow};
  }

  /* Anpassungen für größere Bildschirme */
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing(4)};
    border-radius: ${({ theme }) => theme.borderRadius.large};
  }

  /* Optimierung für mobile Geräte */
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing(2)};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: ${({ theme }) => theme.boxShadow.light};

    &:hover {
      transform: none;
      box-shadow: ${({ theme }) => theme.boxShadow.light};
    }
  }

  /* Zusätzliche Varianten */
  &.highlight {
    background: ${({ theme }) => theme.gradients.primaryToSecondary};
    box-shadow: ${({ theme }) => theme.boxShadow.medium};
    color: ${({ theme }) => theme.colors.primary.dark};
    transition:
      background 0.3s ease,
      box-shadow 0.3s ease;

    &:hover {
      background: ${({ theme }) => theme.gradients.accentSoft};
      box-shadow: ${({ theme }) => theme.boxShadow.heavy};
    }
  }
`;

export default CardWrapper;
