const createGradient = (color1, color2, angle = 135) =>
  `linear-gradient(${angle}deg, ${color1}, ${color2})`

const createSubtleGradient = (color1, middleColor, color2, angle = 127) =>
  `linear-gradient(${angle}deg, ${color1} 0%, ${color1} 10%, ${middleColor} 10%, ${middleColor} 90%, ${color2} 90%, ${color2} 100%)`

const generateSubtleVariants = (baseGradients, theme) =>
  Object.entries(baseGradients).reduce((acc, [key, gradient]) => {
    const colors = gradient.match(/#[0-9a-fA-F]{6}|rgba?\([^)]*\)/g)
    if (colors && colors.length === 2) {
      acc[`${key}.subtle`] = createSubtleGradient(
        colors[0],
        theme.colors.neutral.ultraLight,
        colors[1]
      )
    }
    return acc
  }, {})

const gradients = (theme) => {
  const baseGradients = {
    // Primary Palette (Erzeugt mehr Tiefe)
    primaryLightest: createGradient(
      theme.colors.primary.lightest,
      theme.colors.primary.light
    ),
    primaryLight: createGradient(
      theme.colors.primary.lightest,
      theme.colors.primary.main
    ),
    primaryDark: createGradient(
      theme.colors.primary.dark,
      theme.colors.primary.main
    ),
    primaryDynamic: createGradient(
      theme.colors.primary.light,
      theme.colors.secondary.lightest
    ),

    // Secondary Palette (Erzeugt Kontraste)
    secondaryLight: createGradient(
      theme.colors.secondary.lightest,
      theme.colors.secondary.light
    ),
    secondaryWarm: createGradient(
      theme.colors.secondary.lightest,
      theme.colors.secondary.main
    ),
    secondaryBold: createGradient(
      theme.colors.secondary.dark,
      theme.colors.secondary.darkest
    ),
    secondaryDynamic: createGradient(
      theme.colors.secondary.light,
      theme.colors.accent.main
    ),

    // Accent Palette (Spielerisch und Frisch)
    accentSoft: createGradient(
      theme.colors.accent.lightest,
      theme.colors.accent.main
    ),
    accentBright: createGradient(
      theme.colors.accent.main,
      theme.colors.accent.dark
    ),
    accentPlayful: createGradient(
      theme.colors.accent.light,
      theme.colors.secondary.main
    ),

    // Highlight Palette (Auffallend und Lebendig)
    highlightSoft: createGradient(
      theme.colors.highlight.lightest,
      theme.colors.highlight.main
    ),
    highlightBright: createGradient(
      theme.colors.highlight.light,
      theme.colors.highlight.main
    ),
    highlightDynamic: createGradient(
      theme.colors.highlight.light,
      theme.colors.primary.main
    ),

    // Warm Palette (Sanfte Wärme)
    warmSoft: createGradient(
      theme.colors.secondaryHighlight.lightest,
      theme.colors.secondaryHighlight.main
    ),
    warmBold: createGradient(
      theme.colors.secondaryHighlight.dark,
      theme.colors.secondaryHighlight.darkest
    ),
    warmDynamic: createGradient(
      theme.colors.secondaryHighlight.light,
      theme.colors.accent.main
    ),

    // Cross-Palette (Kreativer Kontrast)
    primaryToSecondary: createGradient(
      theme.colors.primary.main,
      theme.colors.secondary.main
    ),
    secondaryToAccent: createGradient(
      theme.colors.secondary.dark,
      theme.colors.accent.main
    ),
    accentToPrimary: createGradient(
      theme.colors.accent.light,
      theme.colors.primary.dark
    ),
    depthToHighlight: createGradient(
      theme.colors.highlight.dark,
      theme.colors.depth.main
    ),

    // Neutral Gradients (Subtilität und Ausgewogenheit)
    neutralSoft: createGradient(
      theme.colors.neutral.light,
      theme.colors.neutral.main
    ),
    neutralStrong: createGradient(
      theme.colors.neutral.dark,
      theme.colors.neutral.darkest
    ),

    // Depth Gradients (Subtil und Dunkel)
    depthSubtle: createGradient(
      theme.colors.depth.lightest,
      theme.colors.depth.light,
      180
    ),
    depthDramatic: createGradient(
      theme.colors.depth.main,
      theme.colors.depth.dark,
      180
    ),
    depthVibrant: createGradient(
      theme.colors.depth.main,
      theme.colors.accent.main
    ),
  }

  const subtleVariants = generateSubtleVariants(baseGradients, theme)

  return { ...baseGradients, ...subtleVariants }
}

export default gradients
