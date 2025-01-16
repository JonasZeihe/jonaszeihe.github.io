// PythonPage.js
import React from 'react';
import PythonIntroduction from './PythonIntroduction';
import loadProjects from '../../utils/ProjectLoader';
import CardGrid from '../../components/layout/CardGrid';
import { SectionWrapper } from '../../utils/sharedComponents';

// Projekte dynamisch laden
const projects = loadProjects(require.context('./projects', false, /\.js$/));

export default function PythonPage() {
  return (
    <SectionWrapper backgroundColor="neutral.lightest">
      {/* Einführung */}
      <PythonIntroduction />

      {/* Projekte in Grid */}
      <CardGrid>
        {projects.map(({ name, component: ProjectComponent }) => (
          <ProjectComponent key={name} id={name} />
        ))}
      </CardGrid>
    </SectionWrapper>
  );
}
