import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import MessagesScreen from "./app/screens/MessagesScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  return (
    <GestureHandlerRootView>
      <LoginScreen />
    </GestureHandlerRootView>
  );
}
