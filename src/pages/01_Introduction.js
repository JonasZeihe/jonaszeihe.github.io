import React from 'react';
import styled from 'styled-components';
import HeroWrapper from '../components/Wrapper/HeroWrapper';
import ContentWrapper from '../components/Wrapper/ContentWrapper';
import QuoteComponent from '../components/sections/QuoteComponent';
import Typography from '../styles/Typography';

export default function Introduction() {
  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroWrapper gradient="primaryToSecondary">
        <QuoteComponent
          text="Design trifft Funktion – Willkommen in meinem Portfolio!"
          author="Jonas Zeihe"
        />
      </HeroWrapper>

      {/* Introduction Section */}
      <ContentWrapper>
        <Typography variant="body" color="neutral.dark" align="center">
          Ich bin ein Fullstack Designer mit einem Faible für intuitive Designs
          und skalierbare Lösungen. Willkommen in meinem digitalen Schaufenster,
          das meine Leidenschaft für Entwicklung und Design vereint.
        </Typography>
      </ContentWrapper>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
`;
