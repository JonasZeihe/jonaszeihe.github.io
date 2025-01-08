import React from 'react';
import JavaIntroduction from './JavaIntrodution';
import loadProjects from '../../utils/ProjectLoader';
import HoneycombGrid from '../../components/honeycomb/HoneycombGrid';

// Dynamisches Laden der Projekte
const projects = loadProjects(require.context('./projects', false, /\.js$/));

export default function JavaPage() {
  return (
    <>
      {/* Einführung */}
      <JavaIntroduction />

      {/* Dynamische Projekte im HoneycombGrid */}
      <HoneycombGrid
        items={projects.map(({ name, component: ProjectComponent }) => ({
          id: name,
          component: <ProjectComponent key={name} />,
        }))}
      />
    </>
  );
}
