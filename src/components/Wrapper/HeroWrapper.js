import styled from 'styled-components';

const HeroWrapper = styled.div`
  /* Breite und anfängliche Höhe */
  width: 100%;
  min-height: 50vh;
  padding: ${({ theme }) => theme.spacing(4)};

  /* Zentrierung und Ausrichtung */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  /* Hintergrund und Overlay */
  position: relative;
  overflow: hidden;
  background: ${({ theme, gradient, customMesh }) => {
    if (customMesh) return customMesh; // Benutzerdefinierter Mesh-Hintergrund
    if (gradient) return theme.gradients[gradient];
    return theme.gradients.primaryToSecondary; // Fallback Gradient
  }};

  /* Textfarbe, Ecken, Schatten */
  color: ${({ theme, textColor }) =>
    theme.colors[textColor] || theme.colors.neutral.white};
  border-radius: ${({ theme, borderRadius }) =>
    theme.borderRadius[borderRadius] || theme.borderRadius.none};
  box-shadow: ${({ theme, shadow }) =>
    shadow ? theme.boxShadow[shadow] : 'none'};

  /* Grundlegender Abstand für direkte Kindelemente */
  & > * {
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }

  /* Medienabfragen für kleinere und größere Viewports */
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: 40vh; /* Wirkt kompakter auf größeren Bildschirmen */
    & > * {
      margin-bottom: ${({ theme }) => theme.spacing(3)};
    }
  }

  /* Anpassung für richtig kleine Bildschirme */
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: 40vh;
    padding: ${({ theme }) => theme.spacing(2)};
    & > * {
      margin-bottom: ${({ theme }) => theme.spacing(1)};
    }
  }
`;

export default HeroWrapper;
