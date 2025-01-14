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

  const handleOpen = (e) => {
    e.stopPropagation(); // Verhindert Event-Bubbling
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ClusterGrid variant={variant}>
        {/* Titelzelle */}
        <HexagonCell color="neutral.white" className="title">
          <Typography variant="h1" align="center" color="primary.main">
            {project.name}
          </Typography>
        </HexagonCell>

        {/* Hauptprojektzelle */}
        <ProjectCell
          project={project}
          onClick={handleOpen} // Modal-Öffnung
          className="main"
        />

        {/* GitHub-Buttonzelle */}
        <HoneycombIconButton
          className="button"
          icon="FaGithub"
          size="small"
          onClick={(e) => {
            e.stopPropagation(); // Verhindert Modal-Öffnung
            window.open(project.githubLink, '_blank');
          }}
        />
      </ClusterGrid>

      {/* Modal-Overlay */}
      {isModalOpen && (
        <ModalOverlay onClose={handleClose}>
          <Typography variant="h1" align="center" color="primary.main">
            {project.name}
          </Typography>
          <Typography variant="body" align="center" color="neutral.dark">
            {project.description}
          </Typography>
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            {project.badges.map((badge) => (
              <HoneycombIconButton
                key={badge.label}
                icon={badge.icon}
                size="small"
                onClick={() => console.log(`Badge clicked: ${badge.label}`)}
              />
            ))}
          </div>
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
