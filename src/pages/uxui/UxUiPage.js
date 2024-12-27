import React from 'react';
import UxUiIntroduction from './UxUiIntroduction';
import loadProjects from '../../utils/ProjectLoader';

// Dynamisches Laden der Projekte
const projects = loadProjects(require.context('./projects', false, /\.js$/));

export default function UxUiPage() {
  return (
    <>
      {/* Einleitung */}
      <UxUiIntroduction />

      {/* Dynamisch geladene Projekte */}
      {projects.map(({ name, component: ProjectComponent }) => (
        <section id={name} key={name} style={{ scrollMarginTop: '80px' }}>
          <ProjectComponent />
        </section>
      ))}
    </>
  );
}
