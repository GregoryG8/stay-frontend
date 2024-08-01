import React, { useEffect, useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity, Button } from "react-native";
import welcomeStyles from "./Welcome.styles";


export default function Welcome() {



  return (
    <View style={welcomeStyles.container}>
      <Text style={welcomeStyles.title}>Stay</Text>
      <Image source={require("../../assets/gps.png")} style={welcomeStyles.image}/>
      <View style={welcomeStyles.container2}>
        <View style={welcomeStyles.dividerBefore}/>
        <Text style= {welcomeStyles.betweenDividers}>o</Text>
        <View style={welcomeStyles.dividerAfter}/>
      </View>
      <TouchableOpacity>
        <View style={welcomeStyles.button}>
          <Text style={welcomeStyles.textButton}>Create Account</Text>
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}


