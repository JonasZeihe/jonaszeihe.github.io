import styled from 'styled-components';
import WrapperBase from './WrapperBase';

const ContentWrapper = styled(WrapperBase)`
  padding: ${({ theme }) => theme.spacing(1)};
  background: ${({ theme }) => theme.colors.neutral.lightest};
  text-align: left;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.boxShadow.light};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow.medium};
  }

  /* Anpassung für Tablets und kleinere Geräte */
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing(1)};
    box-shadow: none;
  }

  /* Optimierung für größere Bildschirme */
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing(1)};
    box-shadow: ${({ theme }) => theme.boxShadow.heavy};
  }
`;

export default ContentWrapper;
