import { COLORS, PADDING_SCREEN } from "constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  productsList: {
    paddingHorizontal: PADDING_SCREEN.SMALL,
    paddingVertical: 20,
    flexDirection: "column",
  },
  title: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.black,
    marginBottom: 16,
  },
  action: {
    padding: 4,
    marginEnd: 10,
  },
});

export default styles;
