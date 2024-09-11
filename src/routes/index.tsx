import { AppRoutes } from "./app.routes";
import { Dashboard } from "@screens/Dashboard";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { theme } from "@styles/theme";
import { useCity } from "@hooks/useCity";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Routes() {
  const { city } = useCity();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        backgroundColor: theme.colors.gray_900,
      }}
    >
      <NavigationContainer>
        {city ? <Dashboard /> : <AppRoutes />}
      </NavigationContainer>
    </View>
  );
}
