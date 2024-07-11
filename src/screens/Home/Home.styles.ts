import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors";

const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark.backgroundColor,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: Colors.dark.textColor,
    }
});

export default homeStyles;
