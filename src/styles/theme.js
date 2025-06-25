import gradients from './Gradient'

const baseFontSize = 18
const goldenRatio = 1.618
const scaleFont = (level) => `${(baseFontSize * goldenRatio ** level) / 16}rem`

const responsiveFontSize = (min, max) =>
  `clamp(${min}, calc(${min} + (${max} - ${min}) * ((100vw - 320px) / (1200 - 320))), ${max})`

const typography = {
  fontFamily: {
    primary: "'Geist', sans-serif",
    secondary: "'Geist', sans-serif",
    button: "'Geist', sans-serif",
  },
  fontSize: {
    h1: responsiveFontSize(scaleFont(3), scaleFont(4)),
    h2: responsiveFontSize(scaleFont(2), scaleFont(3)),
    h3: responsiveFontSize(scaleFont(1), scaleFont(2)),
    body: responsiveFontSize(scaleFont(0), scaleFont(1)),
    small: responsiveFontSize(scaleFont(-1), scaleFont(0)),
  },
  fontWeight: { light: 300, regular: 400, medium: 500, bold: 700 },
  lineHeight: { tight: 1.3, normal: 1.6, relaxed: 1.8 },
}

const spacing = (f) => `${8 * f}px`

const borderRadius = {
  none: '0',
  small: '0.25rem',
  medium: '0.5rem',
  large: '1rem',
  pill: '9999px',
}

const boxShadow = {
  xs: '0 1px 3px rgba(0,0,0,0.04)',
  light: '0 2px 5px rgba(0,0,0,0.06)',
  medium: '0 6px 12px rgba(0,0,0,0.08)',
  heavy: '0 12px 24px rgba(0,0,0,0.1)',
}

const breakpoints = {
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
}

const lightColors = {
  primary: { main: '#1F6FEB', light: '#64A1F4', dark: '#1956BD' },
  secondary: { main: '#7B61FF', light: '#AD9CFF', dark: '#5C47D6' },
  accent: { main: '#E63946', light: '#FF7B87', dark: '#B02A36' },
  neutral: {
    ultraLight: '#FFFFFF',
    light: '#F8F9FA',
    dark: '#495057',
    black: '#000000',
  },
  depth: {
    ultraLight: '#FAFBFC',
    light: '#F1F3F5',
    main: '#E9ECEF',
    dark: '#CED4DA',
    darkest: '#ADB5BD',
  },
  surface: {
    card: '#FFFFFF',
    hover: '#F2F4F6',
    backdrop: '#E1E5EB',
  },
}

const darkColors = {
  primary: { main: '#4C9AFF', light: '#78B5FF', dark: '#3572CC' },
  secondary: { main: '#A78BFA', light: '#CABFFD', dark: '#6D4DE6' },
  accent: { main: '#FF6B6B', light: '#FFA3A3', dark: '#B64040' },
  neutral: {
    ultraLight: '#1A1A1A',
    light: '#2C2C2C',
    dark: '#C4C4C4',
    black: '#FFFFFF',
  },
  depth: {
    ultraLight: '#1F1F1F',
    light: '#2B2F34',
    main: '#1E2530',
    dark: '#151A22',
    darkest: '#0E1117',
  },
  surface: {
    card: '#1E252E',
    hover: '#2A303C',
    backdrop: '#333B48',
  },
}

const baseBlobs = [
  {
    color: 'primary.light',
    size: '60vw',
    delay: '0s',
    opacity: 0.35,
    position: { top: '5%', left: '10%' },
  },
  {
    color: 'secondary.main',
    size: '45vw',
    delay: '10s',
    opacity: 0.28,
    position: { bottom: '8%', right: '5%' },
  },
  {
    color: 'accent.dark',
    size: '55vw',
    delay: '20s',
    opacity: 0.2,
    position: { top: '40%', left: '50%' },
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
  colors: lightColors,
  gradients: gradients({ colors: lightColors }),
  backgroundBlobs: baseBlobs,
}

export const darkTheme = {
  ...baseTheme,
  colors: darkColors,
  gradients: gradients({ colors: darkColors }),
  backgroundBlobs: baseBlobs,
}

export default lightTheme
