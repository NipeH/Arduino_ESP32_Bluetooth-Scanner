import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeView from "./HomeView";
import DeviceView from "./DeviceView";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeView} />
        <Stack.Screen name="Devices" component={DeviceView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
