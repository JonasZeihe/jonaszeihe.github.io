import React, { useState } from 'react'
import ProjectCard from '../../../components/layout/ProjectCard'
import ModalOverlay from '../../../components/lightbox/ModalOverlay'
import InkGridDetails from './details/04_InkGridDetails'
import InkGridLogo from '../../../assets/images/Projects/inkgrid_logo.png'

export default function InkGrid() {
  const [showModal, setShowModal] = useState(false)

  const inkGridProject = {
    image: InkGridLogo,
    name: 'InkGrid',
    description: 'Professionelle Farbpaletten schnell integriert',
    badges: [
      'svg-optimization',
      'light-dark-mode',
      'design-system',
      'drag-and-drop',
      'windows-first',
    ],
    buttons: [
      {
        text: 'GitHub',
        link: 'https://github.com/jonaszeihe/inkgrid',
        variant: 'github',
      },
    ],
  }

  return (
    <>
      <ProjectCard
        project={inkGridProject}
        gradient="warmBold.subtle"
        onOpen={() => setShowModal(true)}
      />

      {showModal && (
        <ModalOverlay onClose={() => setShowModal(false)}>
          <InkGridDetails />
        </ModalOverlay>
      )}
    </>
  )
}
