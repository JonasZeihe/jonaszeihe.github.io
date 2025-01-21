import React from 'react'
import styled from 'styled-components'
import { Button, Badge, Typography } from '../../utils/sharedComponents'

const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary.light};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing(2)};
  box-shadow: ${({ theme }) => theme.boxShadow.light};
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const TagContainer = styled.div`
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(2)};
`

const scrollToSection = (id) => {
  const section = document.getElementById(id)
  if (section) section.scrollIntoView({ behavior: 'smooth' })
}

export default function FeatureCard({
  title,
  description,
  tags = [],
  targetId,
}) {
  return (
    <CardWrapper>
      <Typography variant="h2" align="center" color="accent.dark">
        {title}
      </Typography>
      <Typography variant="body" align="center" color="secondary.darkest">
        {description}
      </Typography>
      <TagContainer>
        {tags.map((tag) => (
          <Badge key={tag} label={tag} variant="secondary" />
        ))}
      </TagContainer>
      <ButtonContainer>
        <Button
          variant="primary"
          size="small"
          onClick={() => scrollToSection(targetId)}
        >
          Zum Projekt
        </Button>
      </ButtonContainer>
    </CardWrapper>
  )
}
