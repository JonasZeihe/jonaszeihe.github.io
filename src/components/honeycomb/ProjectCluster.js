import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ClusterGrid from './ClusterGrid';
import HexagonCell from './HexagonCell';
import ProjectCell from './ProjectCell';
import { Typography } from '../../utils/sharedComponents';
import ModalOverlay from '../lightbox/ModalOverlay';
import HoneycombIconButton from '../common/HoneycombIconButton';

export default function ProjectCluster({ project, variant }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ClusterGrid variant={variant}>
        {/* Titelzelle */}
        <HexagonCell bgColor="#EAEAEA" className="title">
          <Typography variant="h3" align="center" color="primary.main">
            {project.name}
          </Typography>
        </HexagonCell>

        {/* Hauptprojektzelle */}
        <ProjectCell project={project} onClick={handleOpen} className="main" />

        {/* GitHub-Buttonzelle */}
        <HoneycombIconButton
          className="button"
          icon="FaGithub"
          size="small"
          onClick={() => window.open(project.githubLink, '_blank')}
        />
      </ClusterGrid>

      {/* Modal-Overlay */}
      {isModalOpen && (
        <ModalOverlay onClose={handleClose}>
          <Typography variant="h1" align="center">
            {project.name}
          </Typography>
          <Typography variant="body" align="center">
            {project.description}
          </Typography>
        </ModalOverlay>
      )}
    </>
  );
}

ProjectCluster.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    badges: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        icon: PropTypes.string,
        variant: PropTypes.string,
      })
    ).isRequired,
    githubLink: PropTypes.string,
  }).isRequired,
  variant: PropTypes.oneOf(['variant1', 'variant2', 'variant3']).isRequired,
};
