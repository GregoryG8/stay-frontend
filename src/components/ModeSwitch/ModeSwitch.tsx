import { Switch, Text, View } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import createStyles from "./ModeSwitch.styles";

export default function ModeSwitch() {
    const { theme, toggleTheme, colors } = useTheme();
    const SwitchStyles = createStyles(colors);

    const isDarkMode = theme === 'dark';
    const modeText = isDarkMode ? 'Light mode' : 'Dark mode';

    return (
        <View style={SwitchStyles.switchContainer}>
            <Text style={SwitchStyles.text}>{modeText}</Text>
            <Switch
            value={isDarkMode}
            onValueChange={toggleTheme}
            />
        </View>
    )
}