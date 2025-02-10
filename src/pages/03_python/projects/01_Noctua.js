import React, { useState } from 'react'
import ProjectCard from '../../../components/layout/ProjectCard'
import ModalOverlay from '../../../components/lightbox/ModalOverlay'
import NoctuaDetails from './details/01_NoctuaDetails'
import NoctuaLogo from '../../../assets/images/Projects/noctua_logo.png'

export default function Noctua() {
  const [showModal, setShowModal] = useState(false)

  const noctuaProject = {
    image: NoctuaLogo,
    name: 'Noctua',
    description: 'Systeminformationen mit Struktur',
    badges: [
      'python',
      'tdd',
      'domain-driven-design',
      'user-friendly-gui',
      'markdown-export',
    ],
    githubLink: 'https://github.com/jonaszeihe/noctua',
  }

  return (
    <>
      <ProjectCard
        project={noctuaProject}
        gradient="secondaryBold.subtle"
        onOpen={() => setShowModal(true)}
      />

      {showModal && (
        <ModalOverlay onClose={() => setShowModal(false)}>
          <NoctuaDetails />
        </ModalOverlay>
      )}
    </>
  )
}
