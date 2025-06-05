const spacing = {
  borderRadius: 16,
};

const typeSizes = {
  FONT_SIZE_LARGE: 16,
  FONT_SIZE_MEDIUM: 14,
  FONT_SIZE_SMALL: 12,
  FONT_WEIGHT_LIGHT: 200,
  FONT_WEIGHT_MEDIUM: 600,
  FONT_WEIGHT_HEAVY: 700,
};

const typeVariants = {
  titleLarge: {
    fontFamily: "Poppins-Bold",
    fontSize: typeSizes.FONT_SIZE_LARGE,
  },
  titleSmall: {
    fontFamily: "Poppins-Bold",
    fontSize: typeSizes.FONT_SIZE_SMALL,
  },
  bodyMedium: {
    fontFamily: "Poppins-Regular",
    fontSize: typeSizes.FONT_SIZE_MEDIUM,
  },
  bodySmall: {
    fontFamily: "Poppins-Regular",
    fontSize: typeSizes.FONT_SIZE_SMALL,
  },
};

const themes = {
  light: {
    name: "light",
    color: "#695D5D",
    primary: "#2bbca",
    cardBg: "#ffffff",
    layoutBg: "#e0eeec",
  },
  dark: {
    name: "dark",
    color: "#ffffff",
    primary: "#2bbca2",
  },
};

export { spacing, typeSizes, typeVariants, themes };
