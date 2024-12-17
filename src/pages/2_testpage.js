import React from 'react';
import styled from 'styled-components';
import Wrapper from '../components/layout/Wrapper';
import Card from '../components/data-display/Card';
import Typography from '../styles/Typography';

// Styled Components
const PageContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(2)};
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
`;

const HeaderSection = styled(Wrapper)`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing(4)};
`;

// Function Declaration as required by ESLint
function PortfolioPage() {
  const projects = [
    {
      id: 'project-alpha',
      title: 'Projekt Alpha',
      media: [
        {
          type: 'image',
          src: '/images/project-alpha.jpg',
          alt: 'Projekt Alpha',
        },
      ],
      description:
        'Ein revolutionäres Projekt, das modernste Technologien nutzt, um die Welt zu verändern.',
      buttons: [
        {
          label: 'Case Study anzeigen',
        },
        {
          label: 'Projekt besuchen',
        },
      ],
    },
    {
      id: 'project-beta',
      title: 'Projekt Beta',
      media: [
        { type: 'image', src: '/images/project-beta.jpg', alt: 'Projekt Beta' },
      ],
      description:
        'Ein innovatives Design-Projekt mit einem Fokus auf Nachhaltigkeit und Ästhetik.',
      buttons: [
        {
          label: 'Case Study anzeigen',
        },
        {
          label: 'Projekt besuchen',
        },
      ],
    },
    {
      id: 'project-gamma',
      title: 'Projekt Gamma',
      media: [
        {
          type: 'image',
          src: '/images/project-gamma.jpg',
          alt: 'Projekt Gamma',
        },
      ],
      description:
        'Eine bahnbrechende App, die das Nutzererlebnis auf ein neues Level hebt.',
      buttons: [
        {
          label: 'Case Study anzeigen',
        },
        {
          label: 'Projekt besuchen',
        },
      ],
    },
  ];

  return (
    <PageContainer>
      {/* Header Section */}
      <HeaderSection gradient="primaryToSecondary">
        <Typography variant="h1" color="neutral.white">
          Mein Portfolio
        </Typography>
        <Typography variant="body" color="neutral.light">
          Hier finden Sie eine Auswahl meiner besten Projekte. Klicken Sie auf
          eine Karte, um mehr Details zu erfahren.
        </Typography>
      </HeaderSection>

      {/* Projects Grid */}
      <Grid>
        {projects.map((project) => (
          <Card
            key={project.id} // Verwenden einer eindeutigen ID als Key
            title={project.title}
            media={project.media}
            description={project.description}
            buttons={project.buttons}
          />
        ))}
      </Grid>
    </PageContainer>
  );
}

export default PortfolioPage;
