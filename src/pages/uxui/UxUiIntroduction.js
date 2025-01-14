import React from 'react';
import styled from 'styled-components';
import {
  HeroWrapper,
  SectionWrapper,
  Typography,
  HighlightText,
  Badge,
} from '../../utils/sharedComponents';

const BadgeContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap;
`;

export default function UxUiIntroduction() {
  const badges = [
    { label: 'UX/UI Design', icon: 'FaPalette', variant: 'primary' },
    { label: 'Figma & FigJam', icon: 'FaFigma', variant: 'success' },
    { label: 'User Research', icon: 'FaUserFriends', variant: 'accent' },
    { label: 'Prototyping', icon: 'FaDraftingCompass', variant: 'secondary' },
  ];

  return (
    <>
      {/* Hero-Bereich */}
      <HeroWrapper gradient="depthSubtle">
        <Typography variant="h1" align="center" color="primary.dark">
          🌟 UX/UI Projekte
        </Typography>
        <Typography variant="h2" align="center" color="neutral.main">
          <HighlightText>Erlebe Design</HighlightText>, das begeistert und{' '}
          <HighlightText>technologisch überzeugt</HighlightText>. Meine
          UX/UI-Projekte verschmelzen kreative Konzepte mit modernster Technik.
        </Typography>
      </HeroWrapper>

      {/* Projekteinführung */}
      <SectionWrapper backgroundColor="neutral.lightest">
        <Typography variant="h2" align="center" color="primary.dark">
          Von <HighlightText>nutzerzentrierter Forschung</HighlightText> bis hin
          zu <HighlightText>interaktiven Prototypen</HighlightText>
        </Typography>
        <Typography variant="body" align="center" color="neutral.main">
          Mit einem Fokus auf intuitive Benutzererlebnisse und
          visuell-ansprechende Interfaces bringe ich kreative Visionen in die
          Realität. Entdecke, wie meine Projekte{' '}
          <HighlightText>Design und Technologie</HighlightText> harmonisch
          vereinen.
        </Typography>
        <BadgeContainer>
          {badges.map(({ label, icon, variant }) => (
            <Badge key={label} label={label} icon={icon} variant={variant} />
          ))}
        </BadgeContainer>
      </SectionWrapper>
    </>
  );
}
