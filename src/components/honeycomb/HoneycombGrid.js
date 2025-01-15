import styled from 'styled-components';

const HoneycombGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => theme.spacing(3)};
  justify-items: center;
  align-items: start;
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
