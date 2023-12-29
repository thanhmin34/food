import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import styles from "./productsList.styles";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "constants/theme";
import useTranslate from "hooks/useTranslate";
import ProductItem from "./productItem";
import { DATA } from "constants/fakeData";

const ProductsList = ({ data }) => {
  const { title, isShowActiveSlider, config, products } = data || {};
  const { localizeMessage } = useTranslate();

  const renderTitleAndAction = () => (
    <View style={styles.title}>
      <Text style={styles.text}>{localizeMessage(title)}</Text>
      {isShowActiveSlider && (
        <TouchableOpacity style={styles.action}>
          <AntDesign name="right" size={16} color={COLORS.gray3} />
        </TouchableOpacity>
      )}
    </View>
  );

  const renderProducts = () => {
    return (
      <View style={styles.products}>
        <FlatList
          data={products?.length > 0 ? products : DATA}
          renderItem={({ item }) => (
            <ProductItem isShowActiveSlider={isShowActiveSlider} item={item} />
          )}
          keyExtractor={(item) => item.id}
          {...config}
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

export default ProductsList;
