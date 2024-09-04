const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import PastasAmostras from "./screens/PastasAmostras";
import PaginaInicial from "./screens/PaginaInicial";
import InserirAmostra from "./screens/InserirAmostra";
import Analise from "./screens/Analise";
import Camera from "./screens/Camera";
import ActionSheet from "./components/ActionSheet";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-ExtraBold": require("./assets/fonts/Montserrat-ExtraBold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="PaginaInicial"
              component={PaginaInicial}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PastasAmostras"
              component={PastasAmostras}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InserirAmostra"
              component={InserirAmostra}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Analise"
              component={Analise}
              options={{ headerShown: false }}
            />
          
            <Stack.Screen
              name="Camera"
              component={Camera}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
