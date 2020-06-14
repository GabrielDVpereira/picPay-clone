import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

import PayButton from "./components/PayButtom";
import Home from "./pages/home";
import Wallet from "./pages/wallet";
import Pay from "./pages/pay";

const BottomNavigation = createBottomTabNavigator();

const icons = {
  home: {
    lib: AntDesign,
    iconName: "home",
  },
  wallet: {
    lib: AntDesign,
    iconName: "creditcard",
  },

  notifications: {
    lib: Ionicons,
    iconName: "ios-notifications-outline",
  },
  settings: {
    lib: AntDesign,
    iconName: "setting",
  },
};

const Routes = () => (
  <NavigationContainer>
    <BottomNavigation.Navigator
      initialRouteName="home"
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name == "pay") {
            return (
              <PayButton
                onPress={() => navigation.navigate("pay")}
                focused={focused}
              />
            );
          }
          const { lib: Icon, iconName: name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: "#131418",
          borderTopColor: "rgba(255,255,255,0.2)",
        },
        activeTintColor: "#fff",
        inactiveTintColor: "#92929c",
      }}
    >
      <BottomNavigation.Screen
        name="home"
        component={Home}
        options={{
          title: "Inicio",
        }}
      />
      <BottomNavigation.Screen
        name="wallet"
        component={Wallet}
        options={{
          title: "Carteira",
        }}
      />
      <BottomNavigation.Screen
        name="pay"
        component={Pay}
        options={{
          title: "",
        }}
      />
      <BottomNavigation.Screen
        name="notifications"
        component={Pay}
        options={{
          title: "Notificações",
        }}
      />
      <BottomNavigation.Screen
        name="settings"
        component={Pay}
        options={{
          title: "ajustes",
        }}
      />
    </BottomNavigation.Navigator>
  </NavigationContainer>
);

export default Routes;
