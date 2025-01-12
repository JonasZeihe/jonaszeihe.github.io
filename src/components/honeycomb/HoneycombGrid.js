import styled from 'styled-components';

const HoneycombGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: calc(200px * 0.866);
  gap: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => theme.spacing(3)};
  justify-content: center;

  & > :nth-child(odd) {
    transform: translateY(50%);
  }

  & > :nth-child(even) {
    transform: translateY(0);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);

    & > :nth-child(odd) {
      transform: translateY(25%);
    }
  }
`;

export default HoneycombGrid;
