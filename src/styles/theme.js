import gradients from './Gradient'

const baseFont = 18
const golden = 1.618
const scale = (l) => `${(baseFont * golden ** l) / 16}rem`
const clamp = (min, max) =>
  `clamp(${min},calc(${min}+(${max}-${min})*((100vw-320px)/(1200-320))),${max})`

const typography = {
  fontFamily: {
    primary: "'Geist','Inter','Segoe UI',Arial,sans-serif",
    secondary: "'Geist','Inter','Segoe UI',Arial,sans-serif",
    button: "'Geist','Inter','Segoe UI',Arial,sans-serif",
  },
  fontSize: {
    h1: clamp(scale(3), scale(3.8)),
    h2: clamp(scale(2), scale(3)),
    h3: clamp(scale(1), scale(2.1)),
    h4: clamp(scale(0.5), scale(1.4)),
    body: clamp(scale(0), scale(1)),
    small: clamp(scale(-1), scale(0)),
  },
  fontWeight: { light: 300, regular: 400, medium: 500, bold: 700 },
  lineHeight: { tight: 1.22, normal: 1.6, relaxed: 1.85 },
  letterSpacing: { tight: '-0.01em', normal: '0', wide: '0.04em' },
}

const spacing = (f) => `${8 * f}px`
const spacingHalf = (f) => `${4 * f}px`

const borderRadius = {
  none: '0',
  small: '0.26rem',
  medium: '0.52rem',
  large: '1.05rem',
  pill: '9999px',
}

const boxShadows = {
  light: {
    xs: '0 1.5px 4px rgba(0,0,0,0.07)',
    light: '0 2px 8px rgba(32,44,66,0.12)',
    medium: '0 8px 22px rgba(32,52,116,0.16)',
    heavy: '0 14px 32px rgba(22,22,48,0.25)',
    glow: '0 0 0 4px #7bdff2, 0 1.5px 7px 0 #e252d144',
  },
  dark: {
    xs: '0 1px 3px rgba(0,0,0,.6)',
    light: '0 2px 6px rgba(0,0,0,.5)',
    medium: '0 6px 18px rgba(0,0,0,.45)',
    heavy: '0 10px 28px rgba(0,0,0,.4)',
    glow: '0 0 0 4px #7bdff2, 0 1.5px 6px 0 #7bdff233',
  },
}

const breakpoints = {
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1440px',
}

const motionSafe =
  typeof window === 'undefined' ||
  window.matchMedia('(prefers-reduced-motion:no-preference)').matches

const createTheme = (mode, colors) => ({
  mode,
  colors,
  boxShadow: boxShadows[mode],
  gradients: gradients({ colors }),
  typography,
  spacing,
  spacingHalf,
  borderRadius,
  breakpoints,
  motionSafe,
})

export const lightTheme = createTheme('light', {
  primary: {
    0: '#F2F6FF',
    1: '#E5EBFF',
    2: '#A9C2FF',
    3: '#678CEC',
    main: '#3B70FF',
    4: '#2556DA',
    5: '#1536A2',
    6: '#0B225E',
  },
  secondary: {
    0: '#FFF2EA',
    1: '#FFE5D5',
    2: '#FFBA96',
    3: '#F39269',
    main: '#FF8552',
    4: '#E76A3C',
    5: '#B3471C',
    6: '#6C2A10',
  },
  accent: {
    0: '#FBEAF9',
    1: '#FDE4F9',
    2: '#F6C6F1',
    3: '#DB7AD1',
    main: '#E252D1',
    4: '#C02FB1',
    5: '#951F8E',
    6: '#5B0A54',
  },
  highlight: {
    0: '#FFFBEF',
    1: '#FFF7E0',
    2: '#FFE37A',
    3: '#EEC23D',
    main: '#FFD600',
    4: '#DDA100',
    5: '#A87100',
    6: '#664200',
  },
  surface: {
    0: '#FFFFFF',
    1: '#FAFBFF',
    2: '#F3F5F9',
    main: '#E9EBF2',
    4: '#DDE0E7',
    5: '#C9CDD8',
    6: '#B3B7C4',
    card: '#FFFFFF',
    cardAlpha: 'rgba(255,255,255,0.73)',
    hover: '#F5F7FA',
    backdrop: '#E6E9F0',
  },
  depth: {
    0: '#FFFFFF',
    1: '#F4F5FA',
    2: '#E3E5F0',
    3: '#B6B8C6',
    main: '#676B84',
    5: '#393C4B',
    6: '#23243A',
    ultraLight: '#F6F8FC',
    dark: '#16171D',
  },
  neutral: {
    0: '#FFFFFF',
    1: '#FFFFFF',
    2: '#F4F6FA',
    3: '#C8CAD1',
    4: '#6F7285',
    5: '#2B2D3A',
    6: '#16171D',
    white: '#FFFFFF',
    black: '#16171D',
    light: '#F7F9FC',
    dark: '#23243A',
    grey: '#7C7F93',
    ultraLight: '#F9FBFD',
    darkest: '#16171D',
  },
  text: {
    main: '#16171D',
    inverse: '#FFFFFF',
    subtle: '#6F7285',
  },
})

export const darkTheme = createTheme('dark', {
  primary: {
    0: '#DCE7FF',
    1: '#B8D0FF',
    2: '#5C8EFF',
    3: '#4A79E9',
    main: '#3B70FF',
    4: '#2B56C0',
    5: '#1D3A86',
    6: '#0F214F',
  },
  secondary: {
    0: '#FFE5D5',
    1: '#FFD6C2',
    2: '#FFA784',
    3: '#F49568',
    main: '#FF8552',
    4: '#E46B38',
    5: '#A9481D',
    6: '#662B12',
  },
  accent: {
    0: '#ECD4F0',
    1: '#E3BDE5',
    2: '#C689D2',
    3: '#B574C3',
    main: '#D26AC7',
    4: '#A943A5',
    5: '#742F78',
    6: '#45124A',
  },
  highlight: {
    0: '#FFECA0',
    1: '#FFD666',
    2: '#FFD666',
    3: '#F7C133',
    main: '#FFBB00',
    4: '#D99A00',
    5: '#A27000',
    6: '#664700',
  },
  surface: {
    0: '#1A1B25',
    1: '#181922',
    2: '#232536',
    main: '#232536',
    4: '#2F333D',
    5: '#101015',
    card: '#1B1C22',
    cardAlpha: 'rgba(27,28,34,0.73)',
    hover: '#22232F',
    backdrop: '#15161B',
  },
  depth: {
    0: '#1E2030',
    1: '#23263C',
    2: '#2B2F44',
    3: '#393B49',
    main: '#9EA2B3',
    5: '#E0E1EA',
    6: '#F7F8FA',
    ultraLight: '#22243A',
    dark: '#FFFFFF',
  },
  neutral: {
    0: '#16171D',
    1: '#16171D',
    2: '#22232F',
    3: '#5C5E7B',
    4: '#A1A4C2',
    5: '#ECECF4',
    6: '#FFFFFF',
    white: '#FFFFFF',
    black: '#16171D',
    light: '#22232F',
    dark: '#ECECF4',
    grey: '#9699B7',
    ultraLight: '#1C1D2A',
    darkest: '#FFFFFF',
  },
  text: {
    main: '#FFFFFF',
    inverse: '#16171D',
    subtle: '#A1A4C2',
  },
})

export default lightTheme
