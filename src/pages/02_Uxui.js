import React from 'react';
import styled from 'styled-components';
import Wrapper from '../components/layout/Wrapper';
import Typography from '../styles/Typography';
import Card from '../components/data-display/Card';

// Styled Components for enhanced layout and visuals
const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing(8)} 0;
  background: ${({ theme }) => theme.gradients.primaryToSecondary};
  color: ${({ theme }) => theme.colors.neutral.white};
`;

const ProjectsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing(6)};
  padding: ${({ theme }) => theme.spacing(8)} ${({ theme }) => theme.spacing(4)};
`;

const ProjectSection = styled.section`
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

// UXUIDesignPage Component
function UXUIDesignPage() {
  return (
    <Wrapper backgroundColor="neutral.white">
      {/* Hero Section */}
      <HeroSection>
        <Typography variant="h1" color="neutral.white">
          UX/UI Design Projekte
        </Typography>
        <Typography variant="body" color="neutral.light">
          Eine Sammlung meiner besten Arbeiten aus UX/UI Design und React Apps.
        </Typography>
      </HeroSection>

      {/* Project Sections */}
      <ProjectsContainer>
        {/* Project 1: KIM */}
        <ProjectSection>
          <ProjectText>
            <Typography variant="h2" color="primary.main">
              Case Study: KIM
            </Typography>
            <Typography variant="body" color="neutral.dark">
              Eine vollständige React App zur Darstellung meines
              Capstone-Projekts. Enthält einen klickbaren Figma-Prototypen und
              ein Designsystem mit Desktop- und Mobile-Optimierung.
            </Typography>
          </ProjectText>
          <CardContainer>
            <Card
              title="KIM: UX/UI Fullstack Projekt"
              media={[
                {
                  type: 'image',
                  src: '/images/kim-thumbnail.jpg',
                  alt: 'KIM Projekt Thumbnail',
                },
              ]}
              description="Komplett entwickelte React App zur Fallstudie."
              buttons={[
                {
                  label: 'Mehr erfahren',
                  onClick: () =>
                    window.open('https://link-to-case-study', '_blank'),
                },
                {
                  label: 'Figma Prototyp',
                  onClick: () => window.open('https://link-to-figma', '_blank'),
                },
              ]}
            />
          </CardContainer>
        </ProjectSection>

        {/* Project 2: FlavorFusion */}
        <ProjectSection>
          <CardContainer>
            <Card
              title="FlavorFusion: AI Aided Design"
              media={[
                {
                  type: 'image',
                  src: '/images/flavorfusion-thumbnail.jpg',
                  alt: 'FlavorFusion Thumbnail',
                },
              ]}
              description="Landingpage Design mit modernsten UX/UI Ansätzen und AI-Unterstützung."
              buttons={[
                {
                  label: 'Case Study ansehen',
                  onClick: () =>
                    window.open('https://link-to-flavorfusion', '_blank'),
                },
              ]}
            />
          </CardContainer>
          <ProjectText>
            <Typography variant="h2" color="primary.main">
              Case Study: FlavorFusion
            </Typography>
            <Typography variant="body" color="neutral.dark">
              Eine beeindruckende Landingpage mit AI-gestütztem Designprozess
              und detaillierter Fallstudie.
            </Typography>
          </ProjectText>
        </ProjectSection>
      </ProjectsContainer>
    </Wrapper>
  );
}

export default UXUIDesignPage;
