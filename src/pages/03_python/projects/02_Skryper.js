import React, { useState } from 'react'
import ProjectCard from '../../../components/layout/ProjectCard'
import ModalOverlay from '../../../components/lightbox/ModalOverlay'
import SkryperDetails from './details/02_SkryperDetails'
import SkryperLogo from '../../../assets/images/Projects/skryper_logo.png'

export default function Skryper() {
  const [showModal, setShowModal] = useState(false)

  // Kompakte Daten für die Card
  const skryperProject = {
    image: SkryperLogo,
    name: 'Skryper',
    description: 'Projektstrukturen im Fokus',
    badges: [
      { label: 'Python 3.10+', icon: 'FaPython', variant: 'primary' },
      { label: '.gitignore Support', icon: 'FaShieldAlt', variant: 'accent' },
      { label: 'Modular Design', icon: 'FaCogs', variant: 'success' },
      { label: 'CLI Tool', icon: 'FaTerminal', variant: 'warning' },
      { label: 'Clean Code', icon: 'FaCode', variant: 'secondary' },
    ],
    githubLink: 'https://github.com/jonaszeihe/skryper',
  }

  return (
    <>
      {/* Card-Ansicht */}
      <ProjectCard
        project={skryperProject}
        gradient="primaryToSecondary.subtle"
        onOpen={() => setShowModal(true)}
      />

      {/* Overlay mit Detail-Komponente */}
      {showModal && (
        <ModalOverlay onClose={() => setShowModal(false)}>
          <SkryperDetails />
        </ModalOverlay>
      )}
    </>
  )
}
