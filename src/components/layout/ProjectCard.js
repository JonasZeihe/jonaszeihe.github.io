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
  }
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  margin: ${({ theme }) => theme.spacing(2)} 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

/**
 * Optional: zusätzliche Styles für den Content,
 * damit bei Hover ein ansprechender Effekt sichtbar wird.
 */
const CardContent = styled.div`
  cursor: pointer; /* gesamter Card-Bereich als "klickbar" kennzeichnen */
  text-align: center;

  /* Optionaler Hover-Effekt – kann natürlich nach Wunsch angepasst werden */
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.boxShadow.medium};
  }
`;

export default function ProjectCard({ project, onOpen }) {
  // Diese Funktion wird aufgerufen, wenn man in den „freien“ Bereich der Card klickt
  const handleCardClick = () => {
    onOpen();
  };

  // Button-Klick für „Projekt ansehen“ – soll das Overlay öffnen, aber nicht
  // gleichzeitig den Card-Klick auslösen:
  const handleOpenButtonClick = (e) => {
    e.stopPropagation();
    onOpen();
  };

  // Beispielhafter zweiter Button: könnte GitHub-Link o. Ä. öffnen
  const handleSecondButtonClick = (e) => {
    e.stopPropagation();
    if (project.githubLink) {
      window.open(project.githubLink, '_blank');
    }
    // Oder eine andere Aktion, z. B. onPreview() usw.
  };

  return (
    <CardWrapper hoverEffect onClick={handleCardClick}>
      <CardContent>
        {/* Projektbild */}
        <ImageWrapper>
          <img src={project.image} alt={project.name} />
        </ImageWrapper>

        {/* Projektname */}
        <Typography variant="h3" align="center" color="primary.main">
          {project.name}
        </Typography>

        {/* Kurzbeschreibung */}
        <Typography variant="body" align="center" color="neutral.main">
          {project.description}
        </Typography>

        {/* Badges */}
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

        {/* Buttons */}
        <ButtonContainer>
          <Button variant="primary" onClick={handleOpenButtonClick}>
            Projekt ansehen
          </Button>
          <Button variant="secondary" onClick={handleSecondButtonClick}>
            {/* Beispiel: „GitHub“ oder „Prototyp“ */}
            GitHub
          </Button>
        </ButtonContainer>
      </CardContent>
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
    githubLink: PropTypes.string, // optional
  }).isRequired,
  onOpen: PropTypes.func.isRequired,
};
