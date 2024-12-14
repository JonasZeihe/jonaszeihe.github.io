const createGradient = (color1, color2, angle = 135) =>
  `linear-gradient(${angle}deg, ${color1}, ${color2})`;

const gradients = (theme) => ({
  // Primary Palette (Erzeugt mehr Tiefe)
  primaryLight: createGradient(
    theme.colors.primary.lightest,
    theme.colors.primary.main
  ),
  primaryDark: createGradient(
    theme.colors.primary.dark,
    theme.colors.primary.darkest
  ),
  primaryDynamic: createGradient(
    theme.colors.primary.light,
    theme.colors.secondary.lightest
  ),

  // Secondary Palette (Energie durch Orange)
  secondaryWarm: createGradient(
    theme.colors.secondary.lightest,
    theme.colors.secondary.main
  ),
  secondaryBold: createGradient(
    theme.colors.secondary.main,
    theme.colors.primary.dark
  ),
  secondaryDynamic: createGradient(
    theme.colors.secondary.light,
    theme.colors.accent.main
  ),

  // Accent Palette (Spielerisch und frisch)
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

  // Background Gradients (Subtilität und Textur)
  backgroundSubtle: createGradient(
    theme.colors.background.lightest,
    theme.colors.neutral.light,
    180
  ),
  backgroundDramatic: createGradient(
    theme.colors.background.dark,
    theme.colors.primary.darkest,
    180
  ),
  backgroundVibrant: createGradient(
    theme.colors.background.main,
    theme.colors.secondary.main
  ),

  // Neutral Gradients (Zeitlos und ruhig)
  neutralSoft: createGradient(
    theme.colors.neutral.light,
    theme.colors.neutral.medium
  ),
  neutralLight: createGradient(
    theme.colors.neutral.white,
    theme.colors.neutral.white
  ),
  neutralStrong: createGradient(
    theme.colors.neutral.dark,
    theme.colors.neutral.black
  ),
});

export default gradients;
