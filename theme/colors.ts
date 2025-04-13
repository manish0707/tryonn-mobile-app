const baseColors = {
  green: '#0C9409',
  red: '#ED1010',

  // Grayscale
  gray900: '#1A1A1A',
  gray800: '#333333',
  gray700: '#4D4D4D',
  gray600: '#666666',
  gray500: '#808080',
  gray400: '#999999',
  gray350: '#B3B3B3',
  gray300: '#CCCCCC',
  gray200: '#E6E6E6',
  white: '#FFFFFF',
};

export const LightThemeColors = {
  ...baseColors,

  screenBg: baseColors.white,

  success: baseColors.green,
  error: baseColors.red,

  textPrimary: baseColors.gray900,
  textSecondary: baseColors.gray500,
  textWhite: baseColors.white,

  divider: baseColors.gray200,
  border: baseColors.gray200,
};

export const DarkThemeColors = {
  ...baseColors,

  screenBg: baseColors.white,

  success: baseColors.green,
  error: baseColors.red,

  textPrimary: baseColors.gray900,
  textSecondary: baseColors.gray500,
  textWhite: baseColors.white,

  divider: baseColors.gray200,
  border: baseColors.gray200,
};
