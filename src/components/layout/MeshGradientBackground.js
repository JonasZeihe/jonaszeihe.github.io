import React from 'react'
import styled, { keyframes, useTheme } from 'styled-components'

function MeshGradientBackground() {
  const theme = useTheme()

  if (!theme.backgroundBlobs || !Array.isArray(theme.backgroundBlobs))
    return null

  return (
    <BackgroundContainer>
      {theme.backgroundBlobs.map((blob) => (
        <Blob
          key={`blob-${blob.color}-${blob.size}`}
          $color={blob.color}
          $size={blob.size}
          $delay={blob.delay}
          style={blob.position}
        />
      ))}
    </BackgroundContainer>
  )
}

const move = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(8%, -6%) scale(1.05); }
`

const BackgroundContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
`

const Blob = styled.div`
  position: absolute;
  width: ${({ $size }) => $size || '40vw'};
  height: ${({ $size }) => $size || '40vw'};
  background: ${({ theme, $color }) => {
    const [key, shade = 'main'] = $color.split('.')
    return theme.colors[key]?.[shade] || theme.colors.primary.main
  }};
  filter: blur(140px);
  opacity: 0.35;
  border-radius: 45% 55% 50% 50% / 60% 40% 60% 40%;
  animation: ${move} 50s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay || '0s'};
`

export default MeshGradientBackground
