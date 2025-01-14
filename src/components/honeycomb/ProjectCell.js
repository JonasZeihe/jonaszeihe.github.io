import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HexagonCell from './HexagonCell';
import { Badge, Typography } from '../../utils/sharedComponents';

const ProjectCellWrapper = styled(HexagonCell)`
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  perspective: 1000px;

  .hex-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.6s ease;
  }

  &:hover .hex-inner {
    transform: rotateY(180deg);
  }

  .hex-face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: ${({ theme }) => theme.spacing(1)};
  }

  .hex-front {
    color: ${({ theme }) => theme.colors.neutral.white};
    background-color: rgba(0, 0, 0, 0.4); /* Optionaler Overlay */
  }

  .hex-back {
    transform: rotateY(180deg);
    background-color: ${({ theme }) => theme.colors.neutral.white};
    color: ${({ theme }) => theme.colors.neutral.dark};
  }
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(1)};
`;

export default function ProjectCell({ project, onClick }) {
  return (
    <ProjectCellWrapper src={project.image} onClick={onClick}>
      <div className="hex-inner">
        {/* Vorderseite */}
        <div className="hex-face hex-front">
          <Typography variant="body" align="center">
            {project.description}
          </Typography>
        </div>

        {/* Rückseite */}
        <div className="hex-face hex-back">
          <BadgeContainer>
            {project.badges.map((badge) => (
              <Badge
                key={badge.label}
                label={badge.label}
                icon={badge.icon}
                variant={badge.variant}
              />
            ))}
          </BadgeContainer>
        </div>
      </div>
    </ProjectCellWrapper>
  );
}

ProjectCell.propTypes = {
  project: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    badges: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        icon: PropTypes.string,
        variant: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
