import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppPicker from "../AppPicker";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";

export default function AppFormPicker({ name, items, placeholder }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        placeholder={placeholder}
        onSelectItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
