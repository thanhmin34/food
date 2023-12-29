import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {
    fontFamily: "bold",
    fontSize: 20,
    flex: 1,
    width: "auto",
  },
  header: {
    paddingVertical: 20,
  },
  address: {
    flexDirection: "column",
    gap: 2,
    marginBottom: 6,
  },
  text: {
    fontSize: 14,
    fontWeight: 400,
  },
  delivery: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: 10,
  },
  infoAddress: {
    fontSize: 14,
    fontWeight: 500,
    alignItems: "center",
    justifyContent: "center",
    paddingEnd: 24,
  },
  icon: {
    width: 14,
    height: 14,
    backgroundColor: "red",
  },
});

export default styles;
