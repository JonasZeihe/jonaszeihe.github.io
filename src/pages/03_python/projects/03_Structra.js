import React, { useState } from 'react'
import ProjectCard from '../../../components/layout/ProjectCard'
import ModalOverlay from '../../../components/lightbox/ModalOverlay'
import StructraDetails from './details/03_StructraDetails'
import StructraLogo from '../../../assets/images/Projects/structra_logo.png'

export default function Structra() {
  const [showModal, setShowModal] = useState(false)

  const structraProject = {
    image: StructraLogo,
    name: 'Structra',
    description: 'Strukturen schnell erstellt',
    badges: [
      'automation',
      'drag-and-drop',
      'project-templates',
      'python',
      'skryper-integration',
    ],
    githubLink: 'https://github.com/jonaszeihe/structra',
  }

  return (
    <>
      <ProjectCard
        project={structraProject}
        gradient="warmDynamic.subtle"
        onOpen={() => setShowModal(true)}
      />

      {showModal && (
        <ModalOverlay onClose={() => setShowModal(false)}>
          <StructraDetails />
        </ModalOverlay>
      )}
    </>
  )
}
