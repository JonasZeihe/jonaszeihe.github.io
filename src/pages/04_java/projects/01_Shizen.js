import React, { useState } from 'react';
import ProjectCard from '../../../components/layout/ProjectCard';
import ModalOverlay from '../../../components/lightbox/ModalOverlay';
import ShizenDetails from './details/01_ShizenDetails';
import ShizenImage from '../../../assets/images/Projects/shizen-logo.png';

export default function Shizen() {
  const [showModal, setShowModal] = useState(false);

  // Kompakte Projekt-Daten für Shizen
  const shizenProject = {
    image: ShizenImage,
    name: 'Shizen',
    description: 'Die Plattform für modernes Lernen und Lehren',
    badges: [
      { label: 'Java', icon: 'FaJava', variant: 'primary' },
      { label: 'Spring Boot', icon: 'FaLeaf', variant: 'success' },
      { label: 'Spring Security', icon: 'FaLock', variant: 'accent' },
      { label: 'MongoDB', icon: 'FaDatabase', variant: 'secondary' },
      { label: 'REST APIs', icon: 'FaNetworkWired', variant: 'primary' },
      { label: 'React', icon: 'FaReact', variant: 'success' },
      { label: 'Responsive Design', icon: 'FaMobileAlt', variant: 'accent' },
      {
        label: 'UX/UI Best Practices',
        icon: 'FaPalette',
        variant: 'secondary',
      },
      { label: 'Gamification', icon: 'FaTrophy', variant: 'primary' },
    ],
    githubLink: 'https://github.com/jonaszeihe/shizen',
  };

  return (
    <>
      {/* Kompakte Card-Ansicht */}
      <ProjectCard project={shizenProject} onOpen={() => setShowModal(true)} />

      {/* Overlay mit Detail-Komponente */}
      {showModal && (
        <ModalOverlay onClose={() => setShowModal(false)}>
          <ShizenDetails />
        </ModalOverlay>
      )}
    </>
  );
}
