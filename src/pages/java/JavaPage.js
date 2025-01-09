// JavaPage.js
import React from 'react';
import JavaIntroduction from './JavaIntrodution';
import loadProjects from '../../utils/ProjectLoader';
import HoneycombGrid from '../../components/honeycomb/HoneycombGrid';

// Projekte dynamisch laden
const projects = loadProjects(require.context('./projects', false, /\.js$/));

export default function JavaPage() {
  return (
    <>
      {/* Einführung */}
      <JavaIntroduction />

      {/* Dynamische Projekte in HoneycombGrid */}
      <HoneycombGrid>
        {projects.map(({ name, component: ProjectComponent }) => (
          <ProjectComponent key={name} />
        ))}
      </HoneycombGrid>
    </>
  );
}
