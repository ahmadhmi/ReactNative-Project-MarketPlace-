import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";

export default function App() {
  return (
    <GestureHandlerRootView>
      <RegisterScreen/>
    </GestureHandlerRootView>
  );
}
