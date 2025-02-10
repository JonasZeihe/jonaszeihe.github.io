import React, { useState } from 'react'
import ProjectCard from '../../../components/layout/ProjectCard'
import ModalOverlay from '../../../components/lightbox/ModalOverlay'
import FlavorFusionDetails from './details/02_FlavorFusionDetails'
import FlavorFusionImage from '../../../assets/images/Projects/flavorfusion_logo.png'

export default function FlavorFusion() {
  const [showModal, setShowModal] = useState(false)

  const flavorFusionProject = {
    image: FlavorFusionImage,
    name: 'FlavorFusion',
    description:
      'Die Welt in deiner Küche: visuelles Storytelling & intuitive Navigation.',
    badges: ['figma', 'figjam', 'notion', 'chatgpt'],
  }

  return (
    <>
      <ProjectCard
        project={flavorFusionProject}
        gradient="accentSoft.subtle"
        onOpen={() => setShowModal(true)}
      />

      {showModal && (
        <ModalOverlay onClose={() => setShowModal(false)}>
          <FlavorFusionDetails />
        </ModalOverlay>
      )}
    </>
  )
}
