import React, { useState } from 'react'
import ProjectCard from '../../../components/layout/ProjectCard'
import ModalOverlay from '../../../components/lightbox/ModalOverlay'
import SkryStructraDetails from './details/02_SkryperDetails'
import CombinedLogo from '../../../assets/images/Projects/skryper_structra_logo.webp'

export default function Skryper() {
  const [showModal, setShowModal] = useState(false)

  const projectData = {
    image: CombinedLogo,
    name: 'Skryper & Structra',
    description:
      'Stromlinienförmige Projektbaumstrukturen analysieren & generieren',
    buttons: [
      {
        text: 'Skryper GitHub',
        link: 'https://github.com/jonaszeihe/skryper',
        variant: 'github',
      },
      {
        text: 'Structra GitHub',
        link: 'https://github.com/jonaszeihe/structra',
        variant: 'github',
      },
    ],
  }

  return (
    <>
      <ProjectCard
        project={projectData}
        gradient="primaryToSecondary.subtle"
        onOpen={() => setShowModal(true)}
      />
      {showModal && (
        <ModalOverlay onClose={() => setShowModal(false)}>
          <SkryStructraDetails />
        </ModalOverlay>
      )}
    </>
  )
}
