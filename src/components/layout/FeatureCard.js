import React from 'react'
import styled from 'styled-components'
import {
  Button,
  Typography,
  ButtonGrid,
  CardWrapper,
} from '../../utils/sharedComponents'
import BadgeGrid from '../common/BadgeGrid'

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;

  /* Optimierung für mobile Geräte */
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing(1)};
  }
`

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function FeatureCard({
  title,
  description,
  badges = [],
  targetId,
  gradient,
  buttonText = 'Mehr erfahren',
  buttonBackground,
}) {
  return (
    <CardWrapper gradient={gradient}>
      <ContentWrapper>
        <Typography variant="h2" color="secondary.dark" align="center">
          {title}
        </Typography>
        <Typography variant="body" color="depth.dark" align="center">
          {description}
        </Typography>
        <BadgeGrid badges={badges} />
      </ContentWrapper>
      <ButtonGrid>
        <Button
          buttonBackground={buttonBackground}
          onClick={() => scrollToSection(targetId)}
        >
          {buttonText}
        </Button>
      </ButtonGrid>
    </CardWrapper>
  )
}
