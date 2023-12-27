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
    height: 70,
    elevation: 0,
  },
};
const BottomNavigate = () => {
  const screens = [
    {
      name: "Home",
      component: Home,
      active: {
        icon: "silverware-fork-knife",
        color: COLORS.primary,
      },
      unActive: {
        icon: "silverware-fork-knife",
        color: COLORS.gray2,
      },
      icon: MaterialCommunityIcons,
      headerShown: false,
    },
    {
      name: "Cart",
      component: Cart,
      active: {
        icon: "cart",
        color: COLORS.primary,
      },
      unActive: {
        icon: "cart-outline",
        color: COLORS.gray2,
      },
      icon: Ionicons,
      headerShown: false,
    },
    {
      name: "Favorite",
      component: Favorite,
      active: {
        icon: "favorite",
        color: COLORS.primary,
      },
      unActive: {
        icon: "favorite-border",
        color: COLORS.gray2,
      },
      icon: MaterialIcons,
      headerShown: true,
    },
    {
      name: "Notification",
      component: Notification,
      active: {
        icon: "notifications",
        color: COLORS.primary,
      },
      unActive: {
        icon: "notifications-outline",
        color: COLORS.gray2,
      },
      icon: Ionicons,
      headerShown: true,
    },
    {
      name: "User",
      component: User,
      active: {
        icon: "user",
        color: COLORS.primary,
      },
      unActive: {
        icon: "user",
        color: COLORS.gray2,
      },
      icon: SimpleLineIcons,
      headerShown: false,
    },
  ];
  const renderScreen = (item, index) => {
    const { name, component, active, unActive, icon, headerShown } = item || {};
    const Icon = icon ?? <Fragment />;
    return (
      <Tabs.Screen
        name={name}
        key={name}
        component={component}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? active.icon : unActive.icon}
              size={24}
              color={focused ? active.color : unActive.color}
            />
          ),
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
