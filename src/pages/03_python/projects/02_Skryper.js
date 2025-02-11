import React, { useState } from 'react'
import ProjectCard from '../../../components/layout/ProjectCard'
import ModalOverlay from '../../../components/lightbox/ModalOverlay'
import SkryperDetails from './details/02_SkryperDetails'
import SkryperLogo from '../../../assets/images/Projects/skryper_logo.png'

export default function Skryper() {
  const [showModal, setShowModal] = useState(false)

  const skryperProject = {
    image: SkryperLogo,
    name: 'Skryper',
    description: 'Stromlinienförmige Projektbaumstrukturen',
    badges: [
      'python',
      'gitignore-support',
      'modular-design',
      'cli-tool',
      'clean-code',
    ],
    githubLink: 'https://github.com/jonaszeihe/skryper',
  }

  return (
    <>
      <ProjectCard
        project={skryperProject}
        gradient="primaryToSecondary.subtle"
        onOpen={() => setShowModal(true)}
      />

      {showModal && (
        <ModalOverlay onClose={() => setShowModal(false)}>
          <SkryperDetails />
        </ModalOverlay>
      )}
    </>
  )
}
