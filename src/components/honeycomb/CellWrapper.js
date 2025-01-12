import styled from 'styled-components';

const CellWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  background-color: ${({ theme }) => theme.colors.neutral.white};
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.boxShadow.heavy};
  }

  width: ${({ size, theme }) => {
    if (size === 'large') return theme.spacing(30);
    if (size === 'medium') return theme.spacing(20);
    return theme.spacing(15);
  }};
  height: ${({ size, theme }) => {
    if (size === 'large') return `${theme.spacing(30) * 0.866}px`;
    if (size === 'medium') return `${theme.spacing(20) * 0.866}px`;
    return `${theme.spacing(15) * 0.866}px`;
  }};
`;

export default CellWrapper;
