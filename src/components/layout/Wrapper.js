import React from 'react';
import styled from 'styled-components';

const WrapperContainer = styled.div`
  /* Hintergrundfarbe oder Gradient */
  background: ${({ theme, gradient, backgroundColor }) => {
    if (gradient) return theme.gradients[gradient];
    if (backgroundColor) {
      const [color, shade] = backgroundColor.split('.');
      return theme.colors[color]?.[shade] || theme.colors.background.light;
    }
    return theme.colors.background.light;
  }};

  /* Standard-Styling */
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme, elevated }) =>
    elevated ? theme.boxShadow.medium : 'none'};
  padding: ${({ theme }) => theme.spacing(4)}; /* Desktop: mehr Luft */
  margin: ${({ theme }) => theme.spacing(4)} auto;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.xl};

  /* Desktop-Optimierung für große Bildschirme */
  @media (min-width: 1600px) {
    max-width: 1400px; /* Dynamische Breite */
    padding: ${({ theme }) => theme.spacing(5)}; /* Mehr Padding */
    box-shadow: ${({ theme, elevated }) =>
      elevated ? theme.boxShadow.heavy : theme.boxShadow.medium};
  }

  /* Mobile bleibt wie zuvor */
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing(2)};
    margin: ${({ theme }) => theme.spacing(2)} auto;
    max-width: 95%;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    box-shadow: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing(1)};
    margin: ${({ theme }) => theme.spacing(1)} auto;
    max-width: 98%;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    box-shadow: none;
  }

  /* Abstände zwischen Wrappern */
  & + & {
    margin-top: ${({ theme }) => theme.spacing(4)};
    @media (min-width: 1600px) {
      margin-top: ${({ theme }) => theme.spacing(5)};
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      margin-top: ${({ theme }) => theme.spacing(2)};
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      margin-top: ${({ theme }) => theme.spacing(1)};
    }
  }
`;

function Wrapper({ children, gradient, backgroundColor, elevated }) {
  return (
    <WrapperContainer
      gradient={gradient}
      backgroundColor={backgroundColor}
      elevated={elevated}
    >
      {children}
    </WrapperContainer>
  );
}

export default Wrapper;
