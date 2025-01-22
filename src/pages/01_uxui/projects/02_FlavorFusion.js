import React, { useState } from 'react'
import ProjectCard from '../../../components/layout/ProjectCard'
import ModalOverlay from '../../../components/lightbox/ModalOverlay'
import FlavorFusionDetails from './details/02_FlavorFusionDetails'
import FlavorFusionImage from '../../../assets/images/Projects/flavorfusion_logo.png'

export default function FlavorFusion() {
  const [showModal, setShowModal] = useState(false)

  // Kompakte Daten für die Card-Ansicht
  const flavorFusionProject = {
    image: FlavorFusionImage,
    name: 'FlavorFusion',
    description:
      'Die Welt in deiner Küche: visuelles Storytelling & intuitive Navigation.',
    badges: [
      { label: 'Figma', icon: 'FaFigma', variant: 'primary' },
      { label: 'FigJam', icon: 'FaPencilAlt', variant: 'secondary' },
      { label: 'Notion', icon: 'FaBook', variant: 'accent' },
      { label: 'ChatGPT', icon: 'FaRobot', variant: 'success' },
    ],
    // Falls nötig: githubLink: 'https://github.com/...'
  }

  return (
    <>
      {/* Card-Ansicht */}
      <ProjectCard
        project={flavorFusionProject}
        gradient="accentSoft.subtle"
        onOpen={() => setShowModal(true)}
      />

      {/* Overlay mit Detail-Komponente */}
      {showModal && (
        <ModalOverlay onClose={() => setShowModal(false)}>
          <FlavorFusionDetails />
        </ModalOverlay>
      )}
    </>
  )
}
