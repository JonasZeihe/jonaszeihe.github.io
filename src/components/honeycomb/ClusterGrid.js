import styled from 'styled-components';

const ClusterGrid = styled.div`
  display: grid;
  position: relative;
  width: 100%;

  .title {
    position: absolute;
    ${({ variant }) => {
      if (variant === 'variant1') return 'top: 0; left: 0;';
      if (variant === 'variant2')
        return 'top: 50%; left: 50%; transform: translate(-50%, -50%);';
      return 'top: 0; right: 0;';
    }}
  }

  .button {
    position: absolute;
    ${({ variant }) => {
      if (variant === 'variant1') return 'bottom: 0; right: 0;';
      if (variant === 'variant2')
        return 'bottom: 50%; left: 50%; transform: translate(-50%, 50%);';
      return 'bottom: 0; left: 0;';
    }}
  }
`;

export default ClusterGrid;
