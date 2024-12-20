import React from 'react';
import styled from 'styled-components';

function MeshGradientBackground({
  gradient1 = 'primaryLight',
  gradient2 = 'secondaryWarm',
}) {
  return (
    <BackgroundContainer>
      <GradientLayer gradient={gradient1} />
      <GradientLayer gradient={gradient2} position="bottom-right" />
    </BackgroundContainer>
  );
}

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const GradientLayer = styled.div`
  position: absolute;
  width: 150%;
  height: 150%;
  top: ${({ position }) => (position === 'bottom-right' ? 'auto' : '-10%')};
  left: ${({ position }) => (position === 'bottom-right' ? 'auto' : '-10%')};
  bottom: ${({ position }) => (position === 'bottom-right' ? '-20%' : 'auto')};
  right: ${({ position }) => (position === 'bottom-right' ? '-20%' : 'auto')};
  background: ${({ theme, gradient }) => theme.gradients[gradient]};
  filter: blur(120px);
  opacity: 1.5;
  z-index: 1;
  mix-blend-mode: overlay;
`;

export default MeshGradientBackground;
