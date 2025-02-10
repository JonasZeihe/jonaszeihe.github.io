import React, { useState } from 'react'
import ProjectCard from '../../../components/layout/ProjectCard'
import ModalOverlay from '../../../components/lightbox/ModalOverlay'
import ShizenDetails from './details/01_ShizenDetails'
import ShizenImage from '../../../assets/images/Projects/shizen-logo.png'

export default function Shizen() {
  const [showModal, setShowModal] = useState(false)

  const shizenProject = {
    image: ShizenImage,
    name: 'Shizen',
    description: 'Die Plattform für modernes Lernen und Lehren',
    badges: [
      'java',
      'spring-boot',
      'spring-security',
      'mongodb',
      'rest-api',
      'react',
      'responsive-design',
      'ux-ui-best-practices',
      'gamification',
    ],
    githubLink: 'https://github.com/jonaszeihe/shizen',
  }

  return (
    <>
      <ProjectCard
        project={shizenProject}
        gradient="primaryLight.subtle"
        onOpen={() => setShowModal(true)}
      />

      {showModal && (
        <ModalOverlay onClose={() => setShowModal(false)}>
          <ShizenDetails />
        </ModalOverlay>
      )}
    </>
  )
}
