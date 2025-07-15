const createBlob = (color, radius, alphaHex, dpr) => {
  const size = Math.ceil(radius * 2 * dpr)
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size

  const ctx = canvas.getContext('2d')
  const r = size / 2
  const gradient = ctx.createRadialGradient(r, r, 0, r, r, r)

  gradient.addColorStop(0, `${color}${alphaHex}`)
  gradient.addColorStop(1, `${color}00`)

  ctx.fillStyle = gradient
  ctx.beginPath()
  ctx.arc(r, r, r, 0, Math.PI * 2)
  ctx.fill()

  return canvas
}

const initMeshEngine = (canvasElement, mode = 'light', palette = []) => {
  if (!canvasElement || palette.length === 0) return undefined

  const canvas = canvasElement
  const ctx = canvas.getContext('2d')
  const dpr = window.devicePixelRatio || 1

  const alphaHex = mode === 'dark' ? 'b4' : 'cc'
  const alpha = mode === 'dark' ? 0.32 : 0.42

  const count = Math.min(8, palette.length)

  const xs = new Float32Array(count)
  const ys = new Float32Array(count)
  const rs = new Float32Array(count)
  const phases = new Float32Array(count)
  const depths = new Float32Array(count)
  const speeds = new Float32Array(count)
  const colors = palette.slice(0, count)
  const cache = new Map()

  let width = window.innerWidth
  let height = window.innerHeight
  let running = true
  let visible = document.visibilityState === 'visible'
  let { scrollY } = window

  const rand = () => Math.random()

  for (let i = 0; i < count; i += 1) {
    xs[i] = rand()
    ys[i] = rand()
    rs[i] = 0.2 + rand() * 0.15
    phases[i] = rand() * Math.PI * 2
    speeds[i] = 0.00002 + rand() * 0.00003
    depths[i] = 0.5 + rand() * 0.5
  }

  const resize = () => {
    width = window.innerWidth
    height = window.innerHeight

    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    cache.clear()
  }

  const round = (r) => Math.round(r / 12) * 12

  const getBlob = (color, radius) => {
    const key = `${color}-${round(radius)}`
    if (!cache.has(key)) {
      cache.set(key, createBlob(color, round(radius), alphaHex, dpr))
    }
    return cache.get(key)
  }

  const smooth = (t, offset = 0) =>
    Math.sin(t + offset) * 0.5 +
    Math.sin(t * 0.7 + offset * 0.3) * 0.3 +
    Math.sin(t * 0.3 + offset * 0.7) * 0.2

  const update = (time) => {
    ctx.clearRect(0, 0, width, height)
    ctx.globalAlpha = alpha

    for (let i = 0; i < count; i += 1) {
      const t = time * speeds[i]
      const offset = phases[i]

      const nx = smooth(t, offset)
      const ny = smooth(t, offset + 100)

      const radius = rs[i] * width
      const scrollOffset = (scrollY / height) * 0.1 * depths[i]
      const cx = width * (xs[i] + nx * 0.03)
      const cy = height * (ys[i] + ny * 0.03 + scrollOffset)

      ctx.drawImage(
        getBlob(colors[i], radius),
        cx - radius,
        cy - radius,
        radius * 2,
        radius * 2
      )
    }
  }

  const frame = (time) => {
    if (running && visible) update(time)
    requestAnimationFrame(frame)
  }

  const onScroll = () => {
    ;({ scrollY } = window)
  }

  const onVisibility = () => {
    visible = document.visibilityState === 'visible'
  }

  resize()
  requestAnimationFrame(frame)

  window.addEventListener('resize', resize, { passive: true })
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('visibilitychange', onVisibility, { passive: true })

  return () => {
    running = false
    window.removeEventListener('resize', resize)
    window.removeEventListener('scroll', onScroll)
    document.removeEventListener('visibilitychange', onVisibility)
  }
}

export default initMeshEngine
