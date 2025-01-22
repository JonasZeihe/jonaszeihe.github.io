import React from 'react'
import styled from 'styled-components'
import { Button, Badge, Typography } from '../../utils/sharedComponents'

// Styled Components
const CardWrapper = styled.div`
  background: ${({ theme, gradient }) =>
    theme.gradients[gradient] ||
    theme.gradients.secondaryLight}; // Dynamische Unterstützung aller Gradients
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing(3)};
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(1.5)};
  justify-content: center;
  margin: ${({ theme }) => theme.spacing(2)} 0;
`

const ButtonContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(3)};
  display: flex;
  justify-content: center;
`

const scrollToSection = (id) => {
  const section = document.getElementById(id)
  if (section) section.scrollIntoView({ behavior: 'smooth' })
}

// FeatureCard Component
export default function FeatureCard({
  title,
  description,
  tags = [],
  targetId,
  gradient, // Unterstützt alle Gradient-Varianten
}) {
  return (
    <CardWrapper gradient={gradient}>
      <Typography variant="h2" align="center" color="primary.main">
        {title}
      </Typography>
      <Typography variant="body" align="center" color="depth.dark">
        {description}
      </Typography>
      <TagContainer>
        {tags.map((tag) => (
          <Badge key={tag} label={tag} variant="accent" />
        ))}
      </TagContainer>
      <ButtonContainer>
        <Button
          variant="primary"
          size="medium"
          onClick={() => scrollToSection(targetId)}
        >
          Zum Projekt
        </Button>
      </ButtonContainer>
    </CardWrapper>
  )
}
