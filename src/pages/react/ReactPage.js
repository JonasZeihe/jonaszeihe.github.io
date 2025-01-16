import React from 'react';
import ReactIntroduction from './ReactIntroduction';
import loadProjects from '../../utils/ProjectLoader';
import { SectionWrapper } from '../../utils/sharedComponents';

import CardGrid from '../../components/layout/CardGrid';

// Projekte dynamisch laden
const projects = loadProjects(require.context('./projects', false, /\.js$/));

export default function ReactPage() {
  return (
    <SectionWrapper backgroundColor="neutral.lightest">
      {/* Einführung */}
      <ReactIntroduction />

      {/* Projekte in Grid */}
      <CardGrid>
        {projects.map(({ name, component: ProjectComponent }) => (
          <ProjectComponent key={name} id={name} />
        ))}
      </CardGrid>
    </SectionWrapper>
  );
}
