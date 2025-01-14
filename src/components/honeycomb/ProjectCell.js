import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HexagonCell from './HexagonCell';
import { Badge, Typography } from '../../utils/sharedComponents';

const ProjectCellWrapper = styled(HexagonCell)`
  position: relative;
  cursor: pointer;

  .image-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${({ src }) => src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 0;
    transition:
      filter 0.3s ease,
      transform 0.3s ease;
  }

  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: ${({ theme }) => theme.spacing(2)};
    z-index: 1;

    .description {
      max-height: ${({ theme }) => theme.spacing(4)};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: ${({ theme }) => theme.spacing(2)};
      color: ${({ theme }) => theme.colors.neutral.white};
    }
  }

  &:hover {
    .image-container {
      filter: brightness(0.8);
      transform: scale(1.05); /* Smooth zoom effect */
    }

    .badges {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing(1)};
    justify-content: center;
    opacity: 0;
    transform: translateY(10px);
    transition:
      opacity 0.3s ease,
      transform 0.3s ease;
  }
`;

export default function ProjectCell({ project, onClick }) {
  return (
    <ProjectCellWrapper
      src={project.image}
      onClick={(e) => {
        e.stopPropagation(); // Verhindert Event-Bubbling
        onClick();
      }}
    >
      <div className="image-container" />
      <div className="content">
        <Typography
          className="description"
          variant="body"
          align="center"
          color="neutral.lightest"
        >
          {project.description}
        </Typography>
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
    </ProjectCellWrapper>
  );
}

ProjectCell.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
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
