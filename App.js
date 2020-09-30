import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import HomeView from "./HomeView";
import DeviceView from "./DeviceView";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeView} />
        <Tab.Screen name="Devices" component={DeviceView} />
      </Tab.Navigator> */}
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeView}
          options={{
            headerShown: false,
            title: " ",
            headerStyle: {
              backgroundColor: "#130c18",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Devices"
          component={DeviceView}
          options={{
            title: "Recorded Devices",
            headerStyle: {
              backgroundColor: "#130c18",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
