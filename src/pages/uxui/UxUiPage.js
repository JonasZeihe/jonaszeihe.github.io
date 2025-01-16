import React from 'react';
import UxUiIntroduction from './UxUiIntroduction';
import loadProjects from '../../utils/ProjectLoader';
import HoneycombGrid from '../../components/honeycomb/HoneycombGrid';
import getHoneycombVariants from '../../utils/HoneycombVariantManager';

// Dynamisches Laden der Projekte
const projects = loadProjects(require.context('./projects', false, /\.js$/));

export default function UxUiPage() {
  const isMobile = window.innerWidth <= 768;
  const variants = getHoneycombVariants(projects.length, isMobile);

  return (
    <>
      {/* Einführung */}
      <UxUiIntroduction />

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
