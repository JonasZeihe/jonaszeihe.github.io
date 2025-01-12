import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Typography, Badge } from '../../utils/sharedComponents';
import TitleCellWrapper from './TitleCellWrapper';
import ProjectCellWrapper from './ProjectCellWrapper';
import ClusterGrid from './ClusterGrid';
import HoneycombIconButton from '../common/HoneycombIconButton';

const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export default function ProjectCluster({ project, variant, onOpen }) {
  const handleCellClick = () => {
    if (onOpen) onOpen(project);
  };

  return (
    <ClusterGrid variant={variant}>
      <TitleCellWrapper className="title" variant={variant}>
        <Typography variant="h3" align="center">
          {project.name}
        </Typography>
      </TitleCellWrapper>

      <ProjectCellWrapper
        className="main"
        src={project.image}
        size="large"
        onClick={handleCellClick}
      >
        <div>
          <Typography variant="body" align="center">
            {project.description}
          </Typography>
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
      </ProjectCellWrapper>

      <HoneycombIconButton
        className="button"
        icon="FaGithub"
        size="small"
        onClick={() => window.open(project.githubLink, '_blank')}
      />
    </ClusterGrid>
  );
}

ProjectCluster.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    badges: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        icon: PropTypes.string,
        variant: PropTypes.string,
      })
    ).isRequired,
    githubLink: PropTypes.string.isRequired,
  }).isRequired,
  variant: PropTypes.oneOf(['variant1', 'variant2', 'variant3']).isRequired,
  onOpen: PropTypes.func,
};

ProjectCluster.defaultProps = {
  onOpen: null,
};
