// PythonPage.js
import React from 'react';
import PythonIntroduction from './PythonIntroduction';
import loadProjects from '../../utils/ProjectLoader';
import HoneycombGrid from '../../components/honeycomb/HoneycombGrid';
import getHoneycombVariants from '../../utils/HoneycombVariantManager';
// Projekte dynamisch laden
const projects = loadProjects(require.context('./projects', false, /\.js$/));

export default function PythonPage() {
  const isMobile = window.innerWidth <= 768;
  const variants = getHoneycombVariants(projects.length, isMobile);

  return (
    <>
      <PythonIntroduction />

      {/* Projekte in Grid */}
      <HoneycombGrid items={projects.length}>
        {projects.map(({ name, component: ProjectComponent }, index) => {
          const variant = variants[index] || 'variant1';
          return <ProjectComponent key={name} variant={variant} />;
        })}
      </HoneycombGrid>
    </>
  );
}
