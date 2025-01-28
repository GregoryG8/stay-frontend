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
      <Text style={homeStyles.text}>Bienvenido a la pantalla principal de la aplicación!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


