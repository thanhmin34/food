import { BOX_PRODUCTS } from "constants/products";
import { COLORS, Z_INDEX } from "constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  productItem: {
    width: BOX_PRODUCTS.widthSmall,
    height: "auto",
    marginEnd: 15,
  },
  imageBlock: {
    width: "100%",
    height: "auto",
  },
  image: {
    width: BOX_PRODUCTS.widthSmall,
    height: BOX_PRODUCTS.heightSmall,
    objectFit: "contain",
  },
  info: {
    marginTop: 18,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 24,
    marginBottom: 2,
    color: COLORS.black,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    alignItems: "center",
  },
  infoLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 16,
    color: COLORS.textGray,
  },
  barrier: {
    height: 14,
    width: 1,
    marginHorizontal: 4,
    marginVertical: "auto",
    backgroundColor: COLORS.textGray,
  },
  iconStar: {
    width: 12,
    height: 12,
    objectFit: "cover",
  },
  evaluate: {
    marginEnd: 2,
  },
  toggleFavorite: {
    padding: 4,
  },
  favorite: {
    width: 20,
    height: 20,
    objectFit: "cover",
  },
  label: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingVertical: 4,
    paddingHorizontal: 10,
    maxWidth: 70,
    zIndex: Z_INDEX.SMALL,
  },
  labelName: {
    fontSize: 10,
    fontWeight: "600",
    color: COLORS.white,
  },
  saleOff: {
    position: "absolute",
    bottom: -10,
    right: 2,
    width: 128,
    height: 28,
    zIndex: Z_INDEX.SMALL,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  saleName: {
    fontSize: 11,
    fontWeight: "600",
    color: COLORS.white,
  },
});

export default styles;
