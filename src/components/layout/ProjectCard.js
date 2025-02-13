import React from 'react'
import styled from 'styled-components'
import {
  CardWrapper,
  Typography,
  Button,
  ButtonGrid,
} from '../../utils/sharedComponents'
import BadgeGrid from '../common/BadgeGrid'

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 50%;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`

const ContentWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing(1)};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-grow: 1;
`

function ProjectCard({ project, gradient, onOpen }) {
  const handleCardClick = () => onOpen()

  const handleOpenButtonClick = (e) => {
    e.stopPropagation()
    onOpen()
  }

  const handleExternalButtonClick = (e, link) => {
    e.stopPropagation()
    window.open(link, '_blank')
  }

  return (
    <CardWrapper
      gradient={gradient}
      onClick={handleCardClick}
      style={{ cursor: 'pointer' }}
    >
      <ImageWrapper>
        <img src={project.image} alt={project.name} />
      </ImageWrapper>
      <ContentWrapper>
        <Typography variant="h2" align="center" color="primary.main">
          {project.name}
        </Typography>
        <Typography variant="body" align="center" color="depth.darkest">
          {project.description}
        </Typography>
        <BadgeGrid badges={project.badges} />
        <ButtonGrid>
          <Button variant="primary" onClick={handleOpenButtonClick}>
            Projekt ansehen
          </Button>
          {project.buttons?.map(({ text, link, variant, buttonBackground }) => (
            <Button
              key={text}
              variant={variant}
              buttonBackground={buttonBackground}
              onClick={(e) => handleExternalButtonClick(e, link)}
            >
              {text}
            </Button>
          ))}
        </ButtonGrid>
      </ContentWrapper>
    </CardWrapper>
  )
}

export default ProjectCard
