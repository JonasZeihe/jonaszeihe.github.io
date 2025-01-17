import styled from 'styled-components';

const HeroWrapper = styled.div`
  /* Breite und anfängliche Höhe */
  width: 100%;
  min-height: 50vh;
  padding: ${({ theme }) => theme.spacing(4)};
  margin: auto;

  /* Zentrierung und Ausrichtung */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  /* Dynamischer Hintergrund */
  background: ${({ theme, gradient, customMesh }) =>
    customMesh ||
    theme.gradients[gradient] ||
    theme.gradients.primaryToSecondary};

  /* Textfarbe */
  color: ${({ theme, textColor }) =>
    theme.colors[textColor] || theme.colors.neutral.ultraLight};

  /* Optionaler Schatten und Border-Radius */
  border-radius: ${({ theme, borderRadius }) =>
    theme.borderRadius[borderRadius] || theme.borderRadius.none};
  box-shadow: ${({ theme, shadow }) =>
    shadow ? theme.boxShadow[shadow] : 'none'};

  /* Anpassung für größere Bildschirme */
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: 25vh;
    padding: ${({ theme }) => theme.spacing(2)};
    & > * {
    }
  }

  /* Anpassung für kleinere Bildschirme */
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: ${({ theme }) => theme.spacing(2)};

    min-height: 20vh;
    padding: ${({ theme }) => theme.spacing(2)};
    & > * {
    }
  }
`;

export default HeroWrapper;
