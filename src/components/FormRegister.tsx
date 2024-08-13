import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from 'react-native-paper';
import User, { UserInterface } from "../entities/User";
import Colors from "../styles/Colors";
const user = new User();// Asegúrate de importar tu módulo de usuario

const FormRegister = () => {
    const [formData, setFormData] = React.useState<UserInterface>(user.getUserInterface());
    
    const handleInputChange = (key: keyof UserInterface, value: string) => {
        user.setUserInterface(key, value);
        setFormData(user.getUserInterface());
    };

    return (
        <View style={styles.container}>
            <View style={styles.divTitle}>
                <Text style={styles.text}>Hi</Text>
                <Text style={styles.title}>Register</Text>
            </View>
            <View style={styles.inputs}>
                {/* Nuevos campos de entrada */}
                <TextInput
                    style={styles.inputCustom}
                    placeholder="Nombre"
                    value={formData.username}
                    onChangeText={(text: string) => handleInputChange('username', text)}
                />
                <TextInput
                    style={styles.inputCustom}
                    placeholder="Correo electrónico"
                    value={formData.email}
                    onChangeText={(text: string) => handleInputChange('email', text)}
                />
                <TextInput
                    style={styles.inputCustom}
                    placeholder="Contraseña"
                    secureTextEntry
                    value={formData.password}
                    onChangeText={(text: string) => handleInputChange('password', text)}
                />
                <TextInput
                    style={styles.inputCustom}
                    placeholder="Confirmar contraseña"
                    secureTextEntry
                    value={formData.confirmPassword}
                    onChangeText={(text: string) => handleInputChange('confirmPassword', text)}
                />
                
                <Button mode="contained" onPress={() => {
                    const handleSubmit = () => {
                        if (!user.validatePasswords()) {
                            alert("Las contraseñas no coinciden");
                            return;
                        }
                        console.log(user.getUserInterface());
                    }
                    handleSubmit();
                }} style={styles.btnRegister}>
                    <Text style={styles.textBtnRegister}>Register</Text>
                </Button>
                <Text>Already have an account? <Text>Login</Text></Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputs: {
        alignItems: "center",
        gap: 20,
    },
    container: {
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        height: "75%",
        width: "100%",
        position: "absolute",
        bottom: 0,
        backgroundColor: Colors.primaryColor,
    },
    divTitle: {
        color: Colors.backgroundColor,
        justifyContent: "space-between",
        padding: 20,
    },
    text: {
        color: Colors.backgroundColor,
        fontSize: 30,
    },
    title: {
        color: Colors.backgroundColor,
        fontSize: 40,
        fontWeight: "bold",
    },
    inputCustom: {
        width: "80%",
        fontSize: 20,
        padding: 10,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
    },
    btnRegister: {
        width: "80%",
        backgroundColor: "#050522",
        borderRadius: 20,
        marginTop: 20,
        padding: 5,
    },
    textBtnRegister: {
        color: "#FFDE69",
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default FormRegister;
