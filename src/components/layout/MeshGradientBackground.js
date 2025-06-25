import React, { useEffect } from 'react'
import styled, { useTheme } from 'styled-components'

export default function MeshGradientBackground() {
  const theme = useTheme()
  const blobs = theme.backgroundBlobs || []

  useEffect(() => {
    const updateOffset = () => {
      const offset = window.scrollY * 0.03
      document.documentElement.style.setProperty(
        '--gradient-offset',
        `${offset}px`
      )
    }

    updateOffset()
    window.addEventListener('scroll', updateOffset)
    return () => window.removeEventListener('scroll', updateOffset)
  }, [])

  const gradients = blobs.map((blob) => {
    const [key, shade = 'main'] = blob.color.split('.')
    const color = theme.colors[key]?.[shade] || theme.colors.primary.main
    const position = `${blob.position?.left || '50%'} calc(${blob.position?.top || '50%'} + var(--gradient-offset, 0px))`
    return `radial-gradient(circle at ${position}, ${color} 0%, transparent 70%)`
  })

  return <GradientLayer $gradient={gradients.join(', ')} />
}

const GradientLayer = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background: ${({ $gradient }) => $gradient};
  background-blend-mode: screen;
  filter: blur(100px);
  will-change: transform;
  transition: background 0.5s ease;
`
