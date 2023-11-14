import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import * as Yup from "yup";
import AppText from "../components/AppText";
import ErrorMessage from "../components/ErrorMessage";

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
            <AppTextInput
              placeholder="Email"
              icon="email"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="emailAddress"
              keyboardType="email-address"
              onBlur={() => setFieldTouched("email")}
              onChangeText={handleChange("email")}
            />
            <ErrorMessage error={errors.email} visible={touched.email} />
            <AppTextInput
              placeholder="password"
              icon="lock"
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry
              textContentType="password"
              onBlur={() => setFieldTouched("password")}
              onChangeText={handleChange("password")}
            />
            <ErrorMessage error={errors.password} visible={touched.password} />
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
