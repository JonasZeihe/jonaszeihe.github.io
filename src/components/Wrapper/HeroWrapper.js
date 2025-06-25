import styled from 'styled-components'

const HeroWrapper = styled.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  min-height: ${({ height }) => height || '50vh'};

  padding: ${({ theme }) => theme.spacing(3)};
  background: ${({ theme, gradient, customMesh }) =>
    customMesh ||
    theme.gradients[gradient] ||
    theme.gradients.primaryToSecondary};

  color: ${({ theme, textColor }) =>
    theme.colors[textColor]?.main || theme.colors.neutral.ultraLight};

  border-radius: ${({ theme, borderRadius }) =>
    theme.borderRadius[borderRadius] || theme.borderRadius.none};
  box-shadow: ${({ theme, shadow }) =>
    shadow ? theme.boxShadow[shadow] : 'none'};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: ${({ heightMd }) => heightMd || '40vh'};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing(2)};
    min-height: ${({ heightSm }) => heightSm || '30vh'};
  }
`

export default HeroWrapper
