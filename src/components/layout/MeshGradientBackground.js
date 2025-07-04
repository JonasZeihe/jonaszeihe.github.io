import React, { useRef, useEffect } from 'react'
import styled, { useTheme } from 'styled-components'

function MeshGradientBackground() {
  const theme = useTheme()
  const canvasRef = useRef(null)
  const anim = useRef()
  const pointsRef = useRef([])

  useEffect(() => {
    const palette = theme?.gradients?.meshPalette || []
    if (!palette.length) return () => {}

    let dpr = window.devicePixelRatio || 1
    let w = window.innerWidth
    let h = window.innerHeight

    const createPoints = () =>
      Array.from(
        { length: Math.max(4, Math.min(palette.length, 7)) },
        (_, i) => ({
          x: Math.random(),
          y: Math.random(),
          dx: (Math.random() - 0.5) * 0.1,
          dy: (Math.random() - 0.5) * 0.1,
          color: palette[i % palette.length],
          r: 0.27 + 0.13 * Math.random(),
          dr: (Math.random() - 0.5) * 0.017,
        })
      )

    pointsRef.current = createPoints()

    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      dpr = window.devicePixelRatio || 1
      const c = canvasRef.current
      if (c) {
        c.width = Math.round(w * dpr)
        c.height = Math.round(h * dpr)
        c.style.width = `${w}px`
        c.style.height = `${h}px`
      }
    }

    resize()
    window.addEventListener('resize', resize)

    let active = true

    const alphaHex = theme.mode === 'dark' ? 'b4' : 'cc'
    const meshAlpha = theme.mode === 'dark' ? 0.34 : 0.43

    const frame = () => {
      const c = canvasRef.current
      if (!c || !active) return
      const ctx = c.getContext('2d')
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.clearRect(0, 0, c.width, c.height)
      ctx.save()
      ctx.scale(dpr, dpr)

      for (let i = 0, len = pointsRef.current.length; i < len; i += 1) {
        const p = pointsRef.current[i]
        p.x += p.dx * 0.008
        p.y += p.dy * 0.008
        p.r += p.dr * 0.004
        if (p.x < 0.06 || p.x > 0.94) p.dx *= -1
        if (p.y < 0.07 || p.y > 0.93) p.dy *= -1
        if (p.r < 0.21 || p.r > 0.47) p.dr *= -1

        const cx = w * (0.08 + 0.84 * p.x)
        const cy = h * (0.06 + 0.88 * p.y)
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, w * p.r)
        grad.addColorStop(0, `${p.color}${alphaHex}`)
        grad.addColorStop(1, `${p.color}00`)
        ctx.globalAlpha = meshAlpha
        ctx.beginPath()
        ctx.arc(cx, cy, w * p.r, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fillStyle = grad
        ctx.fill()
      }

      ctx.restore()
      anim.current = requestAnimationFrame(frame)
    }

    anim.current = requestAnimationFrame(frame)

    return () => {
      active = false
      window.removeEventListener('resize', resize)
      if (anim.current) cancelAnimationFrame(anim.current)
    }
  }, [theme.mode, theme.gradients?.meshPalette])

  return <Canvas ref={canvasRef} aria-hidden />
}

const Canvas = styled.canvas`
  position: fixed;
  inset: 0;
  width: 100vw !important;
  height: 100vh !important;
  z-index: -1;
  pointer-events: none;
  mix-blend-mode: ${({ theme }) =>
    theme.mode === 'dark' ? 'screen' : 'overlay'};
  filter: blur(36px) brightness(1.04) contrast(1.12) saturate(1.15);
  opacity: ${({ theme }) => (theme.mode === 'dark' ? 0.67 : 0.82)};
  transition: opacity 0.45s;
  user-select: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    filter: blur(22px) brightness(1.02) contrast(1.1) saturate(1.12);
    opacity: ${({ theme }) => (theme.mode === 'dark' ? 0.53 : 0.66)};
  }
`

export default MeshGradientBackground
