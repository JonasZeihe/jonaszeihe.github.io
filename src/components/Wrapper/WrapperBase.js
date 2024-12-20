import styled from 'styled-components';

const WrapperBase = styled.div`
  background: ${({ theme, gradient, backgroundColor }) => {
    if (gradient) return theme.gradients[gradient];
    if (backgroundColor) {
      const [color, shade] = backgroundColor.split('.');
      return theme.colors[color]?.[shade] || theme.colors.neutral.light;
    }
    return theme.colors.depth.light;
  }};

  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme, elevated }) =>
    elevated ? theme.boxShadow.medium : 'none'};
  padding: ${({ theme }) => theme.spacing(2)};
  margin: ${({ theme }) => theme.spacing(1)} auto;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.xl};

  /* Subtile Übergänge für Dynamik */
  transition:
    box-shadow 0.3s ease,
    background 0.3s ease;

  /* Hover-Effekt für interaktive Bereiche */
  &:hover {
    box-shadow: ${({ theme, elevated }) =>
      elevated ? theme.boxShadow.heavy : theme.boxShadow.medium};
  }

  /* Anpassung für größere Bildschirme */
  @media (min-width: 1600px) {
    max-width: 1400px;
    padding: ${({ theme }) => theme.spacing(1)};
  }

  /* Anpassung für Tablets und kleinere Geräte */
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing(1)};
    box-shadow: none;
  }

  /* Anpassung für Smartphones */
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing(0)};
    box-shadow: none;
  }
`;

export default WrapperBase;
