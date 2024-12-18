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
  background: ${({ theme }) => theme.gradients.primaryDynamic};
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

// JavaFullstackProjectsPage Component
function JavaFullstackProjectsPage() {
  return (
    <Wrapper backgroundColor="neutral.white">
      {/* Hero Section */}
      <HeroSection>
        <Typography variant="h1" color="neutral.white">
          Java Fullstack Projekte
        </Typography>
        <Typography variant="body" color="neutral.light">
          Tauchen Sie ein in komplexe Fullstack-Projekte mit React Frontend,
          Java Backend und modernster CI/CD-Infrastruktur.
        </Typography>
      </HeroSection>

      {/* Projects Grid */}
      <ProjectsContainer>
        {/* Project 1: Shizen */}
        <ProjectSection>
          <ProjectText>
            <Typography variant="h2" color="primary.main">
              Shizen
            </Typography>
            <Typography variant="body" color="neutral.dark">
              Ein umfassendes Java Fullstack-Projekt mit React-Frontend,
              Spring-Backend und MongoDB-Datenbank. Komplette CI/CD-Integration
              und Hosting über Docker und Render.
            </Typography>
          </ProjectText>
          <CardContainer>
            <Card
              title="Shizen"
              media={[
                {
                  type: 'image',
                  src: '/images/shizen-thumbnail.jpg',
                  alt: 'Shizen Thumbnail',
                },
              ]}
              description="Das Flaggschiff meiner Java Fullstack Entwicklung."
              buttons={[
                {
                  label: 'Projekt Präsentation anfragen',
                },
              ]}
            />
          </CardContainer>
        </ProjectSection>

        {/* Project 2: Ninjjin */}
        <ProjectSection>
          <CardContainer>
            <Card
              title="Ninjjin"
              media={[
                {
                  type: 'image',
                  src: '/images/ninjjin-thumbnail.jpg',
                  alt: 'Ninjjin Thumbnail',
                },
              ]}
              description="Der Vorgänger von Shizen, ein einfacher Fullstack-Ansatz nach 3 Monaten Bootcamp."
              buttons={[
                {
                  label: 'Mehr über Ninjjin erfahren',
                  onClick: () =>
                    window.open('https://link-to-ninjjin', '_blank'),
                },
              ]}
            />
          </CardContainer>
          <ProjectText>
            <Typography variant="h2" color="primary.main">
              Ninjjin
            </Typography>
            <Typography variant="body" color="neutral.dark">
              Dieses Projekt zeigt den Entwicklungsprozess und den Übergang zu
              komplexeren Technologien, wie sie in Shizen umgesetzt wurden.
            </Typography>
          </ProjectText>
        </ProjectSection>
      </ProjectsContainer>
    </Wrapper>
  );
}

export default JavaFullstackProjectsPage;
