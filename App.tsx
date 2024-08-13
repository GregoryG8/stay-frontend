import React from "react";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Register from "./src/screens/Register";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GluestackUIProvider mode="light"><NavigationContainer>
        <Stack.Navigator
          initialRouteName="Register"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer></GluestackUIProvider>
  );
}