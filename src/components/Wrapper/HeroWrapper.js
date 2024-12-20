import styled from 'styled-components';

const HeroWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;

  /* Dynamisches Hintergrund-Setup */
  background: ${({ theme, gradient, customMesh }) => {
    if (customMesh) return customMesh;
    if (gradient) return theme.gradients[gradient];
    return theme.gradients.primaryDynamic; // Fallback Gradient
  }};

  /* Dynamische Farb- und Styling-Optionen */
  color: ${({ theme, textColor }) =>
    theme.colors[textColor] || theme.colors.neutral.white};
  border-radius: ${({ borderRadius, theme }) =>
    theme.borderRadius[borderRadius] || '0'};
  box-shadow: ${({ theme, shadow }) =>
    shadow ? theme.boxShadow[shadow] : 'none'};

  & > * {
    z-index: 1;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 0;
    pointer-events: none;
    background: ${({ theme, overlay }) =>
      overlay ? theme.gradients[overlay] : 'transparent'};
    opacity: 0.5;
  }
`;

export default HeroWrapper;
