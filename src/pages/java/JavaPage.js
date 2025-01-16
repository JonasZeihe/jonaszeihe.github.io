import React from 'react';
import JavaIntroduction from './JavaIntrodution';
import loadProjects from '../../utils/ProjectLoader';
import CardGrid from '../../components/layout/CardGrid';
import { SectionWrapper } from '../../utils/sharedComponents';

const projects = loadProjects(require.context('./projects', false, /\.js$/));

export default function JavaPage() {
  return (
    <SectionWrapper backgroundColor="neutral.lightest">
      <JavaIntroduction />
      <CardGrid>
        {projects.map(({ name, component: ProjectComponent }) => (
          <ProjectComponent key={name} id={name} />
        ))}
      </CardGrid>
    </SectionWrapper>
  );
}
