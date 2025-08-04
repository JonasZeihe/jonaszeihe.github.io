import React, { useState } from 'react'
import ProjectCard from '../../../components/layout/ProjectCard'
import ModalOverlay from '../../../components/lightbox/ModalOverlay'
import NoctuaDetails from './details/01_NoctuaDetails'
import NoctuaLogo from '../../../assets/images/Projects/noctua_logo.webp'

export default function Noctua() {
  const [showModal, setShowModal] = useState(false)

  const noctuaProject = {
    image: NoctuaLogo,
    name: 'Noctua',
    description: 'Hardwaresteckbriefe in Markdown',
    buttons: [
      {
        text: 'GitHub',
        link: 'https://github.com/jonaszeihe/noctuaLight',
        variant: 'github',
      },
    ],
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
