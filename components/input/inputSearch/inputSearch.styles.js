import { COLORS } from "constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputSearch: {
    height: 40,
    width: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: COLORS.blue1,
    paddingHorizontal: 10,
    gap: 5,
    borderRadius: 32,
  },
  input: {
    width: "auto",
    height: 40,
    paddingEnd: 24,
    fontSize: 14,
    color: COLORS.black,
  },
});

export default styles;
