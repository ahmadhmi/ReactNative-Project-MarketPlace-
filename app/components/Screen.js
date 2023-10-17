import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet } from "react-native";

function Screen({ children, style }) {
  return <SafeAreaView style={[styles.screen,style]}>{children}</SafeAreaView>;
}
const styles = StyleSheet.create({
  screen: {
    height: "100%",
    paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;
