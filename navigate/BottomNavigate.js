import React, { Fragment } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialIcons,
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Home, Cart, User, Favorite, Notification } from "screens";
import { COLORS } from "constants/theme";
import TopBarIcon from "components/topBarIcon";
import { imageUrls } from "constants/imageUrls";

const Tabs = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShow: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    height: 88,
    elevation: 0,
    alignItems: "center",
    justifyContent: "center",
  },
};
const screens = [
  {
    name: "Home",
    component: Home,
    headerShown: false,
    icon: imageUrls.iconHome,
    iconActive: imageUrls.iconHomeActive,
  },
  {
    name: "Favorite",
    component: Favorite,
    icon: imageUrls.iconHeart,
    iconActive: imageUrls.iconHeartActive,
    headerShown: true,
  },
  {
    name: "Order",
    component: Notification,
    icon: imageUrls.iconOrder,
    iconActive: imageUrls.iconOrderActive,
    headerShown: true,
  },
  {
    name: "Reward",
    component: User,
    icon: imageUrls.iconGift,
    iconActive: imageUrls.iconGiftActive,
    headerShown: false,
  },
];
const BottomNavigate = () => {
  const renderScreen = (item) => {
    const { name, component, iconActive, icon, headerShown } = item || {};

    return (
      <Tabs.Screen
        name={name}
        key={name}
        component={component}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TopBarIcon
                focused={focused}
                iconActive={iconActive}
                icon={icon}
                name={name}
              />
            );
          },
          headerShown,
        }}
      />
    );
  };

  return (
    <Tabs.Navigator screenOptions={screenOptions}>
      {screens.map(renderScreen)}
    </Tabs.Navigator>
  );
};

export default BottomNavigate;
