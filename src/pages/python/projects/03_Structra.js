import React, { useState } from 'react';
import ProjectCard from '../../../components/layout/ProjectCard';
import ModalOverlay from '../../../components/lightbox/ModalOverlay';
import StructraDetails from './details/03_StructraDetails';
import StructraLogo from '../../../assets/images/Projects/structra_logo.png';

export default function Structra() {
  const [showModal, setShowModal] = useState(false);

  // Kompakte Projekt-Daten für die Card
  const structraProject = {
    image: StructraLogo,
    name: 'Structra',
    description: 'Strukturen leicht gemacht',
    badges: [
      { label: 'Automatisierung', icon: 'FaCogs', variant: 'primary' },
      { label: 'Drag and Drop', icon: 'FaMousePointer', variant: 'accent' },
      { label: 'Projektvorlagen', icon: 'FaFolderOpen', variant: 'success' },
      { label: 'Python 3.10+', icon: 'FaPython', variant: 'primary' },
      { label: 'Skryper-Integration', icon: 'FaPuzzlePiece', variant: 'info' },
    ],
    githubLink: 'https://github.com/jonaszeihe/structra',
  };

  return (
    <>
      {/* Card-Ansicht */}
      <ProjectCard
        project={structraProject}
        onOpen={() => setShowModal(true)}
      />

      {/* Overlay mit Detail-Komponente */}
      {showModal && (
        <ModalOverlay onClose={() => setShowModal(false)}>
          <StructraDetails />
        </ModalOverlay>
      )}
    </>
  );
}
