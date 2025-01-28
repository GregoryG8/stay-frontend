import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import createStyles from "./Home.styles";
import { useTheme } from "../../context/ThemeContext";
import ModeSwitch from "../../components/ModeSwitch/ModeSwitch";

export default function Home() {
  const { theme, colors } = useTheme();
  const homeStyles = createStyles(colors);

  console.log(theme);
  
  return (
    <View style={homeStyles.container}>
      <ModeSwitch />
      <Text style={homeStyles.text}>Open up Home.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


