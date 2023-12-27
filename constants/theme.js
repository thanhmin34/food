// import { Dimensions } from "react-native";
// const { height, width } = Dimensions.get(window);

const COLORS = {
  primary: "#ee4d2d",
  secondary: "#ddf0ff",
  tertiary: "#ff77554",

  gray: "#83829a",
  gray2: "#c1c0c8",

  white: "#fff",
  offWhite: "#f3f4f8",
  lightWhite: "#fafafc",
  black: "#000",
  red: "#e81d4d",
  green: "#00c135",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xXLarge: 44,
  // height,
  // width,
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

export { COLORS, SIZES, SHADOWS };
