import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen"; // Tela inicial
import AnotherScreen from "./screens/AnotherScreen"; // Outra tela para navegar

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Another" component={AnotherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
