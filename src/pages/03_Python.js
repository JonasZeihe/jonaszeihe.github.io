import React from 'react';
import styled from 'styled-components';
import Wrapper from '../components/layout/Wrapper';
import Typography from '../styles/Typography';
import Card from '../components/data-display/Card';

// Styled Components
const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing(8)} 0;
  background: ${({ theme }) => theme.gradients.accentBright};
  color: ${({ theme }) => theme.colors.neutral.white};
`;

const ProjectsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing(6)};
  padding: ${({ theme }) => theme.spacing(8)} ${({ theme }) => theme.spacing(4)};
`;

const ProjectSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => theme.spacing(6)} 0;
`;

const ProjectText = styled.div`
  flex: 1 1 45%;
`;

const CardContainer = styled.div`
  flex: 1 1 45%;
`;

// PythonProjectsPage Component
function PythonProjectsPage() {
  return (
    <Wrapper backgroundColor="neutral.white">
      {/* Hero Section */}
      <HeroSection>
        <Typography variant="h1" color="neutral.white">
          Python Projekte
        </Typography>
        <Typography variant="body" color="neutral.light">
          Eine Sammlung meiner besten Python-Projekte – innovativ, effizient und
          universell einsetzbar.
        </Typography>
      </HeroSection>

      {/* Projects Grid */}
      <ProjectsContainer>
        {/* Project 1: Noctua */}
        <ProjectSection>
          <ProjectText>
            <Typography variant="h2" color="primary.main">
              Noctua
            </Typography>
            <Typography variant="body" color="neutral.dark">
              Ein KI-gestütztes Python-Tool mit MIT-Lizenz, das universelle
              Unterstützung für Entwickler bietet.
            </Typography>
          </ProjectText>
          <CardContainer>
            <Card
              title="Noctua"
              media={[
                {
                  type: 'image',
                  src: '/images/noctua-thumbnail.jpg',
                  alt: 'Noctua Thumbnail',
                },
              ]}
              description="Ein professionelles Python-Tool mit hoher Testabdeckung."
              buttons={[
                {
                  label: 'Repository ansehen',
                  onClick: () =>
                    window.open('https://link-to-noctua', '_blank'),
                },
              ]}
            />
          </CardContainer>
        </ProjectSection>

        {/* Project 2: Skryper */}
        <ProjectSection>
          <CardContainer>
            <Card
              title="Skryper"
              media={[
                {
                  type: 'image',
                  src: '/images/skryper-thumbnail.jpg',
                  alt: 'Skryper Thumbnail',
                },
              ]}
              description="Ein Python-Skript zur Automatisierung und Organisation von Entwicklungsprozessen."
              buttons={[
                {
                  label: 'Repository ansehen',
                  onClick: () =>
                    window.open('https://link-to-skryper', '_blank'),
                },
              ]}
            />
          </CardContainer>
          <ProjectText>
            <Typography variant="h2" color="primary.main">
              Skryper
            </Typography>
            <Typography variant="body" color="neutral.dark">
              Entwickelt für maximale Effizienz und Code-Qualität. Ein
              unverzichtbares Tool für jeden Entwickler.
            </Typography>
          </ProjectText>
        </ProjectSection>

        {/* Project 3: Structra */}
        <ProjectSection>
          <ProjectText>
            <Typography variant="h2" color="primary.main">
              Structra
            </Typography>
            <Typography variant="body" color="neutral.dark">
              Ein universelles Python-Template für Projekte mit hoher
              Testabdeckung und hervorragender Projektstruktur.
            </Typography>
          </ProjectText>
          <CardContainer>
            <Card
              title="Structra"
              media={[
                {
                  type: 'image',
                  src: '/images/structra-thumbnail.jpg',
                  alt: 'Structra Thumbnail',
                },
              ]}
              description="Perfekt für Entwickler, die auf saubere, testbare Strukturen setzen."
              buttons={[
                {
                  label: 'Repository ansehen',
                  onClick: () =>
                    window.open('https://link-to-structra', '_blank'),
                },
              ]}
            />
          </CardContainer>
        </ProjectSection>
      </ProjectsContainer>
    </Wrapper>
  );
}

export default PythonProjectsPage;
