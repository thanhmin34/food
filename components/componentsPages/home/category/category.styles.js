import { PADDING_SCREEN } from "constants/theme";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  category: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    rowGap: 16,
    columnGap: 12,
    // padding: 20,
    margin: PADDING_SCREEN.SMALL,
  },
  categoryItem: {
    width: 82,
    height: 82,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 48,
    height: 48,
    objectFit: "contain",
  },
  categoryName: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 24,
  },
});

export default styles;
