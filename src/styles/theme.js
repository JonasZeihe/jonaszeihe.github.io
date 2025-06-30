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
    h4: responsiveFontSize(scaleFont(0.5), scaleFont(1.4)),
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
  xs: '0 1.5px 4px rgba(0,0,0,0.07)',
  light: '0 2px 8px rgba(32,44,66,0.12)',
  medium: '0 8px 22px rgba(32,52,116,0.16)',
  heavy: '0 14px 32px rgba(22,22,48,0.25)',
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
    2: '#F7F9FC',
    main: '#F0F2F8',
    4: '#E0E2EA',
    5: '#D1D3DE',
    card: '#FFFFFF',
    cardAlpha: 'rgba(255,255,255,0.81)',
    hover: '#F5F7FA',
    backdrop: '#E6E9F0',
  },
  depth: {
    1: '#F4F5FA',
    2: '#E3E5F0',
    3: '#B6B8C6',
    main: '#717488',
    5: '#393C4B',
    6: '#23243A',
    ultraLight: '#F6F8FC',
    dark: '#16171D',
  },
  neutral: {
    1: '#FFFFFF',
    2: '#F4F6FA',
    3: '#C8CAD1',
    4: '#888A99',
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
    subtle: '#888A99',
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
    1: '#FFD666',
    2: '#FFD666',
    main: '#FFBB00',
    4: '#D99A00',
    5: '#A27000',
  },
  surface: {
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
    1: '#23263C',
    2: '#2B2F44',
    3: '#393B49',
    main: '#B3B7C5',
    5: '#E0E1EA',
    6: '#F7F8FA',
    ultraLight: '#22243A',
    dark: '#FFFFFF',
  },
  neutral: {
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
