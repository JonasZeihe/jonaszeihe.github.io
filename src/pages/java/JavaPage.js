import React from 'react';
import JavaIntroduction from './JavaIntrodution';
import loadProjects from '../../utils/ProjectLoader';
import HoneycombGrid from '../../components/honeycomb/HoneycombGrid';
import getHoneycombVariants from '../../utils/HoneycombVariantManager';

const projects = loadProjects(require.context('./projects', false, /\.js$/));

export default function JavaPage() {
  const isMobile = window.innerWidth <= 768;
  const variants = getHoneycombVariants(projects.length, isMobile);

  return (
    <>
      <JavaIntroduction />
      <HoneycombGrid items={projects.length}>
        {projects.map(({ name, component: ProjectComponent }, index) => {
          const variant = variants[index] || 'variant1';
          return <ProjectComponent key={name} variant={variant} />;
        })}
      </HoneycombGrid>
    </>
  );
}
