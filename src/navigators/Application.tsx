import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import { HomeScreen } from "@/screens";
import { useTheme } from "@/theme";
import IonIcon from "react-native-vector-icons/Ionicons";

import type { ApplicationStackParamList } from "@/types/navigation";
import { Camera, HomeScreen, Profile } from "@/screens";
import React from "react";

const Stack = createStackNavigator<ApplicationStackParamList>();

const Tab = createBottomTabNavigator<ApplicationStackParamList>();

function ApplicationNavigator() {
  const { variant, navigationTheme } = useTheme();

  return (
    <NavigationContainer theme={navigationTheme}>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <IonIcon name="home-outline" size={30} color="#000" />
            ),
          }}
        />
        <Tab.Screen
          name="Camera"
          component={Camera}
          options={{
            tabBarIcon: ({ color }) => (
              <IonIcon name="camera-outline" size={30} color="#000" />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => (
              <IonIcon
                name="person-circle-outline"
                size={30}
                color="#000"
              ></IonIcon>
            ),
          }}
        />
      </Tab.Navigator>
      {/* <Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default ApplicationNavigator;
