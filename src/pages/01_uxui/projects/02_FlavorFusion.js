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
    buttons: [
      {
        text: 'Prototyp',
        link: 'https://www.figma.com/proto/Gy9acaVeAmKcpYY2qLSE24/Projekt4_FIGMA_JONAS?page-id=606%3A5597&node-id=4114-3680&viewport=3715%2C1765%2C0.4&t=9FZnOndSTJA4elsZ-1&scaling=scale-down&content-scaling=fixed',
        variant: 'success',
      },
      {
        text: 'Case Study',
        link: 'https://jonaszeihe.github.io/casestudyFlavorFusion/',
        variant: 'casestudy',
      },
    ],
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
