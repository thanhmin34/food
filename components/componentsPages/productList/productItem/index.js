import React, { useMemo } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./productItem.styles";
import { imageUrls } from "constants/imageUrls";
import useTranslate from "hooks/useTranslate";
import { COLORS } from "constants/theme";
import { BOX_PRODUCTS } from "constants/products";

const ProductItem = ({ item, isShowActiveSlider }) => {
  const { localizeMessage } = useTranslate();
  const onPressProduct = () => {};

  const widthProduct = useMemo(() => {
    const widthElement = { width: BOX_PRODUCTS.widthSmall };
    if (!isShowActiveSlider) {
      widthElement.width = "100%";
      widthElement.maxWidth = BOX_PRODUCTS.widthLarge;
      widthElement.height = BOX_PRODUCTS.heightMedium;
    }
    return widthElement;
  }, [isShowActiveSlider]);

  const renderImage = () => (
    <View style={styles.imageBlock}>
      <View style={[{ backgroundColor: COLORS.primary }, styles.label]}>
        <Text style={styles.labelName}>{localizeMessage("Promo")}</Text>
      </View>
      <Image
        style={[styles.image, widthProduct]}
        source={isShowActiveSlider ? imageUrls.iconImage : imageUrls.iconImage2}
      />
      <View style={[{ backgroundColor: COLORS.secondary }, styles.saleOff]}>
        <Text style={styles.saleName}>
          {4}
          {localizeMessage("% off your order")}
        </Text>
      </View>
    </View>
  );

  const renderInfo = () => (
    <View style={styles.info}>
      <Text style={styles.name}>{localizeMessage("Pizza Hut")}</Text>
      <View style={styles.content}>
        <View style={styles.infoLeft}>
          <Text style={styles.text}>
            {1.5}
            {localizeMessage("km")}
          </Text>
          <View style={styles.barrier} />
          <View style={styles.infoLeft}>
            <Image
              style={[styles.iconStar, styles.evaluate]}
              source={imageUrls.infoLeft}
            />
            <Text style={styles.text}>4.8</Text>
            <Text style={[styles.text, styles.evaluate]}>{`(${1.2}k)`}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.toggleFavorite}>
          <Image source={imageUrls.iconHeartBorder} style={styles.favorite} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <TouchableOpacity onPress={onPressProduct}>
      <View
        style={[
          styles.productItem,
          {
            width: widthProduct?.width,
            marginVertical: isShowActiveSlider ? 0 : 16,
          },
        ]}
      >
        {renderImage()}
        {renderInfo()}
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
