// JavaPage.js
import React from 'react';
import JavaIntroduction from './JavaIntrodution';
import loadProjects from '../../utils/ProjectLoader';

// Projekte dynamisch laden
const projects = loadProjects(require.context('./projects', false, /\.js$/));

export default function JavaPage() {
  return (
    <>
      {/* Einführung */}
      <JavaIntroduction />

      {/* Dynamische Projekte */}
      {projects.map(({ name, component: ProjectComponent }) => (
        <section id={name} key={name} style={{ scrollMarginTop: '80px' }}>
          <ProjectComponent />
        </section>
      ))}
    </>
  );
}
