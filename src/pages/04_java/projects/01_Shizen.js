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
    buttons: [
      {
        text: 'GitHub',
        link: 'https://github.com/jonaszeihe/ninjin',
        variant: 'github',
      },
    ],
  }

  return (
    <>
      <ProjectCard project={shizenProject} onOpen={() => setShowModal(true)} />

      {showModal && (
        <ModalOverlay onClose={() => setShowModal(false)}>
          <ShizenDetails />
        </ModalOverlay>
      )}
    </>
  )
}
