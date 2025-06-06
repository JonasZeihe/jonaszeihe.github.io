const createGradient = (color1, color2, angle = 135) =>
  `linear-gradient(${angle}deg, ${color1}, ${color2})`

const createSubtleGradient = (color1, middleColor, color2, angle = 127) =>
  `linear-gradient(${angle}deg, ${color1} 0%, ${color1} 10%, ${middleColor} 10%, ${middleColor} 90%, ${color2} 90%, ${color2} 100%)`

const generateSubtleVariants = (baseGradients, theme) =>
  Object.entries(baseGradients).reduce((acc, [key, gradient]) => {
    const matches = gradient.match(/#[0-9a-fA-F]{6}|rgba?\([^)]*\)/g)
    if (matches && matches.length === 2) {
      acc[`${key}.subtle`] = createSubtleGradient(
        matches[0],
        theme.colors.depth.light,
        matches[1]
      )
    }
    return acc
  }, {})

const gradients = ({ colors }) => {
  const isDark = colors.neutral.ultraLight === '#1A1A1A' // Hacky but effective check

  const pageBackground = isDark
    ? createGradient(colors.depth.ultraLight, colors.depth.main, 180)
    : createGradient(
        colors.primary.ultraLight,
        colors.secondary.ultraLight,
        180
      )

  const baseGradients = {
    // === Base Page Background ===
    pageBackground,

    // === Primary ===
    primaryLight: createGradient(colors.primary.light, colors.primary.main),
    primaryDark: createGradient(colors.primary.dark, colors.primary.main),
    primaryDynamic: createGradient(colors.primary.light, colors.secondary.main),

    // === Secondary ===
    secondarySoft: createGradient(
      colors.secondary.lightest,
      colors.secondary.light
    ),
    secondaryBold: createGradient(colors.secondary.dark, colors.secondary.main),
    secondaryDynamic: createGradient(colors.secondary.main, colors.accent.main),

    // === Accent ===
    accentSoft: createGradient(colors.accent.light, colors.accent.main),
    accentStrong: createGradient(colors.accent.main, colors.accent.dark),
    accentDynamic: createGradient(colors.accent.main, colors.highlight.main),

    // === Highlight ===
    highlightSoft: createGradient(
      colors.highlight.lightest,
      colors.highlight.main
    ),
    highlightDramatic: createGradient(
      colors.highlight.dark,
      colors.highlight.main
    ),
    highlightToPrimary: createGradient(
      colors.highlight.main,
      colors.primary.main
    ),

    // === Warm Tones ===
    warmGlow: createGradient(
      colors.secondaryHighlight.light,
      colors.accent.main
    ),
    warmBold: createGradient(
      colors.secondaryHighlight.dark,
      colors.secondaryHighlight.darkest
    ),

    // === Cross Palette ===
    primaryToSecondary: createGradient(
      colors.primary.main,
      colors.secondary.main
    ),
    secondaryToAccent: createGradient(
      colors.secondary.dark,
      colors.accent.main
    ),
    accentToPrimary: createGradient(colors.accent.main, colors.primary.dark),

    // === Depth + Mood ===
    depthSubtle: createGradient(colors.depth.light, colors.depth.main, 160),
    depthFocus: createGradient(colors.depth.main, colors.depth.dark, 180),
    depthMystic: createGradient(colors.depth.main, colors.accent.dark, 145),

    // === Neutral UI ===
    neutralSoft: createGradient(colors.neutral.light, colors.neutral.main),
    neutralFocus: createGradient(colors.neutral.dark, colors.neutral.darkest),
  }

  const subtleVariants = generateSubtleVariants(baseGradients, { colors })

  return {
    ...baseGradients,
    ...subtleVariants,
  }
}

export default gradients
