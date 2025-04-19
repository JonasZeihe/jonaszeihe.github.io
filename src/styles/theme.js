import gradients from './Gradient'

const baseFontSize = 18
const goldenRatio = 1.618
const scaleFont = (level) => `${(baseFontSize * goldenRatio ** level) / 16}rem`
const responsiveFontSize = (minSize, maxSize) =>
  `clamp(${minSize}, calc(${minSize} + (${maxSize} - ${minSize}) * ((100vw - 320px) / (1200 - 320))), ${maxSize})`

const baseTheme = {
  typography: {
    fontFamily: {
      primary: "'Futura', sans-serif",
      secondary: "'Helvetica Neue', sans-serif",
      button: "'Futura', sans-serif",
    },
    fontSize: {
      h1: responsiveFontSize(scaleFont(3), scaleFont(4)),
      h2: responsiveFontSize(scaleFont(2), scaleFont(3)),
      h3: responsiveFontSize(scaleFont(1), scaleFont(2)),
      h4: responsiveFontSize(scaleFont(1), scaleFont(1.5)),
      body: responsiveFontSize(scaleFont(0), scaleFont(1)),
      small: responsiveFontSize(scaleFont(-1), scaleFont(0)),
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    lineHeight: {
      tight: 1.3,
      normal: 1.6,
      relaxed: 1.8,
    },
  },
  spacing: (factor) => `${8 * factor}px`,
  spacingValues: {
    small: '8px',
    medium: '16px',
    large: '24px',
    extraLarge: '32px',
  },
  borderRadius: {
    none: '0',
    small: '0.25rem',
    medium: '0.5rem',
    large: '1rem',
    pill: '9999px',
  },
  boxShadow: {
    light: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    heavy: '0px 8px 16px rgba(0, 0, 0, 0.3)',
    glow: '0 0 10px rgba(46, 204, 113, 0.5)',
  },
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
}

const lightColors = {
  primary: {
    ultraLight: '#FAFFFD',
    lightest: '#F2FAF7',
    light: '#A4DBC4',
    main: '#2ECC71',
    dark: '#3B7C65',
    darkest: '#1A332A',
    deep: '#0F2118',
  },
  secondary: {
    ultraLight: '#F9FEFE',
    lightest: '#F3F9FA',
    light: '#C0E1E5',
    main: '#63B4BF',
    dark: '#38767F',
    darkest: '#193130',
    deep: '#0E1A1C',
  },
  accent: {
    ultraLight: '#FFF8F3',
    lightest: '#FFE3E6',
    light: '#FFB3B6',
    main: '#FF9340',
    dark: '#B52835',
    darkest: '#3F240F',
    deep: '#251409',
  },
  highlight: {
    ultraLight: '#FFFDF8',
    lightest: '#FFF5E6',
    light: '#FFE1B3',
    main: '#F5B041',
    dark: '#C99033',
    darkest: '#996B26',
    deep: '#5C4015',
  },
  secondaryHighlight: {
    ultraLight: '#FEF9F9',
    lightest: '#FDEEEF',
    light: '#F7CACE',
    main: '#C88389',
    dark: '#9A666A',
    darkest: '#6F4A4D',
    deep: '#3F2A2C',
  },
  neutral: {
    ultraLight: '#FFFFFF',
    lightest: '#F2F5F5',
    light: '#CCD7D8',
    main: '#AAB7B8',
    dark: '#889394',
    darkest: '#656D6E',
    black: '#000000',
    deep: '#242727',
  },
  depth: {
    ultraLight: '#F9FAFA',
    lightest: '#E6EAEA',
    light: '#B0B7C0',
    main: '#2C3E50',
    dark: '#1E2B3C',
    darkest: '#131D28',
    deep: '#0B1118',
  },
}

const darkColors = {
  primary: {
    ultraLight: '#0B1C17',
    lightest: '#112E26',
    light: '#3B7C65',
    main: '#2ECC71',
    dark: '#A4DBC4',
    darkest: '#F2FAF7',
    deep: '#FAFFFD',
  },
  secondary: {
    ultraLight: '#0E1A1C',
    lightest: '#193130',
    light: '#38767F',
    main: '#63B4BF',
    dark: '#C0E1E5',
    darkest: '#F3F9FA',
    deep: '#F9FEFE',
  },
  accent: {
    ultraLight: '#251409',
    lightest: '#3F240F',
    light: '#B52835',
    main: '#FF9340',
    dark: '#FFB3B6',
    darkest: '#FFE3E6',
    deep: '#FFF8F3',
  },
  highlight: {
    ultraLight: '#5C4015',
    lightest: '#996B26',
    light: '#C99033',
    main: '#F5B041',
    dark: '#FFE1B3',
    darkest: '#FFF5E6',
    deep: '#FFFDF8',
  },
  secondaryHighlight: {
    ultraLight: '#3F2A2C',
    lightest: '#6F4A4D',
    light: '#9A666A',
    main: '#C88389',
    dark: '#F7CACE',
    darkest: '#FDEEEF',
    deep: '#FEF9F9',
  },
  neutral: {
    ultraLight: '#0A0A0A',
    lightest: '#1A1A1A',
    light: '#2A2A2A',
    main: '#4A4A4A',
    dark: '#8A8A8A',
    darkest: '#CCCCCC',
    black: '#FFFFFF',
    deep: '#EDEDED',
  },
  depth: {
    ultraLight: '#111111',
    lightest: '#1C1C1C',
    light: '#2A2A2A',
    main: '#2C3E50',
    dark: '#E6EAEA',
    darkest: '#F9FAFA',
    deep: '#FFFFFF',
  },
}

export const lightTheme = {
  ...baseTheme,
  colors: lightColors,
  gradients: {
    ...gradients({ colors: lightColors }),
    pageBackground: 'linear-gradient(180deg, #FFFFFF, #F2F5F5)',
  },
}

export const darkTheme = {
  ...baseTheme,
  colors: darkColors,
  gradients: {
    ...gradients({ colors: darkColors }),
    pageBackground: 'linear-gradient(180deg, #0B1118, #1A1A1A)',
  },
}

const theme = darkTheme

export default theme
