import React from 'react';
import UxUiIntroduction from './UxUiIntroduction';
import loadProjects from '../../utils/ProjectLoader';
import CardGrid from '../../components/layout/CardGrid';

// Dynamisches Laden der Projekte
const projects = loadProjects(require.context('./projects', false, /\.js$/));

export default function UxUiPage() {
  return (
    <>
      {/* Einführung */}
      <UxUiIntroduction />

      {/* Projekte in Grid */}
      <CardGrid>
        {projects.map(({ name, component: ProjectComponent }) => (
          <ProjectComponent key={name} />
        ))}
      </CardGrid>
    </>
  );
}
