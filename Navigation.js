import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import HomeView from "./HomeView";
import DeviceView from "./DeviceView";
import HistoryView from "./HistoryView";
import StatsView from "./StatsView";
import SettingsView from "./SettingsView";



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Devices"
          component={DeviceView}
          options={{
            title: "Devices",
            headerStyle: {
              backgroundColor: "#130c18",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Tab.Screen
          name="History"
          component={HistoryView}
          options={{
            headerShown: false,
            title: "History",
            headerStyle: {
              backgroundColor: "#130c18",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
                <Tab.Screen
          name="Stats"
          component={StatsView}
          options={{
            headerShown: false,
            title: "Statistics",
            headerStyle: {
              backgroundColor: "#130c18",
            },
            headerTintColor: "red",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
                <Tab.Screen
          name="Settings"
          component={SettingsView}
          options={{
            headerShown: false,
            title: "Settings",
            headerStyle: {
              backgroundColor: "#130c18",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}