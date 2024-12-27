import styled from 'styled-components';
import WrapperBase from './WrapperBase';

const ContentWrapper = styled(WrapperBase)`
  /* Grundlegendes Styling */
  padding: ${({ theme }) => theme.spacing(4)};
  background: ${({ theme }) => theme.colors.neutral.light};
  text-align: center; /* Für mittigen Inhalt */
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  overflow: hidden;

  /* Animation für Interaktivität */
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background-color 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.boxShadow.heavy};
    background: ${({ theme }) => theme.colors.neutral.lightest};
  }

  /* Responsive Design für große Bildschirme */
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing(6)};
    max-width: 80%;
    margin: 0 auto;
    text-align: left; /* Für breiteren Content */
  }

  /* Anpassung für kleinere Geräte */
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing(3)};
    text-align: left;
    box-shadow: ${({ theme }) => theme.boxShadow.light};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing(2)};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }
`;

export default ContentWrapper;
