import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./src/screens/Welcome/Welcome";
import { ThemeProvider } from "./src/context/ThemeContext";
import { useFonts, Poppins_700Bold, Poppins_900Black } from '@expo-google-fonts/poppins';


const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_900Black
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Welcome" component={Welcome} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>

  );
}