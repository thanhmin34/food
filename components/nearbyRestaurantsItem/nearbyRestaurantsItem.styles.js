import { BOX_PRODUCTS } from "constants/products";
import { COLORS, Z_INDEX } from "constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  productItem: {
    width: BOX_PRODUCTS.heightLarge,
    height: "auto",
    marginEnd: 6,
    // backgroundColor: "red",
  },
  imageBlock: {
    width: "100%",
    height: "auto",
  },
  image: {
    width: BOX_PRODUCTS.heightLarge,
    // height: 140 || BOX_PRODUCTS.heightLarge,
    objectFit: "contain",
  },
  info: {
    marginTop: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 20,
    marginBottom: 2,
    color: COLORS.black,
  },
  address: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  subName: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    color: COLORS.gray3,
  },
});

export default styles;
