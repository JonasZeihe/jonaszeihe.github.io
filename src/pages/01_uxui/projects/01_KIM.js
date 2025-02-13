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
    buttons: [
      {
        text: 'Prototyp',
        link: 'https://www.figma.com/proto/zOqkBn4RzZ9vU8yIWpjbwx/capstone_Gruppe4_designsystem?page-id=1%3A2&node-id=1269-9613&viewport=6473%2C-426%2C0.65&t=glC7uXK0AhmNVLGg-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1184%3A20281',
        variant: 'success',
      },
      {
        text: 'Case Study',
        link: 'https://jonaszeihe.github.io/case-study-KIM/',
        variant: 'casestudy',
      },
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
