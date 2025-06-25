import React from 'react'
import styled from 'styled-components'
import {
  Button,
  Typography,
  ButtonGrid,
  CardWrapper,
} from '../../utils/sharedComponents'
import BadgeGrid from '../common/BadgeGrid'

export default function FeatureCard({
  title = '',
  description = '',
  badges = [],
  targetId,
  gradient,
  buttonText = 'Mehr erfahren',
  buttonBackground,
}) {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <CardWrapper gradient={gradient}>
      <Inner>
        <Header>
          <Typography variant="h2" color="secondary.dark" align="center">
            {title}
          </Typography>
          <Typography variant="body" color="depth.dark" align="center">
            {description}
          </Typography>
        </Header>

        {badges.length > 0 && <BadgeGrid badges={badges} />}

        <ButtonGrid>
          <Button
            buttonBackground={buttonBackground}
            onClick={() => scrollToSection(targetId)}
          >
            {buttonText}
          </Button>
        </ButtonGrid>
      </Inner>
    </CardWrapper>
  )
}

const Inner = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  padding: ${({ theme }) => theme.spacing(2)};
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`
