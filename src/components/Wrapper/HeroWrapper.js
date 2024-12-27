import styled from 'styled-components';

const HeroWrapper = styled.div`
  /* Grundlayout */
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;

  /* Dynamischer Hintergrund */
  background: ${({ theme, gradient, customMesh }) => {
    if (customMesh) return customMesh; // Benutzerdefinierter Mesh-Hintergrund
    if (gradient) return theme.gradients[gradient];
    return theme.gradients.primaryToSecondary; // Fallback Gradient
  }};

  /* Farbe und Schattierung */
  color: ${({ theme, textColor }) =>
    theme.colors[textColor] || theme.colors.neutral.white};
  border-radius: ${({ theme, borderRadius }) =>
    theme.borderRadius[borderRadius] || theme.borderRadius.none};
  box-shadow: ${({ theme, shadow }) =>
    shadow ? theme.boxShadow[shadow] : 'none'};

  /* Responsive Typografie und Abstand */
  & > * {
    z-index: 1; /* Elemente über Overlay */
    margin-bottom: ${({ theme }) => theme.spacing(2)};
    font-size: ${({ theme }) => theme.typography.fontSize.h3};

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.typography.fontSize.h2};
      margin-bottom: ${({ theme }) => theme.spacing(4)};
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      font-size: ${({ theme }) => theme.typography.fontSize.h1};
    }
  }
`;

export default HeroWrapper;
