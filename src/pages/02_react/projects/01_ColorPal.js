import React, { useState } from 'react'
import ProjectCard from '../../../components/layout/ProjectCard'
import ModalOverlay from '../../../components/lightbox/ModalOverlay'
import ColorPalDetails from './details/01_ColorPalDetails'
import ColorPalImage from '../../../assets/images/Projects/colorpal_logo.png'

export default function ColorPal() {
  const [showModal, setShowModal] = useState(false)

  const colorPalProject = {
    image: ColorPalImage,
    name: 'ColorPal',
    description: 'Daten in Kunst verwandeln: dynamische Diagramme & Export.',
    badges: ['react', 'styled-components', 'json-handling'],
    githubLink: 'https://github.com/jonaszeihe/colorpal',
  }

  return (
    <>
      <ProjectCard
        project={colorPalProject}
        gradient="accentPlayful.subtle"
        onOpen={() => setShowModal(true)}
      />

      {showModal && (
        <ModalOverlay onClose={() => setShowModal(false)}>
          <ColorPalDetails />
        </ModalOverlay>
      )}
    </>
  )
}
