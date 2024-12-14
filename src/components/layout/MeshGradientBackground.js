import React from 'react';
import styled from 'styled-components';

function MeshGradientBackground() {
  return (
    <BackgroundContainer>
      <GradientLayer1 />
      <GradientLayer2 />
    </BackgroundContainer>
  );
}

// Styled Components
const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
`;

// Layer 1: Hauptgradient
const GradientLayer1 = styled.div`
  position: absolute;
  width: 150%;
  height: 150%;
  top: -10%;
  left: -10%;
  background: ${({ theme }) => theme.gradients.neutralLight};
  filter: blur(120px);
  opacity: 1.7;
  z-index: 1;
`;

// Layer 3: Subtiler dynamischer Akzent
const GradientLayer2 = styled.div`
  position: absolute;
  width: 170%;
  height: 170%;
  bottom: -20%;
  right: -20%;
  background: ${({ theme }) => theme.gradients.neutralLight};
  filter: blur(150px);
  opacity: 2.4;
  z-index: 3;
  mix-blend-mode: overlay; /* Überlagerung für mehr Tiefe */
`;

export default MeshGradientBackground;
