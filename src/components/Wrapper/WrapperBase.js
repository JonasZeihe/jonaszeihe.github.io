import styled from 'styled-components';

// Utility-Funktion zur Verarbeitung von Farben
const resolveThemeColor = (theme, colorKey) => {
  if (!colorKey) return theme.colors.neutral.lightest;
  const [palette, shade] = colorKey.split('.');
  return theme.colors[palette]?.[shade] || theme.colors.neutral.light;
};

const WrapperBase = styled.div`
  /* Dynamischer Hintergrund */
  background: ${({ theme, gradient, backgroundColor }) =>
    gradient
      ? theme.gradients[gradient]
      : resolveThemeColor(theme, backgroundColor)};

  /* Border-Radius */
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  /* Dynamische Box-Schatten (abhängig von "elevated") */
  box-shadow: ${({ theme, elevated }) =>
    elevated ? theme.boxShadow.medium : theme.boxShadow.light};

  /* Standardabstände und Maximale Breite */
  padding: ${({ theme }) => theme.spacing(2)};
  margin: ${({ theme }) => theme.spacing(2)} auto;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.xl};

  /* Smooth Transition für alle wichtigen Eigenschaften */
  transition:
    background 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.3s ease;

  /* Hover-Effekt */
  &:hover {
    transform: translateY(-1px);
    box-shadow: ${({ theme, elevated }) =>
      elevated ? theme.boxShadow.heavy : theme.boxShadow.medium};
  }

  /* Responsive Anpassungen */
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing(3)};
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
