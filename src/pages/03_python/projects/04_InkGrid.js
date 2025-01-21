import React, { useState } from 'react'
import ProjectCard from '../../../components/layout/ProjectCard'
import ModalOverlay from '../../../components/lightbox/ModalOverlay'
import InkGridDetails from './details/04_InkGridDetails'
import InkGridLogo from '../../../assets/images/Projects/inkgrid_logo.png'

export default function InkGrid() {
  const [showModal, setShowModal] = useState(false)

  // Kompakte Projekt-Daten für die Card
  const inkGridProject = {
    image: InkGridLogo,
    name: 'InkGrid',
    description: 'Farben mit Struktur',
    badges: [
      { label: 'SVG-Optimierung', icon: 'FaShapes', variant: 'primary' },
      { label: 'Light/Dark-Modus', icon: 'FaMoon', variant: 'accent' },
      {
        label: 'Design-System-Kompatibilität',
        icon: 'FaPaintBrush',
        variant: 'success',
      },
      { label: 'Drag and Drop', icon: 'FaMousePointer', variant: 'warning' },
      { label: 'Windows-First', icon: 'FaWindows', variant: 'secondary' },
    ],
    githubLink: 'https://github.com/jonaszeihe/inkgrid',
  }

  return (
    <>
      {/* Kompakte Card-Ansicht */}
      <ProjectCard project={inkGridProject} onOpen={() => setShowModal(true)} />

      {/* Overlay mit Detail-Komponente */}
      {showModal && (
        <ModalOverlay onClose={() => setShowModal(false)}>
          <InkGridDetails />
        </ModalOverlay>
      )}
    </>
  )
}
