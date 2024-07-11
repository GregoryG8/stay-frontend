import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import homeStyles from "./Home.styles";
import { useTheme } from "../../context/ThemeContext";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  console.log(theme);
  
  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.text}>Open up Home.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


