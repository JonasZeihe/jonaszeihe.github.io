import styled from 'styled-components';
import { getStoredVariants } from '../../utils/HoneycombVariantManager';

const ClusterGrid = styled.div`
  display: grid;
  grid-template-areas:
    'title'
    'main'
    'button';
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  justify-items: center;

  .title {
    grid-area: title;
  }
  .main {
    grid-area: main;
    width: 100%;
  }
  .button {
    grid-area: button;
  }

  ${() => {
    const variants = getStoredVariants();
    return variants
      .map((variant, index) => {
        if (variant === 'variant1') {
          return `
          &:nth-child(${index + 1}) .title { justify-self: start; }
          &:nth-child(${index + 1}) .button { justify-self: end; }
        `;
        }
        if (variant === 'variant2') {
          return `
          &:nth-child(${index + 1}) .title { justify-self: center; }
          &:nth-child(${index + 1}) .button { justify-self: center; }
        `;
        }
        if (variant === 'variant3') {
          return `
          &:nth-child(${index + 1}) .title { justify-self: end; }
          &:nth-child(${index + 1}) .button { justify-self: start; }
        `;
        }
        return `
        &:nth-child(${index + 1}) .title { justify-self: center; }
        &:nth-child(${index + 1}) .button { justify-self: center; }
      `;
      })
      .join('');
  }}

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing(2)};
    .title {
      justify-self: center;
    }
    .button {
      justify-self: center;
    }
    .main {
      max-width: ${({ theme }) => theme.spacing(50)};
      min-width: ${({ theme }) => theme.spacing(20)};
    }
  }
`;

export default ClusterGrid;
