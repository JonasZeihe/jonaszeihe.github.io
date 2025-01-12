import styled from 'styled-components';
import CellWrapper from './CellWrapper';

const ProjectCellWrapper = styled(CellWrapper)`
  position: relative;
  padding: ${({ theme }) => theme.spacing(2)};
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;

  overflow: hidden; /* Inhalte begrenzen */
`;

export default ProjectCellWrapper;
