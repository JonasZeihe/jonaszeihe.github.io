// src/styles/Gradient.js

const createGradient = (from, to, angle = 135) =>
  `linear-gradient(${angle}deg, ${from}, ${to})`

const gradients = ({ colors }) => {
  const pick = (group, tone = 'main') =>
    colors[group]?.[tone] ||
    colors[group]?.main ||
    Object.values(colors[group] || {})[0] ||
    '#ccc'

  return {
    pageBackground: createGradient(pick('surface', 1), pick('surface', 2), 133),
    backgroundPrimary: createGradient(
      pick('primary', 1),
      pick('primary', 4),
      120
    ),
    backgroundSecondary: createGradient(
      pick('secondary', 1),
      pick('secondary', 3),
      133
    ),
    backgroundAccent: createGradient(pick('accent', 1), pick('accent', 3), 123),
    backgroundDepth: createGradient(pick('depth', 1), pick('depth', 3), 180),
    backgroundSurface: createGradient(
      pick('surface', 1),
      pick('surface', 3),
      180
    ),

    buttonPrimary: createGradient(pick('primary', 2), pick('primary', 3), 115),
    buttonSecondary: createGradient(
      pick('secondary', 2),
      pick('secondary', 3),
      117
    ),
    buttonAccent: createGradient(pick('accent', 2), pick('accent', 3), 119),

    focus: createGradient(pick('highlight', 3), pick('accent', 3), 88),
    danger: createGradient(pick('accent', 5), pick('accent', 3), 111),
    info: createGradient(pick('secondary', 3), pick('secondary', 2), 120),

    hero: createGradient(pick('primary', 1), pick('secondary', 1), 127),
    highlightSoft: createGradient(
      pick('highlight', 1),
      pick('neutral', 'grey'),
      93
    ),

    dividerSoft: createGradient(
      pick('neutral', 'light'),
      pick('neutral', 'grey'),
      90
    ),
    dividerHard: createGradient(
      pick('neutral', 'dark'),
      pick('neutral', 'black'),
      90
    ),
  }
}

export default gradients
