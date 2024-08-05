import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity, Button } from "react-native";
import welcomeStyles from "./Welcome.styles";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import * as WebBrowser from 'expo-web-browser';


export default function Welcome() {

  WebBrowser.maybeCompleteAuthSession();

  GoogleSignin.configure({
    webClientId: '87993534169-l5gj0hp3bvba01023lijgtf4poapor4k.apps.googleusercontent.com', // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
    iosClientId: '87993534169-bsc1ssr9mcgkim37cjlcvbna3oi9qoqn.apps.googleusercontent.com', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    offlineAccess: true,
    forceCodeForRefreshToken: true,
  });

  const SignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <View style={welcomeStyles.container}>
      <Text style={welcomeStyles.title}>Stay</Text>
      <Image source={require("../../assets/gps.png")} style={welcomeStyles.image}/>
      <View style={welcomeStyles.socialMediaButtonContainer}>
        <View style={welcomeStyles.backgroundButton}>
          <TouchableOpacity onPress={SignIn}>
            <Image source={require("../../assets/google_icon.png")} style={welcomeStyles.googleButton}/>
          </TouchableOpacity>
        </View>
        <View style={welcomeStyles.backgroundButton}>
        <Image source={require("../../assets/google_icon.png")} style={welcomeStyles.googleButton}/>
        </View>
        <View style={welcomeStyles.backgroundButton}>
        <Image source={require("../../assets/google_icon.png")} style={welcomeStyles.googleButton}/>
        </View>
      </View>
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


