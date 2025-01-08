import gradients from './Gradient';

const baseFontSize = 18;
const goldenRatio = 1.618;

const scaleFont = (level) => `${(baseFontSize * goldenRatio ** level) / 16}rem`;

const responsiveFontSize = (minSize, maxSize) =>
  `clamp(${minSize}, calc(${minSize} + (${maxSize} - ${minSize}) * ((100vw - 320px) / (1200 - 320))), ${maxSize})`;

const colors = {
  primary: {
    lightest: '#D4F9E2',
    light: '#A6EFC1',
    main: '#2ECC71',
    dark: '#249A57',
    darkest: '#18713C',
  },
  secondary: {
    lightest: '#D6DFE6',
    light: '#92A3B5',
    main: '#1B263B',
    dark: '#131C29',
    darkest: '#0D1219',
  },
  accent: {
    lightest: '#FFE3E6',
    light: '#FFB3B6',
    main: '#E63946',
    dark: '#B52835',
    darkest: '#891B25',
  },
  highlight: {
    lightest: '#FFF5E6',
    light: '#FFE1B3',
    main: '#F5B041',
    dark: '#C99033',
    darkest: '#996B26',
  },
  secondaryHighlight: {
    lightest: '#FDEEEF',
    light: '#F7CACE',
    main: '#C88389',
    dark: '#9A666A',
    darkest: '#6F4A4D',
  },
  neutral: {
    white: '#FFFFFF',
    lightest: '#F2F5F5',
    light: '#CCD7D8',
    main: '#AAB7B8',
    dark: '#889394',
    darkest: '#656D6E',
    black: '#000000',
  },
  depth: {
    lightest: '#E6EAEA',
    light: '#B0B7C0',
    main: '#2C3E50',
    dark: '#1E2B3C',
    darkest: '#131D28',
  },
};

const theme = {
  colors,
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
};

theme.gradients = gradients(theme);

export default theme;
