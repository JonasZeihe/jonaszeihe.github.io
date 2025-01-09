import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Badge, Typography } from '../../utils/sharedComponents';
import HoneycombWrapper from './HoneycombWrapper';

// Styled Components
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    justify-content: center; /* Inhalte zentrieren für mobile Geräte */
  }
`;

const TitleAndDescription = styled.div`
  margin-top: ${({ theme }) =>
    theme.spacing(4)}; /* Abstand zur Spitze der Wabe */
  text-align: center;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: 0; /* Zentriert auf mobilen Geräten */
  }
`;

const ImageOverlayWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.1; /* Weißer Schleier über dem Bild */
    background-color: ${({ theme }) => theme.colors.neutral.light};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    opacity: 0.4; /* Weißer Schleier über dem Bild */
  }
`;

const BadgeContainer = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(0.5)};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none; /* Badges ausblenden auf mobilen Geräten */
  }
`;

export default function HoneycombCell({ project, onOpen }) {
  const handleCellClick = () => {
    onOpen();
  };

  return (
    <HoneycombWrapper onClick={handleCellClick}>
      <ContentWrapper>
        {/* Titel und Beschreibung */}
        <TitleAndDescription>
          <Typography variant="h1" color="primary.main" align="center">
            {project.name}
          </Typography>
          <Typography variant="body" color="neutral.main" align="center">
            {project.description}
          </Typography>
        </TitleAndDescription>

        {/* Bild mit Overlay */}
        <ImageOverlayWrapper src={project.image}>
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
        </ImageOverlayWrapper>
      </ContentWrapper>
    </HoneycombWrapper>
  );
}

HoneycombCell.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    badges: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        icon: PropTypes.string,
        variant: PropTypes.string,
      })
    ).isRequired,
    githubLink: PropTypes.string,
  }).isRequired,
  onOpen: PropTypes.func.isRequired,
};
