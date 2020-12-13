import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import DeviceView from "./DeviceView";
import HistoryView from "./HistoryView";
import StatsView from "./StatsView";
import SettingsView from "./SettingsView";



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
              screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Devices') {
              iconName = focused
                ? 'ios-list'
                : 'ios-list';
            } 
            
            else if (route.name === 'History') {
              iconName = focused ? 'ios-clock' : 'ios-clock';
            }
            
            else if (route.name === 'Stats') {
              iconName = focused ? 'ios-podium' : 'ios-podium';
            }
            
            else if (route.name === 'Settings') {
              iconName = focused ? 'ios-cog' : 'ios-cog';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
        }}
      >
        <Tab.Screen
          name="Devices"
          component={DeviceView}
          options={{
            title: "Devices today",
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
            title: "Search",
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
            title: "History",
            headerStyle: {
              backgroundColor: "#130c18",
            },
            headerTintColor: "red",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}