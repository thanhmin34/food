import React from "react";
import { View, Text, Image } from "react-native";
import useTranslate from "hooks/useTranslate";
import { COLORS } from "constants/theme";

const TopBarIcon = ({ focused, iconActive, name, icon }) => {
  const { localizeMessage } = useTranslate();
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        marginTop: 6,
      }}
    >
      <Image
        source={focused ? iconActive : icon}
        style={{ width: 24, height: 24, objectFit: "contain" }}
      />
      <Text
        style={{
          color: focused ? COLORS.primary : COLORS.gray2,
          fontSize: 14,
          fontWeight: "600",
        }}
      >
        {localizeMessage(name)}
      </Text>
    </View>
  );
};

export default TopBarIcon;
