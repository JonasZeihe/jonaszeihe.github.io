import React, { useState } from 'react';
import ProjectCard from '../../../components/layout/ProjectCard';
import ModalOverlay from '../../../components/lightbox/ModalOverlay';
import KIMDetails from './details/01_KIMDetails';
import KimImage from '../../../assets/images/Projects/kim_logo.png';

export default function KIM() {
  const [showModal, setShowModal] = useState(false);

  // Kompakte Projekt-Daten für die Card
  const kimProject = {
    image: KimImage,
    name: 'KIM',
    description: 'Your friend to meet new friends: KI & zugängliches Design.',
    badges: [
      { label: 'UX/UI Design', icon: 'FaPalette', variant: 'primary' },
      { label: 'Iteratives Prototyping', icon: 'FaRedo', variant: 'success' },
      { label: 'Figma & FigJam', icon: 'FaFigma', variant: 'accent' },
      { label: 'User-Centered Design', icon: 'FaUser', variant: 'secondary' },
      {
        label: 'Zugängliches Design',
        icon: 'FaUniversalAccess',
        variant: 'primary',
      },
    ],
    // Falls du einen GitHub-Link hättest: githubLink: 'https://github.com/...',
  };

  return (
    <>
      {/* Card-Ansicht */}
      <ProjectCard project={kimProject} onOpen={() => setShowModal(true)} />

      {/* ModalOverlay für die Detail-Komponente */}
      {showModal && (
        <ModalOverlay onClose={() => setShowModal(false)}>
          <KIMDetails />
        </ModalOverlay>
      )}
    </>
  );
}
