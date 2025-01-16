// src/pages/react/projects/01_ColorPal.js
import React, { useState } from 'react';
import ProjectCluster from '../../../components/honeycomb/ProjectCluster';
import ModalOverlay from '../../../components/lightbox/ModalOverlay';
import ColorPalDetails from './details/01_ColorPalDetails';
import ColorPalImage from '../../../assets/images/Projects/colorpal_logo.png';

export default function ColorPal() {
  const [showModal, setShowModal] = useState(false);

  // Projekt-Daten für die Card
  const colorPalProject = {
    image: ColorPalImage,
    name: 'ColorPal',
    description: 'Daten in Kunst verwandeln: dynamische Diagramme & Export.',
    badges: [
      { label: 'React', icon: 'FaReact', variant: 'primary' },
      { label: 'Styled Components', icon: 'FaPalette', variant: 'success' },
      { label: 'JSON Handling', icon: 'FaFileCode', variant: 'accent' },
    ],
    githubLink: 'https://github.com/jonaszeihe/colorpal',
  };

  return (
    <>
      {/* Card-Ansicht (kompakt) */}
      <ProjectCluster
        project={colorPalProject}
        onOpen={() => setShowModal(true)}
      />

      {/* Overlay mit Detail-Komponente, wenn showModal = true */}
      {showModal && (
        <ModalOverlay onClose={() => setShowModal(false)}>
          <ColorPalDetails />
        </ModalOverlay>
      )}
    </>
  );
}
