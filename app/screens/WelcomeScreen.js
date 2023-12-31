import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
    blurRadius={5}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagline}>Sell Anything You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary"/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: "flex-end" },
  logo: {
    width: 100,
    height: 100,
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
    gap: 20,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignSelf: "center",
    alignItems: "center",
  },
  tagline:{
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  }
});

export default WelcomeScreen;
