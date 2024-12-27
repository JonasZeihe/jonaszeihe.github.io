import React from 'react';
import styled from 'styled-components';
import {
  HeroWrapper,
  QuoteComponent,
  Typography,
} from '../../utils/sharedComponents';

export default function PythonIntroduction() {
  return (
    <IntroductionContainer>
      <HeroWrapper gradient="primaryToSecondary">
        <QuoteComponent
          text="Python-Projekte – Klarheit und Präzision. 🐍"
          author="Jonas Zeihe"
        />
      </HeroWrapper>
      <IntroductionContent>
        <Typography variant="body" align="center" color="neutral.dark">
          Willkommen bei meinen Python-Projekten! Hier findest du innovative und
          effiziente Lösungen, die mit Liebe zum Detail und einem klaren Fokus
          auf Skalierbarkeit entwickelt wurden.
        </Typography>
      </IntroductionContent>
    </IntroductionContainer>
  );
}

const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;

const IntroductionContent = styled.div`
  padding: ${({ theme }) => theme.spacing(3)};
  background: ${({ theme }) => theme.colors.neutral.lightest};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.boxShadow.light};
  max-width: 800px;
  margin: 0 auto;
`;
