import { View, Text, Image } from "react-native";
import React, { useMemo } from "react";
import { imageUrls } from "constants/imageUrls";
import useTranslate from "hooks/useTranslate";
import { useNavigation } from "@react-navigation/native";
import styles from "./category.styles";
import { NUMBER_SHOW_CATEGORY, OTHER_CATEGORY } from "constants/home";
const categoryData = [
  {
    image: imageUrls.iconFlashSale,
    link: "",
    name: "Flash deals",
  },
  {
    image: imageUrls.iconNiceShop,
    link: "",
    name: "Nice Shop",
  },
  {
    image: imageUrls.iconPoints,
    link: "",
    name: "Points",
  },
  {
    image: imageUrls.iconRice,
    link: "",
    name: "Rice",
  },
  {
    image: imageUrls.iconNoodles,
    link: "",
    name: "Noodles",
  },
  {
    image: imageUrls.iconVegetable,
    link: "",
    name: "Vegetable",
  },
  {
    image: imageUrls.iconBBQ,
    link: "",
    name: "BBQ",
  },
];
const Category = () => {
  const navigation = useNavigation();
  const { localizeMessage } = useTranslate();

  const onNavigate = (url) => navigation.navigate(url);

  const renderCategory = (item, index) => {
    const { image, link, name } = item || {};
    return (
      <View
        style={styles.categoryItem}
        onPress={() => onNavigate()}
        key={index}
      >
        <Image style={styles.image} source={image} />
        <Text style={styles.categoryName}>{localizeMessage(name)}</Text>
      </View>
    );
  };

  const newCategoryData = useMemo(() => {
    if (categoryData && categoryData.length >= NUMBER_SHOW_CATEGORY) {
      return [...categoryData.slice(0, NUMBER_SHOW_CATEGORY), OTHER_CATEGORY];
    }
    return categoryData;
  }, [categoryData]);

  return (
    <View style={styles.category}>{newCategoryData.map(renderCategory)}</View>
  );
};

export default Category;
