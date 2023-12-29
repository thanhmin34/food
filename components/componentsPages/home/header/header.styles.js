import { COLORS, PADDING_SCREEN } from "constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    marginHorizontal: PADDING_SCREEN.SMALL,
    marginTop: 10,
    paddingBottom: 6,
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    marginBottom: 12,
  },
  menu: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: 24,
  },
  userName: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: 4,
  },
  name: {
    fontSize: 12,
    lineHeight: 16,
    color: COLORS.gray3,
    width: 120,
  },
  action: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: 24,
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default styles;
