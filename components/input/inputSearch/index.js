import React from "react";
import { View, TextInput } from "react-native";
import styles from "./inputSearch.styles";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "constants/theme";
import { ROUTERS_PATH } from "routers/index";
import { useNavigation } from "@react-navigation/native";

const InputSearch = () => {
  const navigation = useNavigation();

  const onFocusInput = () => {
    navigation.navigate(ROUTERS_PATH.SEARCH);
  };

  return (
    <View style={styles.inputSearch}>
      <AntDesign name="search1" size={20} color={COLORS.gray} />
      <TextInput
        style={styles.input}
        placeholder="What are you yearning for?"
        onFocus={onFocusInput}
        placeholderTextColor={COLORS.gray4}
      />
    </View>
  );
};

export default InputSearch;
