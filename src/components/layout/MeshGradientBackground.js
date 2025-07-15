import React, { useRef, useEffect } from 'react'
import styled, { useTheme } from 'styled-components'
import initMeshEngine from './meshEngine'
import visualProfile from './visualProfile'

function MeshGradientBackground() {
  const ref = useRef(null)
  const theme = useTheme()
  const profile = visualProfile(theme?.mode)

  useEffect(() => {
    const stop = initMeshEngine(
      ref.current,
      theme?.mode,
      theme?.gradients?.meshPalette || []
    )
    return () => stop?.()
  }, [theme.mode, theme.gradients?.meshPalette])

  return <Canvas ref={ref} profile={profile} aria-hidden />
}

const Canvas = styled.canvas`
  position: fixed;
  inset: 0;
  width: 100vw !important;
  height: 100vh !important;
  z-index: -1;
  pointer-events: none;
  user-select: none;
  transition: opacity 0.4s ease;
  opacity: ${({ profile }) => profile.opacity};
  filter: blur(${({ profile }) => profile.blur}px)
    brightness(${({ profile }) => profile.brightness})
    contrast(${({ profile }) => profile.contrast})
    saturate(${({ profile }) => profile.saturation});
  mix-blend-mode: ${({ theme }) =>
    theme.mode === 'dark' ? 'screen' : 'overlay'};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    filter: blur(${({ profile }) => Math.round(profile.blur * 0.6)}px)
      brightness(${({ profile }) => profile.brightness * 0.96})
      contrast(${({ profile }) => profile.contrast * 0.96})
      saturate(${({ profile }) => profile.saturation * 0.96});
    opacity: ${({ profile }) => profile.opacity * 0.8};
  }
`

export default MeshGradientBackground
