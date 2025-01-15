// ProjectCell.js
import React from 'react';
import styled from 'styled-components';
import HexagonCell from './HexagonCell';
import { Badge, Typography } from '../../utils/sharedComponents';

const ProjectCellWrapper = styled(HexagonCell)`
  position: relative;
  cursor: pointer;
  display: flex;

  .flip-container {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.8s ease;
  }

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }

  &:hover .flip-container {
    transform: rotateY(180deg);
  }

  .front,
  .back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: ${({ theme }) => theme.spacing(2)};
  }

  .front {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: brightness(0.7);
    transform: rotateY(0deg);
    color: ${({ theme }) => theme.colors.neutral.lightest};
  }

  .front-content {
    max-width: 80%;
    margin: 0 auto;
    line-height: 1.4;
    word-break: break-word;
  }

  .back {
    background-color: ${({ theme }) => theme.colors.neutral.dark};
    transform: rotateY(180deg);
    color: ${({ theme }) => theme.colors.neutral.lightest};
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing(1)};
    justify-content: center;
    max-width: 80%;
    margin: 0 auto;
  }
`;

export default function ProjectCell({ project, onOpen, className }) {
  const handleClick = () => {
    if (onOpen) onOpen();
  };

  return (
    <ProjectCellWrapper className={className} onClick={handleClick}>
      <div className="flip-container">
        <div
          className="front"
          style={{ backgroundImage: `url(${project.image})` }}
        >
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
