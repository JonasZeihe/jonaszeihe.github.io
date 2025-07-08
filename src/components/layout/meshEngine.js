const createBlob = (color, radius, alphaHex, dpr) => {
  const size = Math.ceil(radius * 2 * dpr)
  const cv = document.createElement('canvas')
  cv.width = size
  cv.height = size
  const ctx = cv.getContext('2d')
  const r = size / 2
  const g = ctx.createRadialGradient(r, r, 0, r, r, r)
  g.addColorStop(0, `${color}${alphaHex}`)
  g.addColorStop(1, `${color}00`)
  ctx.fillStyle = g
  ctx.beginPath()
  ctx.arc(r, r, r, 0, Math.PI * 2)
  ctx.fill()
  return cv
}

const initMeshEngine = (canvasElement, mode = 'light', palette = []) => {
  if (!canvasElement || palette.length === 0) return undefined

  const canvas = canvasElement
  const ctx = canvas.getContext('2d')
  const dpr = window.devicePixelRatio || 1
  const profile =
    mode === 'dark' ? { alpha: 0.34, hex: 'b4' } : { alpha: 0.43, hex: 'cc' }

  const blobCache = new Map()

  let w = window.innerWidth
  let h = window.innerHeight
  let running = true
  let visible = document.visibilityState === 'visible'
  let last = performance.now()

  const count = Math.max(4, Math.min(palette.length, 7))

  const xs = new Float32Array(count)
  const ys = new Float32Array(count)
  const vxs = new Float32Array(count)
  const vys = new Float32Array(count)
  const rs = new Float32Array(count)
  const vrs = new Float32Array(count)
  const depths = new Float32Array(count)
  const colors = new Array(count)

  const resize = () => {
    w = window.innerWidth
    h = window.innerHeight
    canvas.width = Math.round(w * dpr)
    canvas.height = Math.round(h * dpr)
    canvas.style.width = `${w}px`
    canvas.style.height = `${h}px`
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    blobCache.clear()
  }

  const rand = () => Math.random()
  const initPoints = () => {
    for (let i = 0; i < count; i += 1) {
      xs[i] = rand()
      ys[i] = rand()
      vxs[i] = (rand() - 0.5) * 0.07
      vys[i] = (rand() - 0.5) * 0.07
      rs[i] = 0.27 + 0.13 * rand()
      vrs[i] = (rand() - 0.5) * 0.012
      depths[i] = 0.5 + 0.5 * rand()
      colors[i] = palette[i % palette.length]
    }
  }

  const roundRadius = (r) => Math.round(r / 12) * 12
  const getBlob = (color, radius) => {
    const key = `${color}-${roundRadius(radius)}`
    if (!blobCache.has(key)) {
      blobCache.set(
        key,
        createBlob(color, roundRadius(radius), profile.hex, dpr)
      )
    }
    return blobCache.get(key)
  }

  const mouse = { x: 0.5, y: 0.5 }
  const target = { x: 0.5, y: 0.5 }

  const update = (dt) => {
    mouse.x += (target.x - mouse.x) * 0.09
    mouse.y += (target.y - mouse.y) * 0.09

    ctx.clearRect(0, 0, w, h)
    ctx.globalAlpha = profile.alpha

    for (let i = 0; i < count; i += 1) {
      let x = xs[i]
      let y = ys[i]
      let r = rs[i]
      let vx = vxs[i]
      let vy = vys[i]
      let vr = vrs[i]

      x += vx * dt * 0.00006
      y += vy * dt * 0.00006
      r += vr * dt * 0.00003

      if (x < 0.06 || x > 0.94) vx *= -1
      if (y < 0.07 || y > 0.93) vy *= -1
      if (r < 0.21 || r > 0.47) vr *= -1

      xs[i] = x
      ys[i] = y
      rs[i] = r
      vxs[i] = vx
      vys[i] = vy
      vrs[i] = vr

      const radius = w * r
      const px = (mouse.x - 0.5) * w * 0.04 * depths[i]
      const py = (mouse.y - 0.5) * h * 0.04 * depths[i]
      const cx = w * (0.08 + 0.84 * x) + px
      const cy = h * (0.06 + 0.88 * y) + py

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
    if (!running) return
    if (visible) {
      const dt = time - last
      last = time
      update(dt)
    }
    window.requestAnimationFrame(frame)
  }

  const move = (e) => {
    target.x = e.clientX / window.innerWidth
    target.y = e.clientY / window.innerHeight
  }

  const visibility = () => {
    visible = document.visibilityState === 'visible'
  }

  resize()
  initPoints()
  window.requestAnimationFrame(frame)

  window.addEventListener('resize', resize, { passive: true })
  window.addEventListener('pointermove', move, { passive: true })
  document.addEventListener('visibilitychange', visibility, { passive: true })

  return () => {
    running = false
    window.removeEventListener('resize', resize)
    window.removeEventListener('pointermove', move)
    document.removeEventListener('visibilitychange', visibility)
  }
}

export default initMeshEngine
