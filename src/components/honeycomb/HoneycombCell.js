import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Badge, Typography, Button } from '../../utils/sharedComponents';
import HoneycombWrapper from './HoneycombWrapper';

// Cluster-Styled Wrapper
const ClusterWrapper = styled.div`
  position: relative;
  width: 600px; /* Gesamtgröße des Clusters */
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 320px;
    height: 320px;
  }
`;

// Positionierte Waben
const TitleCell = styled(HoneycombWrapper)`
  position: absolute;
  top: -15%; /* Abstand nach oben */
  left: 20%;
  transform: translate(-50%, 0);
  z-index: 3;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    top: -80px;
    width: 140px;
    height: 160px;
  }
`;

const MainCell = styled(HoneycombWrapper)`
  position: relative; /* Hauptwabe bleibt zentral */
  z-index: 2;
`;

const ButtonCell = styled(HoneycombWrapper)`
  position: absolute;
  width: 180px;
  height: 200px;

  &.left {
    bottom: -5%;
    left: -3%;
    transform: translate(0, 0);
  }

  &.left {
    bottom: -5%;
    left: -3%;
    transform: translate(0, 0);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none; /* Buttons ausblenden auf mobilen Geräten */
  }
`;

// Bild-Overlay
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
    opacity: 0.1;
    background-color: ${({ theme }) => theme.colors.neutral.light};
  }
`;

// Badges und Content
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

const ContentWrapper = styled.div`
  margin-top: ${({ theme }) =>
    theme.spacing(4)}; /* Abstand zur Spitze der Wabe */

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
`;

export default function HoneycombCell({ project, onOpen }) {
  const handleCellClick = () => {
    onOpen();
  };

  return (
    <ClusterWrapper>
      {/* Titel-Wabe */}
      <TitleCell size="small" position="title">
        <Typography variant="h3" color="primary.main" align="center">
          {project.name}
        </Typography>
      </TitleCell>

      {/* Hauptwabe */}
      <MainCell size="large" position="main" onClick={handleCellClick}>
        <ContentWrapper>
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

          <Typography variant="body" color="neutral.main" align="center">
            {project.description}
          </Typography>
        </ContentWrapper>
      </MainCell>

      {/* Linke Button-Wabe */}
      <ButtonCell size="small" position="button1" className="left">
        <Button variant="primary" onClick={handleCellClick}>
          Projekt ansehen
        </Button>
      </ButtonCell>

      {/* Rechte Button-Wabe */}
      <ButtonCell size="small" position="button2" className="right">
        <Button
          variant="secondary"
          onClick={() => window.open(project.githubLink, '_blank')}
        >
          GitHub
        </Button>
      </ButtonCell>
    </ClusterWrapper>
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
