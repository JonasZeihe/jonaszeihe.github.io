import styled from 'styled-components';
import WrapperBase from './WrapperBase';

const CardWrapper = styled(WrapperBase)`
  /* Grundlegendes Styling */
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  background: ${({ theme }) => theme.colors.neutral.white};
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  overflow: hidden;

  /* Animation für Interaktivität */
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background-color 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.boxShadow.heavy};
    background: ${({ theme }) => theme.colors.neutral.lightest};
  }

  /* Fokus-Effekt für Barrierefreiheit */
  &:focus-within {
    outline: 2px solid ${({ theme }) => theme.colors.accent.main};
    outline-offset: ${({ theme }) => theme.spacing(1)};
    box-shadow: ${({ theme }) => theme.boxShadow.glow};
  }

  /* Anpassungen für größere Bildschirme */
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing(4)};
  }

  /* Optimierungen für kleinere Bildschirme */
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing(2)};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: ${({ theme }) => theme.boxShadow.light};
    &:hover {
      transform: none;
    }
  }
`;

export default CardWrapper;
