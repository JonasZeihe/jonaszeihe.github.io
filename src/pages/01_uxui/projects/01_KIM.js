import React, { useState } from 'react'
import ProjectCard from '../../../components/layout/ProjectCard'
import ModalOverlay from '../../../components/lightbox/ModalOverlay'
import KIMDetails from './details/01_KIMDetails'
import KimImage from '../../../assets/images/Projects/kim_logo.png'

export default function KIM() {
  const [showModal, setShowModal] = useState(false)

  const kimProject = {
    image: KimImage,
    name: 'KIM',
    description: 'Your friend to meet new friends: KI & zugängliches Design.',
    badges: [
      'ux-ui-design',
      'iterative-prototyping',
      'figma',
      'user-centered-design',
      'accessibility',
    ],
  }

  return (
    <>
      <ProjectCard
        project={kimProject}
        gradient="depthToHighlight.subtle"
        onOpen={() => setShowModal(true)}
      />

      {showModal && (
        <ModalOverlay
          onClose={() => setShowModal(false)}
          gradient="depthToHighlight.subtle"
        >
          <KIMDetails />
        </ModalOverlay>
      )}
    </>
  )
}
