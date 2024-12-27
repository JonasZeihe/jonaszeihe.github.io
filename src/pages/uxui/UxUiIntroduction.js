import React from 'react';
import styled from 'styled-components';
import HeroWrapper from '../../components/Wrapper/HeroWrapper';
import QuoteComponent from '../../components/sections/QuoteComponent';
import Typography from '../../styles/Typography';
import Badge from '../../components/common/Badge';

const ContentWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing(4)};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.spacing(3)};
`;

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
    <HeroWrapper gradient="warmSoft">
      {/* Zitat-Komponente */}
      <QuoteComponent text="UX/UI-Design – Schaffe Erlebnisse, die Menschen begeistern." />

      {/* Zusätzlicher Inhalt */}
      <ContentWrapper>
        <Typography variant="h2">
          Von nutzerzentrierter Forschung bis hin zu interaktiven Prototypen
          UX/UI-Design ist der Schlüssel zu erfolgreichen digitalen Produkten.
          Entdecke meine Projekte, die zeigen, wie Design den Unterschied macht.
        </Typography>
        <BadgeContainer>
          {badges.map(({ label, icon, variant }) => (
            <Badge key={label} label={label} icon={icon} variant={variant} />
          ))}
        </BadgeContainer>
      </ContentWrapper>
    </HeroWrapper>
  );
}
