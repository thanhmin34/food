import { PADDING_SCREEN } from "constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  banners: {
    marginTop: 12,
    marginBottom: 16,
  },
  slider: {
    marginTop: 12,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    paddingHorizontal: PADDING_SCREEN.SMALL,
  },
  sliderImage: {
    width: "94%",
    // height: 200,
    flex: 1,
    marginHorizontal: "auto",
  },
});

export default styles;
