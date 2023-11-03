import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

export default function LoginScreen() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <AppTextInput
        placeholder="Email"
        icon={email}
        autoCapitalize="none"
        autoCorrect={false}
        textContentType={emailAddress}
        keyboardType="email-address"
        onChange = {email => setEmail(email)}
      />
      <AppTextInput
        placeholder="password"
        icon="lock"
        autoCorrect={false}
        autoCapitalize="none"
        secureTextEntry
        textContentType="password"
        onChange = {password => setPassword(password)}
      />
      <AppButton title="Login" onPress = {() => console.log(email, password)} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
  },
});
