import React from 'react'
import styled from 'styled-components'
import {
  CardWrapper,
  Typography,
  Button,
  ButtonGrid,
} from '../../utils/sharedComponents'

export default function ProjectCard({ project, onOpen }) {
  return (
    <CardWrapper
      onClick={onOpen}
      style={{ cursor: 'pointer' }}
      as="article"
      variant="subtle"
    >
      <ImageWrapper>
        <ProjectImage src={project.image} alt={project.name} />
        <Overlay />
      </ImageWrapper>
      <Content>
        <Typography variant="h2" color="primary.main" align="center">
          {project.name}
        </Typography>
        <Typography variant="body" align="center">
          {project.description}
        </Typography>
        <ButtonGrid>
          <Button
            variant="primary"
            onClick={(e) => {
              e.stopPropagation()
              onOpen()
            }}
          >
            Projekt ansehen
          </Button>
          {project.buttons?.map(({ text, link, variant }) => (
            <Button
              key={text}
              variant={variant}
              onClick={(e) => {
                e.stopPropagation()
                window.open(link, '_blank')
              }}
            >
              {text}
            </Button>
          ))}
        </ButtonGrid>
      </Content>
    </CardWrapper>
  )
}

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-top-left-radius: ${({ theme }) => theme.borderRadius.medium};
  border-top-right-radius: ${({ theme }) => theme.borderRadius.medium};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    border-radius: ${({ theme }) => theme.borderRadius.small};
  }
`

const ProjectImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.32s cubic-bezier(0.37, 0.47, 0.61, 0.97);
  z-index: 1;
`

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  transition: background 0.23s;
`

const Content = styled.div`
  padding: ${({ theme }) => theme.spacing(2)};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  background: ${({ theme }) => theme.colors.surface.cardAlpha};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.medium};
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius.medium};
  min-height: 11rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    border-radius: ${({ theme }) => theme.borderRadius.small};
    padding: ${({ theme }) => theme.spacing(1.1)};
    gap: ${({ theme }) => theme.spacing(1)};
    min-height: 7rem;
  }
`
