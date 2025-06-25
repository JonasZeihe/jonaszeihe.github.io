import React from 'react'
import styled from 'styled-components'
import {
  CardWrapper,
  Typography,
  Button,
  ButtonGrid,
} from '../../utils/sharedComponents'
import BadgeGrid from '../common/BadgeGrid'

export default function ProjectCard({ project, gradient, onOpen }) {
  return (
    <CardWrapper
      gradient={gradient}
      onClick={onOpen}
      style={{ cursor: 'pointer' }}
    >
      <ImageWrapper>
        <img src={project.image} alt={project.name} />
        <Overlay />
      </ImageWrapper>
      <Content>
        <Typography variant="h2" color="primary.main" align="center">
          {project.name}
        </Typography>
        <Typography variant="body" color="depth.darkest" align="center">
          {project.description}
        </Typography>
        <BadgeGrid badges={project.badges} />
        <ButtonGrid>
          <Button
            onClick={(e) => {
              e.stopPropagation()
              onOpen()
            }}
          >
            Projekt ansehen
          </Button>
          {project.buttons?.map(({ text, link, variant, buttonBackground }) => (
            <Button
              key={text}
              variant={variant}
              buttonBackground={buttonBackground}
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
  padding-top: 56.25%;
  overflow: hidden;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent);
`

const Content = styled.div`
  padding: ${({ theme }) => theme.spacing(2)};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`
