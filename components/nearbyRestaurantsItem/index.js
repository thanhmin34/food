import React from "react";
import useTranslate from "hooks/useTranslate";
import styles from "./nearbyRestaurantsItem.styles";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { imageUrls } from "constants/imageUrls";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "constants/theme";
const NearbyRestaurantsItem = ({ item }) => {
  const { localizeMessage } = useTranslate();
  const onPressProduct = () => {};

  const renderImage = () => (
    <View style={styles.imageBlock}>
      <Image style={[styles.image]} source={imageUrls.iconImage3} />
    </View>
  );

  const renderInfo = () => (
    <View style={styles.info}>
      <Text style={styles.name}>
        {localizeMessage("Elisandra Restaurant ")}
      </Text>
      <View style={styles.address}>
        <Ionicons name="location-outline" size={16} color={COLORS.gray3} />
        <Text style={styles.subName}>
          {localizeMessage("Elisandra Restaurant ")}
        </Text>
      </View>
    </View>
  );

  return (
    <TouchableOpacity onPress={onPressProduct}>
      <View style={styles.productItem}>
        {renderImage()}
        {renderInfo()}
      </View>
    </TouchableOpacity>
  );
};

export default NearbyRestaurantsItem;
