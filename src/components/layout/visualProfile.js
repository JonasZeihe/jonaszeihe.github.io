const visualProfile = (mode = 'light') =>
  mode === 'dark'
    ? {
        blur: 22,
        opacity: 0.67,
        meshAlpha: 0.34,
        saturation: 1.08,
        contrast: 1.1,
        brightness: 1.03,
        alphaHex: 'b4',
      }
    : {
        blur: 36,
        opacity: 0.82,
        meshAlpha: 0.43,
        saturation: 1.15,
        contrast: 1.12,
        brightness: 1.04,
        alphaHex: 'cc',
      }

export default visualProfile
