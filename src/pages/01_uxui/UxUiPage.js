import React from 'react'
import UxUiIntroduction from './UxUiIntroduction'

import loadProjects from '../../utils/ProjectLoader'
import CardGrid from '../../components/layout/CardGrid'

const projects = loadProjects(require.context('./projects', false, /\.js$/))

export default function UxUiPage() {
  return (
    <>
      <UxUiIntroduction />
      <CardGrid>
        <div>
          {projects.map(({ name, component: ProjectComponent }) => (
            <ProjectComponent key={name} id={name} />
          ))}
        </div>
      </CardGrid>
    </>
  )
}
