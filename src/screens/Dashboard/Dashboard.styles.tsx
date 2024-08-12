import { Platform, StatusBar, StyleSheet } from "react-native";
import { ColorsInterface } from "../../styles/Colors";

const createStyles = (colors: ColorsInterface) => StyleSheet.create({
    dashboardContainer: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },

    overlay: {
        height: '38%',
    },

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',

    },

    ubication: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: "5%",
        marginVertical: "5%",
    },
    textUbication: {
        fontSize: 20,
        fontWeight: "600",
        color: 'white',
        textAlign: 'right',
    },

    userPerfil: {
        flexDirection: 'row',
        paddingHorizontal: "5%",
        marginVertical: "5%",
    },

    imageUser: {
        height: 50,
        width: 50,
        borderRadius: 50,
        marginRight: 5,
    },

    textPerfil: {
        fontSize: 15,
        fontWeight: '300',
        color: '#FFFFFF',
    },

    namePerfil: {
        fontSize:  20,
        fontWeight: '600',
        color: '#FFFFFF',
    },

    searchContainer: {
        paddingHorizontal: "5%",
        marginVertical: "5%",
    },

    searchBar: {
        borderRadius: 5,
    },

});

export default createStyles;
