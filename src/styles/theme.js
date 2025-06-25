// src/styles/theme.js
import gradients from './Gradient'

const baseFontSize = 18
const goldenRatio = 1.618
const scaleFont = (level) => `${(baseFontSize * goldenRatio ** level) / 16}rem`
const responsiveFontSize = (min, max) =>
  `clamp(${min}, calc(${min} + (${max} - ${min}) * ((100vw - 320px) / (1200 - 320))), ${max})`

const typography = {
  fontFamily: {
    primary: "'Geist', 'Inter', 'Segoe UI', Arial, sans-serif",
    secondary: "'Geist', 'Inter', 'Segoe UI', Arial, sans-serif",
    button: "'Geist', 'Inter', 'Segoe UI', Arial, sans-serif",
  },
  fontSize: {
    h1: responsiveFontSize(scaleFont(3), scaleFont(4.2)),
    h2: responsiveFontSize(scaleFont(2), scaleFont(3)),
    h3: responsiveFontSize(scaleFont(1), scaleFont(2.1)),
    body: responsiveFontSize(scaleFont(0), scaleFont(1)),
    small: responsiveFontSize(scaleFont(-1), scaleFont(0)),
  },
  fontWeight: { light: 300, regular: 400, medium: 500, bold: 700 },
  lineHeight: { tight: 1.22, normal: 1.6, relaxed: 1.85 },
  letterSpacing: { tight: '-0.01em', normal: '0', wide: '0.04em' },
}

const spacing = (f) => `${8 * f}px`

const borderRadius = {
  none: '0',
  small: '0.26rem',
  medium: '0.52rem',
  large: '1.05rem',
  pill: '9999px',
}

const boxShadow = {
  xs: '0 1.5px 4px rgba(0,0,0,0.06)',
  light: '0 2px 8px rgba(30,40,70,0.11)',
  medium: '0 8px 22px rgba(40,70,160,0.14)',
  heavy: '0 14px 32px rgba(40,32,70,0.22)',
  glow: '0 0 0 4px #7bdff2, 0 1.5px 7px 0 #e252d144',
}

const breakpoints = {
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
}

const lightColors = {
  primary: {
    1: '#E5EBFF',
    2: '#A9C2FF',
    main: '#3B70FF',
    4: '#2556DA',
    5: '#1536A2',
  },
  secondary: {
    1: '#FFE5D5',
    2: '#FFBA96',
    main: '#FF8552',
    4: '#E76A3C',
    5: '#B3471C',
  },
  accent: {
    1: '#FDE4F9',
    2: '#F6C6F1',
    main: '#E252D1',
    4: '#C02FB1',
    5: '#951F8E',
  },
  highlight: {
    1: '#FFF7E0',
    2: '#FFE37A',
    main: '#FFD600',
    4: '#DDA100',
    5: '#A87100',
  },
  surface: {
    1: '#FFFFFF',
    2: '#F6F8FA',
    main: '#EAECEF',
    4: '#CED1D6',
    5: '#1B1E23',
    card: '#FFFFFF',
    hover: '#F2F4F6',
    backdrop: '#E1E5EB',
  },
  depth: {
    1: '#F8F9FB',
    2: '#DDE0E5',
    3: '#B4B8C0',
    main: '#6E7480',
    5: '#2F343D',
    6: '#171A20',
    ultraLight: '#F2F6FF',
    dark: '#1B1E23',
  },
  neutral: {
    1: '#FFFFFF',
    2: '#F3F6F8',
    3: '#C1C1C1',
    4: '#808080',
    5: '#23262F',
    6: '#101015',
    white: '#FFFFFF',
    black: '#101015',
    light: '#F3F6F8',
    dark: '#23262F',
    grey: '#7D8592',
  },
}

const darkColors = {
  primary: {
    1: '#B8D0FF',
    2: '#5C8EFF',
    main: '#3B70FF',
    4: '#2B56C0',
    5: '#1D3A86',
  },
  secondary: {
    1: '#FFD6C2',
    2: '#FFA784',
    main: '#FF8552',
    4: '#E46B38',
    5: '#A9481D',
  },
  accent: {
    1: '#E3BDE5',
    2: '#C689D2',
    main: '#D26AC7',
    4: '#A943A5',
    5: '#742F78',
  },
  highlight: {
    1: '#4F3B00',
    2: '#FFD666',
    main: '#FFBB00',
    4: '#D99A00',
    5: '#A27000',
  },
  surface: {
    1: '#181922',
    2: '#21242B',
    main: '#232536',
    4: '#2F333D',
    5: '#101015',
    card: '#191A23',
    hover: '#24273A',
    backdrop: '#191C22',
  },
  depth: {
    1: '#232636',
    2: '#232944',
    3: '#393B49',
    main: '#A0A5B1',
    5: '#C9CCD4',
    6: '#F2F3F6',
    ultraLight: '#23253A',
    dark: '#EBECF0',
  },
  neutral: {
    1: '#101015',
    2: '#1E2131',
    3: '#676A77',
    4: '#A5A8B2',
    5: '#E9EAEC',
    6: '#FFFFFF',
    white: '#FFFFFF',
    black: '#101015',
    light: '#1E2131',
    dark: '#E9EAEC',
    grey: '#A5A8B2',
  },
}

const baseBlobs = [
  {
    color: 'primary.2',
    size: '60vw',
    delay: '0s',
    opacity: 0.34,
    position: { top: '5%', left: '10%' },
  },
  {
    color: 'secondary.main',
    size: '44vw',
    delay: '10s',
    opacity: 0.23,
    position: { bottom: '8%', right: '5%' },
  },
  {
    color: 'accent.4',
    size: '52vw',
    delay: '20s',
    opacity: 0.15,
    position: { top: '42%', left: '52%' },
  },
]

const baseTheme = {
  typography,
  spacing,
  borderRadius,
  boxShadow,
  breakpoints,
}

export const lightTheme = {
  ...baseTheme,
  mode: 'light',
  colors: lightColors,
  gradients: gradients({ colors: lightColors }),
  backgroundBlobs: baseBlobs,
}

export const darkTheme = {
  ...baseTheme,
  mode: 'dark',
  colors: darkColors,
  gradients: gradients({ colors: darkColors }),
  backgroundBlobs: baseBlobs,
}

export default lightTheme
