import styled from 'styled-components';

const WrapperBase = styled.div`
  /* Dynamischer Hintergrund */
  background: ${({ theme, gradient, backgroundColor }) => {
    if (gradient) return theme.gradients[gradient];
    if (backgroundColor) {
      const [color, shade] = backgroundColor.split('.');
      return theme.colors[color]?.[shade] || theme.colors.neutral.light;
    }
    return theme.colors.neutral.lightest;
  }};

  /* Styling für Border-Radius */
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  /* Box-Shadow, abhängig vom "elevated"-Prop */
  box-shadow: ${({ theme, elevated }) =>
    elevated ? theme.boxShadow.medium : theme.boxShadow.light};

  /* Standardabstände und Maximale Breite */
  padding: ${({ theme }) => theme.spacing(2)};
  margin: ${({ theme }) => theme.spacing(2)} auto;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.xl};

  /* Smooth Übergänge */
  transition:
    background 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.3s ease;

  /* Hover-Effekte */
  &:hover {
    transform: translateY(-1px);
    box-shadow: ${({ theme, elevated }) =>
      elevated ? theme.boxShadow.heavy : theme.boxShadow.medium};
  }

  /* Responsive Anpassungen */
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing(2)};
    border-radius: ${({ theme }) => theme.borderRadius.large};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing(2)};
    box-shadow: ${({ theme }) => theme.boxShadow.light};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing(1)};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    box-shadow: none;
  }
`;

export default WrapperBase;
