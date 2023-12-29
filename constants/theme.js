const COLORS = {
  primary: "#f87146",
  secondary: "#332c45",
  tertiary: "#ff77554",

  textGray: "#616161",

  gray: "#83829a",
  gray2: "#c1c0c8",
  gray3: "#66707a",
  gray4: "#9ca4ab",

  white: "#fff",
  offWhite: "#f3f4f8",
  lightWhite: "#fafafc",
  black: "#000",
  red: "#e81d4d",
  green: "#00c135",
  blue1: "#ecf1f6",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xXLarge: 44,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

const PADDING_SCREEN = {
  LARGE: 20,
  MEDIUM: 16,
  SMALL: 12,
};

const Z_INDEX = {
  LARGE: 99,
  MEDIUM: 29,
  SMALL: 19,
};
const PADDING_HORIZONTAL = "6%";

export { COLORS, SIZES, SHADOWS, PADDING_SCREEN, PADDING_HORIZONTAL, Z_INDEX };
