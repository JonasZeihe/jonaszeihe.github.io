import React from 'react';
import styled from 'styled-components';
import PythonIntroduction from './PythonIntroduction';
import loadProjects from '../../utils/ProjectLoader';

// Dynamisch Projekte laden
const projects = loadProjects(require.context('./projects', false, /\.js$/));

export default function PythonPage() {
  return (
    <PageContainer>
      {/* Einführung */}
      <PythonIntroduction />

      {/* Dynamische Projekte */}
      {projects.map(({ component: ProjectComponent }) => (
        <ProjectComponent />
      ))}
    </PageContainer>
  );
}

// Styled Components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;
