const createGradient = (from, to, angle = 135) =>
  `linear-gradient(${angle}deg, ${from}, ${to})`

const gradients = ({ colors }, mode = 'light') => {
  if (
    !colors ||
    !colors.primary ||
    !colors.depth ||
    !colors.accent ||
    !colors.highlight ||
    !colors.neutral ||
    !colors.secondary
  ) {
    console.warn(
      'Missing color definitions in theme. Gradient generation skipped.'
    )
    return {}
  }

  const bg =
    mode === 'dark'
      ? colors.depth.ultraLight || '#000000'
      : colors.primary.ultraLight || '#ffffff'

  return {
    backgroundPrimary: createGradient(bg, colors.primary.main),
    backgroundAccent: createGradient(bg, colors.accent.main),
    backgroundDepth: createGradient(colors.depth.light, colors.depth.dark, 180),

    buttonPrimary: createGradient(colors.primary.light, colors.primary.main),
    buttonAccent: createGradient(colors.accent.light, colors.accent.main),

    highlight: createGradient(colors.highlight.light, colors.highlight.main),
    focus: createGradient(colors.accent.main, colors.highlight.main),
    danger: createGradient(colors.accent.dark, colors.accent.main),
    info: createGradient(colors.secondary.main, colors.secondary.light),

    dividerSoft: createGradient(colors.neutral.light, colors.neutral.main),
    dividerHard: createGradient(colors.neutral.dark, colors.neutral.darkest),
  }
}

export default gradients
