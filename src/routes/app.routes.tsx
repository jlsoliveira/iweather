import { Dashboard } from "@screens/Dashboard";
import React from "react";
import { Search } from "@screens/Search";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="search" component={Search} />

      <Screen name="dashboard" component={Dashboard} />
    </Navigator>
  );
}
