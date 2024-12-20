// src/pages/PythonProjects.js
import React from 'react';
import styled from 'styled-components';
import HeroWrapper from '../components/Wrapper/HeroWrapper';
import SectionWrapper from '../components/Wrapper/SectionWrapper';
import QuoteComponent from '../components/sections/QuoteComponent';
import Card from '../components/data-display/Card';
import ListComponent from '../components/data-display/ListComponent';
import Typography from '../styles/Typography';

// Assets
import NoctuaLogo from '../assets/images/Projects/noctua_logo.png';
import SkryperLogo from '../assets/images/Projects/skryper_logo.png';
import StructraLogo from '../assets/images/Projects/structra_logo.png';
import InkGridLogo from '../assets/images/Projects/inkgrid_logo.png';

// Projekt-Daten
const projects = [
  {
    id: 'noctua',
    title: '🔧 Noctua – Systeminformationen mit Struktur',
    description: `Noctua liefert umfassende Hardwareberichte, ohne kompliziert zu sein.`,
    features: [
      '🛠️ Flexibilität durch Auswahl: CPU, GPU, BIOS, und mehr',
      '📄 Markdown-Export für klare Berichte',
      '💡 Benutzerfreundliche GUI mit Logging-Option',
      '🔌 Erweiterbare Modularität für neue Hardwarekomponenten',
    ],
    image: NoctuaLogo,
    buttons: [
      {
        label: 'Mehr erfahren',
        variant: 'primary',
      },
      {
        label: 'Download',
        variant: 'success',
      },
    ],
  },
  {
    id: 'skryper',
    title: '📂 Skryper – Ordnung im Chaos',
    description: `Skryper analysiert Verzeichnisstrukturen bis ins Detail und dokumentiert sie präzise.`,
    features: [
      '🔍 Verzeichnisscan mit intelligenter Filterung',
      '⚙️ Anpassbare Konfiguration',
      '📋 Logging nach Bedarf',
      '✅ Hohe Testabdeckung: 94%',
    ],
    image: SkryperLogo,
    buttons: [
      {
        label: 'Mehr erfahren',
        variant: 'primary',
      },
      {
        label: 'GitHub',
        variant: 'secondary',
      },
    ],
  },
  {
    id: 'structra',
    title: '🏭 Structra – Struktur, wie sie sein soll',
    description: `Structra erstellt Verzeichnisse und Dateien exakt nach Vorgabe.`,
    features: [
      '🚀 Effiziente Generierung kompletter Projektstrukturen',
      '🎯 Drag-and-Drop-Unterstützung',
      '📂 Projektvorlagen für schnelles Aufsetzen neuer Projekte',
      '✅ Hohe Testabdeckung: 90%',
    ],
    image: StructraLogo,
    buttons: [
      {
        label: 'Mehr erfahren',
        variant: 'primary',
      },
      {
        label: 'Video ansehen',
        variant: 'warning',
      },
    ],
  },
  {
    id: 'inkgrid',
    title: '🎨 InkGrid – Farben mit Struktur',
    description: `InkGrid organisiert Farbpaletten und generiert strukturierte SVG-Dateien.`,
    features: [
      '🌈 Automatisierte SVG-Erstellung mit Gruppierungen',
      '🖌️ Flexible Vorlagen für Farben, Gruppen und Hierarchien',
      '🌗 Optimiert für Light/Dark-Modus',
    ],
    image: InkGridLogo,
    buttons: [
      {
        label: 'Mehr erfahren',
        variant: 'primary',
      },
      {
        label: 'Design-Tool öffnen',
        variant: 'success',
      },
    ],
  },
];

export default function PythonProjects() {
  return (
    <PageContainer>
      {/* Hero-Bereich */}
      <HeroWrapper gradient="primaryToSecondary">
        <QuoteComponent
          text="Python-Projekte – Klarheit und Präzision. 🐍"
          author="Jonas Zeihe"
        />
      </HeroWrapper>

      {/* Projekte */}
      {projects.map((project) => (
        <SectionWrapper key={project.id}>
          <ProjectContainer>
            {/* Card mit Bild */}
            <Card
              title={project.title}
              media={[
                {
                  type: 'image',
                  src: project.image,
                  alt: `${project.title} Logo`,
                },
              ]}
              description={project.description}
              buttons={project.buttons}
            />
            {/* Features-Liste */}
            <FeaturesContainer>
              <Typography variant="h3" align="center">
                Key Features ✨
              </Typography>
              <ListComponent
                items={project.features.map((feature, index) => ({
                  id: `${project.id}-feature-${index}`,
                  content: feature,
                }))}
              />
            </FeaturesContainer>
          </ProjectContainer>
        </SectionWrapper>
      ))}

      {/* Abschluss */}
      <SectionWrapper>
        <QuoteComponent
          text="Tools für die Zukunft. Präzise. Effizient. Zeitgemäß. 🚀"
          author="Jonas Zeihe"
        />
      </SectionWrapper>
    </PageContainer>
  );
}

// Styled Components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing(5)};
  }
`;

const FeaturesContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(3)};
  max-width: 500px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: center;
    text-align: center;
  }
`;
