import { useEffect, useRef } from 'react'
import styled, { useTheme } from 'styled-components'
import initMeshEngine from './meshEngine'
import visualProfile from './visualProfile'

function MeshGradientBackground() {
  const canvasRef = useRef(null)
  const theme = useTheme()

  useEffect(() => {
    const palette = theme?.gradients?.meshPalette || []
    const mode = theme?.mode || 'light'
    const canvas = canvasRef.current
    const stop = initMeshEngine(canvas, mode, palette)
    return () => {
      if (stop) stop()
    }
  }, [theme.mode, theme.gradients?.meshPalette])

  const profile = visualProfile(theme?.mode)

  return <Canvas ref={canvasRef} profile={profile} aria-hidden />
}

const Canvas = styled.canvas`
  position: fixed;
  inset: 0;
  width: 100vw !important;
  height: 100vh !important;
  z-index: -1;
  pointer-events: none;
  user-select: none;
  transition: opacity 0.45s;
  opacity: ${({ profile }) => profile.opacity};
  filter: blur(${({ profile }) => profile.blur}px)
    brightness(${({ profile }) => profile.brightness})
    contrast(${({ profile }) => profile.contrast})
    saturate(${({ profile }) => profile.saturation});
  mix-blend-mode: ${({ theme }) =>
    theme.mode === 'dark' ? 'screen' : 'overlay'};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    filter: blur(${({ profile }) => Math.round(profile.blur * 0.6)}px)
      brightness(${({ profile }) => profile.brightness * 0.98})
      contrast(${({ profile }) => profile.contrast * 0.98})
      saturate(${({ profile }) => profile.saturation * 0.98});
    opacity: ${({ profile }) => profile.opacity * 0.82};
  }
`

export default MeshGradientBackground
