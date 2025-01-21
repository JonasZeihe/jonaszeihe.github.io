import React from 'react'
import ReactIntroduction from './ReactIntroduction'
import loadProjects from '../../utils/ProjectLoader'
import CardGrid from '../../components/layout/CardGrid'

// Projekte dynamisch laden
const projects = loadProjects(require.context('./projects', false, /\.js$/))

export default function ReactPage() {
  return (
    <>
      {/* Einführung */}
      <ReactIntroduction />

      {/* Projekte in Grid */}
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
