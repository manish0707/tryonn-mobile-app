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
  thin: 'PublicSans-Thin',
  regular: 'PublicSans-Regular',
  medium: 'PublicSans-Medium',
  semiBold: 'PublicSans-SemiBold',
  bold: 'PublicSans-Bold',
};

// ✅ Semantic Tokens - use only these in components
export const TextVariants = {
  h1: {
    fontSize: FontSize.h1,
    fontFamily: FontFamily.bold,
  },
  h2: {
    fontSize: FontSize.h2,
    fontFamily: FontFamily.bold,
  },
  h3: {
    fontSize: FontSize.h3,
    fontFamily: FontFamily.bold,
  },
  h4: {
    fontSize: FontSize.h4,
    fontFamily: FontFamily.bold,
  },
  h4Medium: {
    fontSize: FontSize.h4,
    fontFamily: FontFamily.medium,
  },

  body1: {
    fontSize: FontSize.body1,
    fontFamily: FontFamily.thin,
  },
  body1Medium: {
    fontSize: FontSize.body1,
    fontFamily: FontFamily.medium,
  },
  body1SemiBold: {
    fontSize: FontSize.body1,
    fontFamily: FontFamily.bold,
  },

  body2: {
    fontSize: FontSize.body2,
    fontFamily: FontFamily.thin,
  },
  body2Medium: {
    fontSize: FontSize.body2,
    fontFamily: FontFamily.medium,
  },
  body2SemiBold: {
    fontSize: FontSize.body2,
    fontFamily: FontFamily.bold,
  },

  body3: {
    fontSize: FontSize.body3,
    fontFamily: FontFamily.thin,
  },
  body3Medium: {
    fontSize: FontSize.body3,
    fontFamily: FontFamily.medium,
  },
  body3SemiBold: {
    fontSize: FontSize.body3,
    fontFamily: FontFamily.bold,
  },
};
