import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import ErrorMessage from "../components/ErrorMessage";
import AppFormField from "../components/AppFormField";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppFormField
              placeholder="Email"
              icon="email"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="emailAddress"
              keyboardType="email-address"
              name="email"
            />
            <AppFormField
              placeholder="password"
              icon="lock"
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry
              textContentType="password"
              name="password"
            />
            <AppButton
              style={styles.button}
              title="Login"
              handleOnPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
  },
  container: {
    padding: 10,
  },
  logo: {
    width: 200,
    height: 300,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 90,
  },
});
