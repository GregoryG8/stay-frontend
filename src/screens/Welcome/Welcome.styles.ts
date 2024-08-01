import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../styles/Colors";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const welcomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.backgroundColor,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: Colors.dark.textColor,
    },
    title: {
        color: Colors.light.textColor,
        fontFamily: "Poppins_700Bold",
        fontSize: 64,
    },
    image: {
        width: 1.0 * windowWidth,
        height: 0.5 * windowHeight,
        resizeMode: "contain"
    },
    container2: {
        flexDirection:'row',
        alignItems: 'center'
    },
    dividerAfter: {
        borderWidth: 1,
        backgroundColor: Colors.light.primaryColor,
        width: 0.35*windowWidth,
    },
    dividerBefore: {
        borderWidth: 1,
        backgroundColor: Colors.light.primaryColor,
        width: 0.35*windowWidth,
    },
    betweenDividers: {
        textAlign: "center",
        color: Colors.light.primaryColor,
        fontFamily: "Poppins_700Bold",
        fontSize: 24,
        paddingHorizontal: 8
    },
    button: {
        backgroundColor: Colors.light.primaryColor,
        borderRadius: 15,
        paddingVertical: 0.01 * windowHeight,
        paddingHorizontal: 0.15 * windowWidth,
        marginTop: 0.03 * windowHeight
    },
    textButton: {
        color: Colors.light.secondaryColor,
        fontFamily: "Poppins_900Black",
        fontSize: 20,
    }
});

export default welcomeStyles;
