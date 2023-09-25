import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View} from "react-native";

export default function App() {
  const handlePress = () => console.log("Text pressed");
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1}  onPress={handlePress}>
        Hello World! blah blah blah blah blah blah blah blah blah blah blah blah
        blah
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
  },
});
