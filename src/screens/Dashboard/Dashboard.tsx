import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Text, View, ImageBackground, Image } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import createStyles from "./Dashboard.styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Searchbar } from "react-native-paper";

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const { colors } = useTheme();
  const DashboardStyles = createStyles(colors);

  return (
    <View style={DashboardStyles.dashboardContainer}>
      <StatusBar style="auto" />
      <View style={DashboardStyles.overlay}>
        <ImageBackground
          source={require("../../assets/background-dash.jpg")}
          style={DashboardStyles.backgroundImage}
          blurRadius={4}
        >
          <View style={DashboardStyles.ubication}>
            <Text style={DashboardStyles.textUbication}>Cali</Text>
            <MaterialCommunityIcons name="google-maps" size={30} />
          </View>
          <View style={DashboardStyles.userPerfil}>
            <Image
              style={DashboardStyles.imageUser}
              source={require("../../assets/male-avatar-boy-face-man-user-7-svgrepo-com.jpg")}
            />
            <View>
              <Text style={DashboardStyles.textPerfil}>Hola</Text>
              <Text style={DashboardStyles.namePerfil}>Victor</Text>
            </View>
          </View>
          <View style={DashboardStyles.searchContainer}>
            <Searchbar
              placeholder="Search"
              onChangeText={setSearchQuery}
              value={searchQuery}
              style={DashboardStyles.searchBar}
            />
          </View>
        </ImageBackground>
      </View>

      <Text>Open Dashboard to start working on your app!</Text>
    </View>
  );
}
