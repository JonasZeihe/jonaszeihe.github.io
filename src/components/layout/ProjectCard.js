import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Badge, Typography, Button } from '../../utils/sharedComponents';
import CardWrapper from '../Wrapper/CardWrapper';

// Styled Components
const ImageWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  img {
    width: 100%;
    height: auto;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: ${({ theme }) => theme.boxShadow.light};
    transition: transform 0.3s ease;
  }
`;

const ContentWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing(2)};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing(1)};
  }
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  margin: ${({ theme }) => theme.spacing(1)} 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing(0.5)};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(3)};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(1)};
  }
`;

export default function ProjectCard({ project, onOpen }) {
  const handleCardClick = () => {
    onOpen();
  };

  const handleOpenButtonClick = (e) => {
    e.stopPropagation();
    onOpen();
  };

  const handleSecondButtonClick = (e) => {
    e.stopPropagation();
    if (project.githubLink) {
      window.open(project.githubLink, '_blank');
    }
  };

  return (
    <CardWrapper onClick={handleCardClick}>
      <ImageWrapper>
        <img src={project.image} alt={project.name} />
      </ImageWrapper>
      <ContentWrapper>
        <Typography variant="h3" align="center" color="primary.main">
          {project.name}
        </Typography>
        <Typography variant="body" align="center" color="neutral.main">
          {project.description}
        </Typography>
        <BadgeContainer>
          {project.badges.map((badge) => (
            <Badge
              key={badge.label}
              label={badge.label}
              icon={badge.icon}
              variant={badge.variant}
            />
          ))}
        </BadgeContainer>
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
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    badges: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        variant: PropTypes.string.isRequired,
      })
    ).isRequired,
    githubLink: PropTypes.string,
  }).isRequired,
  onOpen: PropTypes.func.isRequired,
};
