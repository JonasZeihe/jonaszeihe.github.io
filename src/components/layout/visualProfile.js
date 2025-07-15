const visualProfile = (mode) =>
  mode === 'dark'
    ? {
        blur: 26,
        opacity: 0.6,
        saturation: 1.06,
        contrast: 1.1,
        brightness: 1.02,
        alphaHex: 'b4',
      }
    : {
        blur: 36,
        opacity: 0.78,
        saturation: 1.12,
        contrast: 1.08,
        brightness: 1.04,
        alphaHex: 'cc',
      }

export default visualProfile
