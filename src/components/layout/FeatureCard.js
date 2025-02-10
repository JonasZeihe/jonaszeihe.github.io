import React from 'react'
import styled from 'styled-components'
import { Button, Typography } from '../../utils/sharedComponents'
import BadgeGrid from '../common/BadgeGrid'

const CardWrapper = styled.div`
  background: ${({ theme, gradient }) =>
    theme.gradients[gradient] || theme.gradients.secondaryLight};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing(3)};
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
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

export default function FeatureCard({
  title,
  description,
  badges = [],
  targetId,
  gradient,
}) {
  return (
    <CardWrapper gradient={gradient}>
      <ContentWrapper>
        <Typography variant="h2" align="center" color="primary.main">
          {title}
        </Typography>
        <Typography variant="body" align="center" color="depth.dark">
          {description}
        </Typography>
        <BadgeGrid badges={badges} />
      </ContentWrapper>
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
