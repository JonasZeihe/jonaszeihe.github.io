import React from 'react';
import styled from 'styled-components';
import HexagonCell from './HexagonCell';
import { Badge, Typography } from '../../utils/sharedComponents';

const ProjectCellWrapper = styled(HexagonCell)`
  position: relative;
  cursor: pointer;

  .flip-container {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition:
      transform 0.8s ease,
      scale 0.3s ease;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:hover .flip-container {
    transform: rotateY(180deg);
  }

  .front,
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing(2)};
    text-align: center;
  }

  .front {
    background-image: url(${({ src }) => src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: brightness(0.7);
    transform: rotateY(0deg);
    color: ${({ theme }) => theme.colors.neutral.lightest};
  }

  .front-content {
    z-index: 2;
    color: ${({ theme }) => theme.colors.neutral.lightest};
    text-align: center;
    line-height: 1.4; /* Erhöht die Lesbarkeit bei mehrzeiligem Text */
    word-break: break-word; /* Verhindert Überlaufen von langen Wörtern */
  }

  .back {
    background-color: ${({ theme }) => theme.colors.neutral.dark};
    transform: rotateY(180deg);
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing(1)};
    justify-content: center;
    padding: ${({ theme }) => theme.spacing(2)};
  }
`;

export default function ProjectCell({ project, onOpen }) {
  const handleCellClick = () => {
    if (onOpen) onOpen();
  };

  return (
    <ProjectCellWrapper onClick={handleCellClick} src={project.image}>
      <div className="flip-container">
        <div className="front">
          <div className="front-content">
            <Typography variant="body" align="center">
              {project.description}
            </Typography>
          </div>
        </div>
        <div className="back">
          <div className="badges">
            {project.badges.map((badge) => (
              <Badge
                key={badge.label}
                label={badge.label}
                icon={badge.icon}
                variant={badge.variant}
              />
            ))}
          </div>
        </div>
      </div>
    </ProjectCellWrapper>
  );
}
