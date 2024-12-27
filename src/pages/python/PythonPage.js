// PythonPage.js
import React from 'react';
import PythonIntroduction from './PythonIntroduction';
import loadProjects from '../../utils/ProjectLoader';

// Projekte dynamisch laden
const projects = loadProjects(require.context('./projects', false, /\.js$/));

export default function PythonPage() {
  return (
    <>
      {/* Einführung */}
      <PythonIntroduction />

      {/* Dynamische Projekte */}
      {projects.map(({ name, component: ProjectComponent }) => (
        <section id={name} key={name} style={{ scrollMarginTop: '80px' }}>
          <ProjectComponent />
        </section>
      ))}
    </>
  );
}
