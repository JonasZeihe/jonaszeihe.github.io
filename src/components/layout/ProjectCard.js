import React from 'react'
import styled from 'styled-components'
import {
  Typography,
  Button,
  CardWrapper as BaseCardWrapper,
} from '../../utils/sharedComponents'
import BadgeGrid from '../common/BadgeGrid'

const CardWrapper = styled(BaseCardWrapper)`
  background: ${({ theme, gradient }) =>
    gradient ? theme.gradients[gradient] : theme.gradients.neutralSoft};
  border: 1px solid ${({ theme }) => theme.colors.neutral.light};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.boxShadow.heavy};
  }
`

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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  margin-top: ${({ theme }) => theme.spacing(2)};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(1)};
  }
`

function ProjectCard({ project, gradient, onOpen }) {
  const handleCardClick = () => onOpen()

  const handleOpenButtonClick = (e) => {
    e.stopPropagation()
    onOpen()
  }

  const handleSecondButtonClick = (e) => {
    e.stopPropagation()
    if (project.githubLink) {
      window.open(project.githubLink, '_blank')
    }
  }

  return (
    <CardWrapper gradient={gradient} onClick={handleCardClick}>
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
        <ButtonContainer>
          <Button variant="primary" onClick={handleOpenButtonClick}>
            Projekt ansehen
          </Button>
          {project.githubLink && (
            <Button variant="secondary" onClick={handleSecondButtonClick}>
              GitHub
            </Button>
          )}
        </ButtonContainer>
      </ContentWrapper>
    </CardWrapper>
  )
}

export default ProjectCard
