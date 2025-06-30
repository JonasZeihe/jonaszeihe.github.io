// src/components/layout/MeshGradientBackground.js
import React, { useRef, useEffect } from 'react'
import styled, { useTheme } from 'styled-components'

function MeshGradientBackground() {
  const theme = useTheme()
  const canvasRef = useRef(null)

  useEffect(() => {
    const colorKeys = [
      theme.colors.primary[2],
      theme.colors.secondary.main,
      theme.colors.accent[4],
      theme.colors.primary.main,
      theme.colors.accent[2],
    ].filter(Boolean)

    const numPoints = Math.max(4, Math.min(colorKeys.length, 7))
    const points = []
    for (let i = 0; i < numPoints; i += 1) {
      points.push({
        x: Math.random(),
        y: Math.random(),
        dx: (Math.random() - 0.5) * 0.09,
        dy: (Math.random() - 0.5) * 0.09,
        color: colorKeys[i % colorKeys.length],
        r: 0.29 + 0.09 * Math.random(),
        dr: (Math.random() - 0.5) * 0.015,
      })
    }

    let width = window.innerWidth
    let height = window.innerHeight
    let running = true

    function resize() {
      width = window.innerWidth
      height = window.innerHeight
      if (canvasRef.current) {
        canvasRef.current.width = width
        canvasRef.current.height = height
      }
    }
    resize()
    window.addEventListener('resize', resize)

    function animate() {
      const ctx = canvasRef.current && canvasRef.current.getContext('2d')
      if (!ctx || !running) return
      ctx.clearRect(0, 0, width, height)

      const meshAlpha = theme.mode === 'dark' ? 0.33 : 0.42
      for (let i = 0; i < points.length; i += 1) {
        const p = points[i]
        p.x += p.dx * 0.008
        p.y += p.dy * 0.008
        p.r += p.dr * 0.004
        if (p.x < 0.08 || p.x > 0.92) p.dx *= -1
        if (p.y < 0.09 || p.y > 0.91) p.dy *= -1
        if (p.r < 0.22 || p.r > 0.44) p.dr *= -1
        const cx = width * (0.08 + 0.84 * p.x)
        const cy = height * (0.06 + 0.88 * p.y)
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, width * p.r)
        grad.addColorStop(0, `${p.color}${theme.mode === 'dark' ? 'B0' : 'D8'}`)
        grad.addColorStop(1, `${p.color}00`)
        ctx.globalAlpha = meshAlpha
        ctx.beginPath()
        ctx.arc(cx, cy, width * p.r, 0, 2 * Math.PI)
        ctx.closePath()
        ctx.fillStyle = grad
        ctx.fill()
      }
      ctx.globalAlpha = 1
      requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
    return function cleanup() {
      running = false
      window.removeEventListener('resize', resize)
    }
  }, [theme])

  return <BackgroundCanvas ref={canvasRef} aria-hidden="true" />
}

const BackgroundCanvas = styled.canvas`
  position: fixed;
  inset: 0;
  width: 100vw !important;
  height: 100vh !important;
  z-index: -1;
  pointer-events: none;
  filter: blur(38px) brightness(1.06) contrast(1.08) saturate(1.09);
  opacity: ${({ theme }) => (theme.mode === 'dark' ? 0.65 : 0.82)};
  transition: opacity 0.45s;
  user-select: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    filter: blur(24px) brightness(1.03) contrast(1.04) saturate(1.05);
    opacity: ${({ theme }) => (theme.mode === 'dark' ? 0.54 : 0.62)};
  }
`

export default MeshGradientBackground
