import gradients from './Gradient';

const baseFontSize = 18;
const goldenRatio = 1.618;

const scaleFont = (level) => `${(baseFontSize * goldenRatio ** level) / 16}rem`;

const responsiveFontSize = (minSize, maxSize) =>
  `clamp(${minSize}, calc(${minSize} + (${maxSize} - ${minSize}) * ((100vw - 320px) / (1200 - 320))), ${maxSize})`;

const colors = {
  primary: {
    lightest: '#CCD1FF',
    light: '#8A95FD',
    main: '#3441F9',
    dark: '#1F2CCB',
    darkest: '#0F197A',
  },
  secondary: {
    lightest: '#FFC3A1',
    light: '#FF9D6A',
    main: '#FD7A26',
    dark: '#D35D10',
    darkest: '#9A3C06',
  },
  accent: {
    lightest: '#C9F4F6',
    light: '#B1E8EC',
    main: '#9FDFE4',
    dark: '#7AC4CB',
    darkest: '#509196',
  },
  secondaryAccent: {
    lightest: '#FFF2D1',
    light: '#FAE6B2',
    main: '#F5E2A4',
    dark: '#D7BF85',
    darkest: '#B49D6B',
  },
  background: {
    lightest: '#D3D5F8',
    light: '#B5BAF1',
    main: '#999EF6',
    dark: '#6D72C6',
    darkest: '#45488B',
  },
  neutral: {
    white: '#FFFFFF',
    light: '#E0E0E0',
    medium: '#B3B3B3',
    dark: '#808080',
    darkest: '#4D4D4D',
    black: '#000000',
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
    glow: '0 0 10px rgba(52, 65, 249, 0.5)',
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
