// styles/theme.js
import gradients from './Gradient'

const baseFont = 18
const golden = 1.618
const scale = (l) => `${(baseFont * golden ** l) / 16}rem`
const clamp = (min, max) =>
  `clamp(${min},calc(${min}+(${max}-${min})*((100vw-320px)/(1200-320))),${max})`

export const typography = {
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

export const spacing = (f) => `${8 * f}px`
export const spacingHalf = (f) => `${4 * f}px`
export const borderRadius = {
  none: '0',
  small: '0.26rem',
  medium: '0.52rem',
  large: '1.05rem',
  pill: '9999px',
}
export const boxShadows = {
  light: {
    xs: '0 1px 3px rgba(0,0,0,0.05)',
    sm: '0 2px 8px rgba(32,44,66,0.10)',
    md: '0 8px 20px rgba(32,52,116,0.14)',
    lg: '0 12px 30px rgba(22,22,48,0.20)',
    glow: '0 0 0 4px #7bdff2, 0 1.5px 7px 0 rgba(226,82,209,0.26)',
  },
  dark: {
    xs: '0 1px 2px rgba(0,0,0,0.70)',
    sm: '0 2px 6px rgba(0,0,0,0.60)',
    md: '0 6px 18px rgba(0,0,0,0.55)',
    lg: '0 10px 28px rgba(0,0,0,0.50)',
    glow: '0 0 0 4px #7bdff2, 0 1.5px 6px 0 rgba(123,223,242,0.20)',
  },
}
export const breakpoints = {
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

const PALETTES = {
  light: {
    primary: {
      base: '#3068FF',
      hover: '#2556DA',
      active: '#1536A2',
      disabled: '#A9C2FF',
      border: '#678CEC',
      surface: '#EEF4FF',
      contrast: '#0B225E',

      0: '#F2F6FF',
      1: '#E5EBFF',
      2: '#A9C2FF',
      3: '#678CEC',
      main: '#3068FF',
      4: '#2556DA',
      5: '#1536A2',
      6: '#0B225E',
    },

    secondary: {
      base: '#C3552A',
      hover: '#A6471A',
      active: '#7D330F',
      disabled: '#FFBA96',
      border: '#F39269',
      surface: '#FFF2EA',
      contrast: '#6C2A10',

      0: '#FFF2EA',
      1: '#FFE5D5',
      2: '#FFBA96',
      3: '#F39269',
      main: '#C3552A',
      4: '#A6471A',
      5: '#7D330F',
      6: '#4D1E08',
    },

    accent: {
      base: '#CA21B6',
      hover: '#A01392',
      active: '#70126A',
      disabled: '#F6C6F1',
      border: '#DB7AD1',
      surface: '#FBEAF9',
      contrast: '#5B0A54',

      0: '#FBEAF9',
      1: '#F6D9F5',
      2: '#E99FED',
      3: '#DB7AD1',
      main: '#CA21B6',
      4: '#A01392',
      5: '#70126A',
      6: '#45124A',
    },

    highlight: {
      base: '#FFD600',
      hover: '#EEC400',
      active: '#D1A700',
      disabled: '#FFE37A',
      border: '#EEC23D',
      surface: '#FFFBEF',
      contrast: '#16171D',

      0: '#FFFBEF',
      1: '#FFF7E0',
      2: '#FFE37A',
      3: '#EEC23D',
      main: '#FFD600',
      4: '#DDA100',
      5: '#A87100',
      6: '#664200',
    },

    neutral: {
      background: '#FAFAFC',
      surface: '#FFFFFF',
      border: '#E4E7EE',
      text: '#2B2D3A',
      textSubtle: '#7C7F93',
      inverse: '#FFFFFF',
      backdrop: '#E0E3EA',
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
      cardAlpha: 'rgba(255,255,255,0.8)',
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

    text: { main: '#16171D', inverse: '#FFFFFF', subtle: '#6F7285' },
  },

  dark: {
    primary: {
      base: '#3068FF',
      hover: '#2B56C0',
      active: '#1D3A86',
      disabled: '#5C8EFF',
      border: '#4A79E9',
      surface: '#1E1F2B',
      contrast: '#0F214F',

      0: '#DCE7FF',
      1: '#B8D0FF',
      2: '#5C8EFF',
      3: '#4A79E9',
      main: '#3068FF',
      4: '#2B56C0',
      5: '#1D3A86',
      6: '#0F214F',
    },

    secondary: {
      base: '#C3552A',
      hover: '#A6471A',
      active: '#7D330F',
      disabled: '#FFA784',
      border: '#F49568',
      surface: '#2C1E1B',
      contrast: '#662B12',

      0: '#FFE5D5',
      1: '#FFD6C2',
      2: '#FFA784',
      3: '#F49568',
      main: '#C3552A',
      4: '#A6471A',
      5: '#7D330F',
      6: '#51210A',
    },

    accent: {
      base: '#CA21B6',
      hover: '#A01392',
      active: '#70126A',
      disabled: '#C689D2',
      border: '#B574C3',
      surface: '#2B1C2A',
      contrast: '#45124A',

      0: '#ECD4F0',
      1: '#E3BDE5',
      2: '#C689D2',
      3: '#B574C3',
      main: '#CA21B6',
      4: '#A01392',
      5: '#70126A',
      6: '#45124A',
    },

    highlight: {
      base: '#B78A00',
      hover: '#D99A00',
      active: '#A27000',
      disabled: '#FFD666',
      border: '#F7C133',
      surface: '#332F1C',
      contrast: '#664700',

      0: '#FFECA0',
      1: '#FFD666',
      2: '#FFC533',
      3: '#F7C133',
      main: '#FFBB00',
      4: '#D99A00',
      5: '#A27000',
      6: '#664700',
    },

    neutral: {
      background: '#1A1B25',
      surface: '#22232F',
      border: '#292B38',
      text: '#F0F2FF',
      textSubtle: '#A8ABC9',
      inverse: '#16171D',
      backdrop: '#15161B',
    },

    surface: {
      0: '#1A1B25',
      1: '#181922',
      2: '#232536',
      main: '#232536',
      4: '#2F333D',
      5: '#101015',
      card: '#1B1C22',
      cardAlpha: 'rgba(27,28,34,0.8)',
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

    text: { main: '#FFFFFF', inverse: '#16171D', subtle: '#A1A4C2' },
  },
}

const createTheme = (mode) => {
  const colors = PALETTES[mode]
  return {
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
  }
}

export const lightTheme = createTheme('light')
export const darkTheme = createTheme('dark')
export default lightTheme // default identical wie bisher
