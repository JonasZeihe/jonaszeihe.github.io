import styled from 'styled-components';

const CardGrid = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: ${({ theme }) => theme.spacing(3)};
  margin-top: ${({ theme }) => theme.spacing(3)};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    margin-top: ${({ theme }) => theme.spacing(2)};
  }
`;

export default CardGrid;
