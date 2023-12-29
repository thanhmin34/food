import React from "react";
import { COLORS } from "constants/theme";
import useTranslate from "hooks/useTranslate";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import styles from "./nearbyRestaurantsSlider.styles";
import { AntDesign } from "@expo/vector-icons";
import { DATA } from "constants/fakeData";
import NearbyRestaurantsItem from "components/nearbyRestaurantsItem";

const NearbyRestaurantsSlider = ({ products }) => {
  const { localizeMessage } = useTranslate();

  const renderTitleAndAction = () => (
    <View style={styles.title}>
      <Text style={styles.text}>{localizeMessage("Nearby Restaurants")}</Text>

      <TouchableOpacity style={styles.action}>
        <AntDesign name="right" size={16} color={COLORS.gray3} />
      </TouchableOpacity>
    </View>
  );

  const renderProducts = () => {
    return (
      <View style={styles.products}>
        <FlatList
          data={products?.length > 0 ? products : DATA}
          renderItem={({ item }) => <NearbyRestaurantsItem item={item} />}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  return (
    <View style={styles.productsList}>
      {renderTitleAndAction()}
      {renderProducts()}
    </View>
  );
};

export default NearbyRestaurantsSlider;
