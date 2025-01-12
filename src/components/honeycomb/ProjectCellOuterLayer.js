import styled from 'styled-components';

const ProjectCellOuterLayer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  /* Wabenform */
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  background-color: ${({ theme }) => theme.colors.neutral.white};

  /* Hover-Effekt */
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  &:hover {
    transform: scale(1.03);
    box-shadow: ${({ theme }) => theme.boxShadow.heavy};
  }
`;

export default ProjectCellOuterLayer;
