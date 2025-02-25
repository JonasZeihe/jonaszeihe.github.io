import React from 'react'
import JavaIntroduction from './JavaIntrodution'
import loadProjects from '../../utils/ProjectLoader'
import CardGrid from '../../components/layout/CardGrid'

const projects = loadProjects(require.context('./projects', false, /\.js$/))

export default function JavaPage() {
  return (
    <>
      <JavaIntroduction />
      <CardGrid>
        {projects.map(({ name, component: ProjectComponent }) => (
          <div key={name} id={name} style={{ scrollMarginTop: '80px' }}>
            <ProjectComponent />
          </div>
        ))}
      </CardGrid>
    </>
  )
}
