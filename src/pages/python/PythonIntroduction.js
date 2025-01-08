import React from 'react';
import styled from 'styled-components';

import {
  HeroWrapper,
  SectionWrapper,
  Typography,
  HighlightText,
  Badge,
} from '../../utils/sharedComponents';

// Styled Grid für Badges
const BadgeGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(2)};
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(3)};
`;

export default function PythonIntroduction() {
  const coreFeatures = [
    {
      id: 'feature-1',
      label: 'Strukturierte Entwicklung',
      icon: 'FaFolderOpen',
      variant: 'secondary',
    },
    {
      id: 'feature-2',
      label: 'Effizienz',
      icon: 'FaBolt',
      variant: 'success',
    },
    {
      id: 'feature-3',
      label: 'Skalierbarkeit',
      icon: 'FaChartLine',
      variant: 'info',
    },
    {
      id: 'feature-4',
      label: 'AI-Unterstützung',
      icon: 'FaRobot',
      variant: 'accent',
    },
    {
      id: 'feature-5',
      label: 'Flexibilität',
      icon: 'FaTools',
      variant: 'warning',
    },
  ];

  return (
    <>
      {/* Hero-Bereich */}
      <HeroWrapper gradient="primaryLightest">
        <Typography variant="h1" align="center">
          🐍 Python-Projekte – Klarheit und Präzision
        </Typography>
      </HeroWrapper>

      {/* Einleitung */}
      <SectionWrapper backgroundColor="neutral.lightest">
        <Typography variant="h3" align="center">
          Hier findest du <HighlightText>innovative</HighlightText> und{' '}
          <HighlightText>effiziente</HighlightText> Lösungen, die mit Liebe zum
          Detail und einem klaren Fokus auf Skalierbarkeit entwickelt wurden.
          Python ermöglicht es mir, komplexe Probleme mit klaren, innovativen
          Lösungen zu lösen. Mein Ziel ist es, Werkzeuge zu schaffen, die
          <HighlightText> technische Exzellenz</HighlightText> und
          <HighlightText> Benutzerfreundlichkeit</HighlightText> vereinen,
          während sie gleichzeitig Prozesse optimieren und die Kreativität
          fördern.
        </Typography>

        {/* Kernmerkmale als Badges */}
        <Typography variant="h2" align="center">
          🚀 Kernmerkmale meiner Python-Projekte
        </Typography>
        <BadgeGrid>
          {coreFeatures.map((feature) => (
            <Badge
              key={feature.id}
              label={feature.label}
              icon={feature.icon}
              variant={feature.variant}
            />
          ))}
        </BadgeGrid>
      </SectionWrapper>
    </>
  );
}
