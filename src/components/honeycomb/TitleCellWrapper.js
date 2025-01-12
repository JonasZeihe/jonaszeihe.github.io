import styled from 'styled-components';
import CellWrapper from './CellWrapper';

const TitleCellWrapper = styled(CellWrapper)`
  position: absolute;
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.primary.light};
  color: ${({ theme }) => theme.colors.neutral.darkest};

  ${({ variant }) => {
    switch (variant) {
      case 'variant1':
        return `top: -30%; left: -30%;`;
      case 'variant2':
        return `top: -10%; left: 50%; transform: translateX(-50%);`;
      case 'variant3':
        return `top: -30%; right: -30%;`;
      default:
        return '';
    }
  }}
`;

export default TitleCellWrapper;
