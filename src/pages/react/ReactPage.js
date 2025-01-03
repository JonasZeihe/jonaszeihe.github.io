import React from 'react';
import ReactIntroduction from './ReactIntroduction';
import loadProjects from '../../utils/ProjectLoader';

// Projekte dynamisch laden
const projects = loadProjects(require.context('./projects', false, /\.js$/));

export default function ReactPage() {
  return (
    <>
      {/* Einführung */}
      <ReactIntroduction />

      {/* Dynamische Projekte */}
      {projects.map(({ name, component: ProjectComponent }) => (
        <section id={name} key={name} style={{ scrollMarginTop: '80px' }}>
          <ProjectComponent />
        </section>
      ))}
    </>
  );
}
