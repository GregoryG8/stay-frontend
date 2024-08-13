
import { StyleSheet, Text, View,Image } from "react-native";
import Colors from "../styles/Colors";
import FormRegister from "../components/FormRegister";

export default function Register() {
  return (
    <View style={styles.container}>
        <Image source={require("../assets/lightMode.png")}/>
        <FormRegister/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 80,
    position: "relative",
  },
});
