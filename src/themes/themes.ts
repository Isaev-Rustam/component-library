import {
  Theme,
  ThemeBorderRadius,
  ThemeBorderWidth,
  ThemeColors,
} from './themesTypes';

// Радиус
export const borderRadius: ThemeBorderRadius = {
  small: '4rem',
  medium: '8rem',
  large: '1.25rem',
  extraLarge: '16rem',
};

// Ширина
export const borderWidth: ThemeBorderWidth = {
  thin: '1rem',
  medium: '2rem',
  thick: '4rem',
  extraThick: '8rem',
};

// цвета для светлой темы
export const lightThemeColors: ThemeColors = {
  'primary-color': '#006edb',
  'secondary-color': '#636c76',
  'background-color': '#f6f8fa',
  'surface-color': '#ffffff',
  'text-color': '#1f2328',
  'secondary-text-color': '#636c76',
  'border-color': '#8b949e',
  'hover-color': '#54aeff66',
  'active-color': '#006edb',
  'disabled-color': '#b0b3b8',
  'error-color': '#b62324',
  'success-color': '#238636',
  'warning-color': '#fff8c5',
};

// цвета для чёрной темы
export const DarkThemeColors: ThemeColors = {
  'primary-color': '#0576ff',
  'secondary-color': '#8d96a0',
  'background-color': '#0d1117',
  'surface-color': '#0d1117',
  'text-color': '#e6edf3',
  'secondary-text-color': '#8d96a0',
  'border-color': '#30363d',
  'hover-color': '#1f6febb3',
  'active-color': '#0576ff',
  'disabled-color': '#495057',
  'error-color': '#dc3545',
  'success-color': '#238636',
  'warning-color': '#d2992266',
};

//Theme light
export const lightTheme: Theme = {
  colors: lightThemeColors,
  borderRadius,
  borderWidth,
};

//Theme dark
export const darkTheme: Theme = {
  colors: DarkThemeColors,
  borderRadius,
  borderWidth,
};
