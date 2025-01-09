import styled from 'styled-components';
import WrapperBase from '../Wrapper/WrapperBase';

// Größe abhängig von der Wabengröße berechnen
const calculateSize = (size) => {
  switch (size) {
    case 'large':
      return { width: '450px', height: '450px' };
    case 'medium':
      return { width: '350px', height: '350px' };
    case 'small':
    default:
      return { width: '230px', height: '230px' };
  }
};

// Neuer Wrapper
const HoneycombWrapper = styled(WrapperBase)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${({ size }) => {
    const { width, height } = calculateSize(size);
    return `
      width: ${width};
      height: ${height};
    `;
  }}

  /* Symmetrische Wabenform */
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background-color: ${({ theme }) => theme.colors.neutral.white};
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  /* Hover-Effekt */
  &:hover {
    transform: scale(1.02);
    box-shadow: ${({ theme }) => theme.boxShadow.heavy};
    background-color: ${({ theme }) => theme.colors.neutral.lightest};
  }

  /* Fokus-Style */
  &:focus-within {
    outline: 3px solid ${({ theme }) => theme.colors.accent.main};
    outline-offset: ${({ theme }) => theme.spacing(1)};
  }

  /* Positionierung abhängig von 'position'-Prop */
  ${({ position }) => {
    switch (position) {
      case 'title':
        return `
          top: -50px;
          left: 50%;
          transform: translate(-50%, -100%);
        `;
      case 'button1':
        return `
          bottom: -70px;
          left: 20%;
          transform: translate(-50%, 0%);
        `;
      case 'button2':
        return `
          bottom: -70px;
          right: 20%;
          transform: translate(50%, 0%);
        `;
      default:
        return ''; // Haupt-Wabe bleibt zentral
    }
  }}

  /* Responsive Anpassungen */
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    ${({ size }) => {
      const { width, height } = calculateSize(
        size === 'large' ? 'medium' : size
      );
      return `
        width: ${width};
        height: ${height};
      `;
    }}

    ${({ position }) =>
      (position === 'button1' || position === 'button2') &&
      `
      display: none; /* Buttons ausblenden auf mobilen Geräten */
    `}
  }
`;

export default HoneycombWrapper;
