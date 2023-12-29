import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./header.styles";
import useTranslate from "hooks/useTranslate";
import { Feather, AntDesign } from "@expo/vector-icons";
import { InputSearch } from "components/input";
import { COLORS, SIZES } from "constants/theme";
import { imageUrls } from "constants/imageUrls";
import { useNavigation } from "@react-navigation/native";
import { ROUTERS_PATH } from "routers/index";

const Header = () => {
  const { localizeMessage } = useTranslate();
  const navigation = useNavigation();

  const onPressNotification = () => {
    navigation.navigate(ROUTERS_PATH.NOTIFICATION);
  };
  const onPressCart = () => {
    navigation.navigate(ROUTERS_PATH.CART);
  };

  const renderNavbar = (
    <View style={styles.navBar}>
      <View style={styles.menu}>
        <TouchableOpacity>
          <Feather name="menu" size={SIZES.xLarge} color={COLORS.black} />
        </TouchableOpacity>
        <View style={styles.userName}>
          <Text numberOfLines={1} style={styles.name}>
            {localizeMessage(
              "NYC, React Native E-commerce App With Restful API"
            )}
          </Text>
          <AntDesign name="right" size={SIZES.medium} color={COLORS.gray3} />
        </View>
      </View>
      <View style={styles.action}>
        <TouchableOpacity onPress={onPressNotification}>
          <Image style={styles.image} source={imageUrls.iconNotification} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressCart}>
          <Image style={styles.image} source={imageUrls.iconBag} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.header}>
      {renderNavbar}
      <InputSearch />
    </View>
  );
};

export default Header;
