import React, { useRef, useEffect } from 'react'
import styled, { useTheme } from 'styled-components'

function MeshGradientBackground() {
  const theme = useTheme()
  const canvasRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    let dpr = window.devicePixelRatio || 1
    let width = window.innerWidth
    let height = window.innerHeight

    const colorKeys = [
      theme?.colors?.primary?.[2] || '#7faaff',
      theme?.colors?.secondary?.main || '#68e0cf',
      theme?.colors?.accent?.[4] || '#ffe17f',
      theme?.colors?.primary?.main || '#3daee9',
      theme?.colors?.accent?.[2] || '#d48cff',
    ].filter(Boolean)

    const numPoints = Math.max(4, Math.min(colorKeys.length, 7))
    const points = []
    for (let i = 0; i < numPoints; i += 1) {
      points.push({
        x: Math.random(),
        y: Math.random(),
        dx: (Math.random() - 0.5) * 0.1,
        dy: (Math.random() - 0.5) * 0.1,
        color: colorKeys[i % colorKeys.length],
        r: 0.27 + 0.13 * Math.random(),
        dr: (Math.random() - 0.5) * 0.017,
      })
    }

    function resize() {
      width = window.innerWidth
      height = window.innerHeight
      dpr = window.devicePixelRatio || 1
      if (canvasRef.current) {
        canvasRef.current.width = Math.round(width * dpr)
        canvasRef.current.height = Math.round(height * dpr)
        canvasRef.current.style.width = `${width}px`
        canvasRef.current.style.height = `${height}px`
      }
    }
    resize()
    window.addEventListener('resize', resize)

    let running = true
    function animate() {
      const canvas = canvasRef.current
      if (!canvas || !running) return
      const ctx = canvas.getContext('2d')
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.save()
      ctx.scale(dpr, dpr)

      const meshAlpha = theme?.mode === 'dark' ? 0.34 : 0.43
      for (let i = 0; i < points.length; i += 1) {
        const p = points[i]
        p.x += p.dx * 0.008
        p.y += p.dy * 0.008
        p.r += p.dr * 0.004
        if (p.x < 0.06 || p.x > 0.94) p.dx *= -1
        if (p.y < 0.07 || p.y > 0.93) p.dy *= -1
        if (p.r < 0.21 || p.r > 0.47) p.dr *= -1
        const cx = width * (0.08 + 0.84 * p.x)
        const cy = height * (0.06 + 0.88 * p.y)
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, width * p.r)
        grad.addColorStop(
          0,
          `${p.color}${theme?.mode === 'dark' ? 'b4' : 'dd'}`
        )
        grad.addColorStop(1, `${p.color}00`)
        ctx.globalAlpha = meshAlpha
        ctx.beginPath()
        ctx.arc(cx, cy, width * p.r, 0, 2 * Math.PI)
        ctx.closePath()
        ctx.fillStyle = grad
        ctx.fill()
      }
      ctx.globalAlpha = 1
      ctx.restore()
      animationRef.current = requestAnimationFrame(animate)
    }
    animationRef.current = requestAnimationFrame(animate)
    return () => {
      running = false
      window.removeEventListener('resize', resize)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
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
  opacity: ${({ theme }) => (theme.mode === 'dark' ? 0.67 : 0.82)};
  transition: opacity 0.45s;
  user-select: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    filter: blur(22px) brightness(1.02) contrast(1.04) saturate(1.05);
    opacity: ${({ theme }) => (theme.mode === 'dark' ? 0.53 : 0.62)};
  }
`

export default MeshGradientBackground
