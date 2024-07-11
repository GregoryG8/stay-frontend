import { StyleSheet } from "react-native";
import { ColorsInterface } from "../../styles/Colors";

const createStyles = (colors: ColorsInterface ) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: colors.textColor,
    },

    prueba: {
        width: "50%",
        backgroundColor: colors.backgroundColor,
    }
});

export default createStyles;
