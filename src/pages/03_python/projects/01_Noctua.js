import React, { useState } from 'react'
import ProjectCard from '../../../components/layout/ProjectCard'
import ModalOverlay from '../../../components/lightbox/ModalOverlay'
import NoctuaDetails from './details/01_NoctuaDetails'
import NoctuaLogo from '../../../assets/images/Projects/noctua_logo.png'

export default function Noctua() {
  const [showModal, setShowModal] = useState(false)

  // Kompakte Daten für die Card
  const noctuaProject = {
    image: NoctuaLogo,
    name: 'Noctua',
    description: 'Systeminformationen mit Struktur',
    badges: [
      { label: 'Python 3.10+', icon: 'FaPython', variant: 'primary' },
      { label: 'TDD', icon: 'FaBug', variant: 'success' },
      {
        label: 'Domain Driven Design',
        icon: 'FaProjectDiagram',
        variant: 'accent',
      },
      {
        label: 'Benutzerfreundliche GUI',
        icon: 'FaMousePointer',
        variant: 'secondary',
      },
      { label: 'Markdown-Export', icon: 'FaFileAlt', variant: 'warning' },
    ],
    githubLink: 'https://github.com/jonaszeihe/noctua', // z. B., falls vorhanden
  }

  return (
    <>
      <ProjectCard project={noctuaProject} onOpen={() => setShowModal(true)} />

      {showModal && (
        <ModalOverlay onClose={() => setShowModal(false)}>
          <NoctuaDetails />
        </ModalOverlay>
      )}
    </>
  )
}
