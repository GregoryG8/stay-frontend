import { StyleSheet } from "react-native";
import { ColorsInterface } from "../../styles/Colors";

const createStyles = (colors: ColorsInterface ) => StyleSheet.create({
    switchContainer: {
        backgroundColor: colors.backgroundColor,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: colors.textColor,
    },
});

export default createStyles;