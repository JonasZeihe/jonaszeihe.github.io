import styled from 'styled-components';
import WrapperBase from './WrapperBase';

const SectionWrapper = styled(WrapperBase)`
  padding: ${({ theme }) => theme.spacing(2)};
  margin: ${({ theme }) => theme.spacing(2)} auto;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.boxShadow.light};
  background: ${({ theme }) => theme.colors.neutral.white};
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow.medium};
  }

  /* Optimierung für größere Bildschirme */
  @media (min-width: 1600px) {
    max-width: 1400px;
    padding: ${({ theme }) => theme.spacing(1)};
  }

  /* Anpassung für Tablets und kleinere Geräte */
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing(2)};
    max-width: 95%;
    box-shadow: none;
  }

  /* Anpassung für Smartphones */
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing(2)};
    max-width: 98%;
  }
`;

export default SectionWrapper;
