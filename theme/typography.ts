const FontSize = {
  h1: 32,
  h2: 28,
  h3: 24,
  h4: 20,
  body1: 16,
  body2: 14,
  body3: 12,
};

const FontWeight = {
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
} as const;

const LineHeight = {
  h1: 40,
  h2: 36,
  h3: 32,
  h4: 28,
  body1: 24,
  body2: 20,
  body3: 18,
};

const FontFamily = {
  regular: 'System',
  medium: 'System',
  semiBold: 'System',
  bold: 'System',
};

// ✅ Semantic Tokens - use only these in components
export const TextVariants = {
  h1: {
    fontSize: FontSize.h1,
    fontWeight: FontWeight.semiBold,
    lineHeight: LineHeight.h1,
    fontFamily: FontFamily.semiBold,
  },
  h2: {
    fontSize: FontSize.h2,
    fontWeight: FontWeight.semiBold,
    lineHeight: LineHeight.h2,
    fontFamily: FontFamily.semiBold,
  },
  h3: {
    fontSize: FontSize.h3,
    fontWeight: FontWeight.semiBold,
    lineHeight: LineHeight.h3,
    fontFamily: FontFamily.semiBold,
  },
  h4: {
    fontSize: FontSize.h4,
    fontWeight: FontWeight.semiBold,
    lineHeight: LineHeight.h4,
    fontFamily: FontFamily.semiBold,
  },

  body1: {
    fontSize: FontSize.body1,
    fontWeight: FontWeight.regular,
    lineHeight: LineHeight.body1,
    fontFamily: FontFamily.regular,
  },
  body1Medium: {
    fontSize: FontSize.body1,
    fontWeight: FontWeight.medium,
    lineHeight: LineHeight.body1,
    fontFamily: FontFamily.medium,
  },
  body1SemiBold: {
    fontSize: FontSize.body1,
    fontWeight: FontWeight.semiBold,
    lineHeight: LineHeight.body1,
    fontFamily: FontFamily.semiBold,
  },

  body2: {
    fontSize: FontSize.body2,
    fontWeight: FontWeight.regular,
    lineHeight: LineHeight.body2,
    fontFamily: FontFamily.regular,
  },
  body2Medium: {
    fontSize: FontSize.body2,
    fontWeight: FontWeight.medium,
    lineHeight: LineHeight.body2,
    fontFamily: FontFamily.medium,
  },
  body2SemiBold: {
    fontSize: FontSize.body2,
    fontWeight: FontWeight.semiBold,
    lineHeight: LineHeight.body2,
    fontFamily: FontFamily.semiBold,
  },

  body3: {
    fontSize: FontSize.body3,
    fontWeight: FontWeight.regular,
    lineHeight: LineHeight.body3,
    fontFamily: FontFamily.regular,
  },
  body3Medium: {
    fontSize: FontSize.body3,
    fontWeight: FontWeight.medium,
    lineHeight: LineHeight.body3,
    fontFamily: FontFamily.medium,
  },
  body3SemiBold: {
    fontSize: FontSize.body3,
    fontWeight: FontWeight.semiBold,
    lineHeight: LineHeight.body3,
    fontFamily: FontFamily.semiBold,
  },
};
