import styled from 'styled-components';

const ProjectCellInnerLayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  /* Padding für Inhalt */
  padding: ${({ theme }) => theme.spacing(2)};
  max-width: 90%; /* Begrenzung innerhalb des OuterLayer */
  z-index: 1; /* Überlappt die Hintergrundebene */
`;

export default ProjectCellInnerLayer;
