const FontSize = {
  h1: 64,
  h2: 32,
  h3: 24,
  h4: 20,
  body1: 16,
  body2: 14,
  body3: 12,
};
const FontFamily = {
  light: 'Roboto-Light',
  regular: 'Roboto-Regular',
  medium: 'Roboto-Medium',
  semiBold: 'Roboto-SemiBold',
  bold: 'Roboto-Bold',
};

// ✅ Semantic Tokens - use only these in components
export const TextVariants = {
  heading: {
    fontSize: FontSize.h1,
    fontFamily: FontFamily.bold,
  },
  h1: {
    fontSize: FontSize.h1,
    fontFamily: FontFamily.semiBold,
  },
  h2: {
    fontSize: FontSize.h2,
    fontFamily: FontFamily.semiBold,
  },
  h3: {
    fontSize: FontSize.h3,
    fontFamily: FontFamily.semiBold,
  },
  h4: {
    fontSize: FontSize.h4,
    fontFamily: FontFamily.semiBold,
  },
  h4Medium: {
    fontSize: FontSize.h4,
    fontFamily: FontFamily.medium,
  },

  body1: {
    fontSize: FontSize.body1,
    fontFamily: FontFamily.light,
  },
  body1Medium: {
    fontSize: FontSize.body1,
    fontFamily: FontFamily.medium,
  },
  body1SemiBold: {
    fontSize: FontSize.body1,
    fontFamily: FontFamily.semiBold,
  },

  body2: {
    fontSize: FontSize.body2,
    fontFamily: FontFamily.light,
  },
  body2Medium: {
    fontSize: FontSize.body2,
    fontFamily: FontFamily.medium,
  },
  body2SemiBold: {
    fontSize: FontSize.body2,
    fontFamily: FontFamily.semiBold,
  },

  body3: {
    fontSize: FontSize.body3,
    fontFamily: FontFamily.light,
  },
  body3Medium: {
    fontSize: FontSize.body3,
    fontFamily: FontFamily.medium,
  },
  body3SemiBold: {
    fontSize: FontSize.body3,
    fontFamily: FontFamily.semiBold,
  },
};
